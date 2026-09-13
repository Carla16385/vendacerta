import { db } from "@/lib/db"
import { products, videoJobs } from "@/lib/db/schema"
import { generateObject } from "ai"
import { z } from "zod"
import { desc } from "drizzle-orm"

export const maxDuration = 60

const AFFILIATE_ID = "18379590013"
const MODEL = "openai/gpt-5-mini"

const scriptSchema = z.object({
  hook: z.string().describe("Frase de abertura curta e chamativa (primeiros 3 segundos do vídeo)"),
  script: z.string().describe("Roteiro completo do vídeo curto (15-30s), em tópicos separados por quebras de linha"),
  caption: z.string().describe("Legenda pronta para postar, com tom leve e apelo de venda"),
  hashtags: z.string().describe("5 a 8 hashtags relevantes separadas por espaço, cada uma começando com #"),
})

function isAuthorized(request: Request) {
  const auth = request.headers.get("authorization")
  return auth === `Bearer ${process.env.CRON_SECRET}`
}

async function runRobot() {
  const allProducts = await db.select().from(products)
  const created: { productName: string; hook: string }[] = []

  for (const product of allProducts) {
    const reais = (product.price / 100).toFixed(2).replace(".", ",")
    const { object } = await generateObject({
      model: MODEL,
      schema: scriptSchema,
      prompt: `Você é o robô de conteúdo da VendaCerta, que cria vídeos curtos para afiliados da Shopee.
Gere um roteiro de vídeo para o produto abaixo, em português do Brasil, com tom informal e persuasivo para TikTok/Reels.

Produto: ${product.name}
Preço: R$${reais}
Nicho: ${product.niche}
Vendas: ${product.sales}

A legenda deve terminar mencionando que o link do produto está na bio (afiliado ${AFFILIATE_ID}).`,
    })

    const [job] = await db
      .insert(videoJobs)
      .values({
        productId: product.id,
        productName: product.name,
        hook: object.hook,
        script: object.script,
        caption: object.caption,
        hashtags: object.hashtags,
        model: MODEL,
      })
      .returning()

    created.push({ productName: job.productName, hook: job.hook })
  }

  return created
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    const created = await runRobot()
    return Response.json({
      ok: true,
      executadoEm: new Date().toISOString(),
      videosGerados: created.length,
      itens: created,
    })
  } catch (error) {
    console.error("[v0] Erro no robô:", error)
    return Response.json({ ok: false, error: "Falha ao gerar vídeos" }, { status: 500 })
  }
}
