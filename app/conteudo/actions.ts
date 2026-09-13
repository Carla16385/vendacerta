"use server"

import { db } from "@/lib/db"
import { products, videoJobs } from "@/lib/db/schema"
import { generateObject } from "ai"
import { z } from "zod"
import { revalidatePath } from "next/cache"

const AFFILIATE_ID = "18379590013"
const MODEL = "openai/gpt-5-mini"

const scriptSchema = z.object({
  hook: z.string(),
  script: z.string(),
  caption: z.string(),
  hashtags: z.string(),
})

export async function runRobotNow() {
  const allProducts = await db.select().from(products)

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

O hook deve ser uma frase de abertura curta e chamativa.
O script deve ser um roteiro de 15-30s em tópicos separados por quebras de linha.
As hashtags devem ser 5 a 8, separadas por espaço, cada uma começando com #.
A legenda deve terminar mencionando que o link do produto está na bio (afiliado ${AFFILIATE_ID}).`,
    })

    await db.insert(videoJobs).values({
      productId: product.id,
      productName: product.name,
      hook: object.hook,
      script: object.script,
      caption: object.caption,
      hashtags: object.hashtags,
      model: MODEL,
    })
  }

  revalidatePath("/conteudo")
}
