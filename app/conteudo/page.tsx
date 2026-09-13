import { getVideoJobs } from "@/lib/db/queries"
import { VideoJobCard } from "@/components/video-job-card"
import { RunRobotButton } from "@/components/run-robot-button"
import { Bot, Clock } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function ConteudoPage() {
  const jobs = await getVideoJobs()

  return (
    <main className="min-h-dvh bg-neutral-50">
      <header className="border-b border-orange-100 bg-white">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-orange-500 text-white">
              <Bot className="size-6" />
            </span>
            <div>
              <h1 className="text-lg font-bold text-neutral-900">Robô VendaCerta</h1>
              <p className="flex items-center gap-1 text-xs text-neutral-500">
                <Clock className="size-3" />
                Roda automaticamente às 11h, 15h e 19h
              </p>
            </div>
          </div>
          <RunRobotButton />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-semibold text-neutral-900">Vídeos gerados</h2>
          <span className="text-sm text-neutral-400">{jobs.length} no total</span>
        </div>

        {jobs.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-orange-200 bg-white px-4 py-16 text-center">
            <Bot className="size-8 text-orange-300" />
            <p className="font-medium text-neutral-700">Nenhum vídeo gerado ainda</p>
            <p className="max-w-xs text-pretty text-sm text-neutral-400">
              O robô cria roteiros automaticamente nos horários programados. Clique em &quot;Rodar robô agora&quot; para
              gerar o primeiro lote.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <VideoJobCard key={job.id} job={job} />
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm font-medium text-orange-500 hover:text-orange-600">
            ← Voltar ao onboarding
          </Link>
        </div>
      </div>
    </main>
  )
}
