import type { VideoJob } from "@/lib/db/schema"
import { Sparkles, Hash, FileText, Megaphone } from "lucide-react"

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date))
}

export function VideoJobCard({ job }: { job: VideoJob }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-balance font-semibold text-neutral-900">{job.productName}</h3>
          <p className="text-xs text-neutral-400">{formatDate(job.createdAt)}</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
          <Sparkles className="size-3" />
          {job.status}
        </span>
      </header>

      <div className="rounded-xl bg-orange-50 p-3">
        <p className="text-pretty text-sm font-medium text-orange-900">{job.hook}</p>
      </div>

      <Section icon={<FileText className="size-4 text-orange-500" />} title="Roteiro">
        <p className="whitespace-pre-line text-sm leading-relaxed text-neutral-600">{job.script}</p>
      </Section>

      <Section icon={<Megaphone className="size-4 text-orange-500" />} title="Legenda">
        <p className="text-pretty text-sm leading-relaxed text-neutral-600">{job.caption}</p>
      </Section>

      <Section icon={<Hash className="size-4 text-orange-500" />} title="Hashtags">
        <p className="text-sm font-medium text-orange-600">{job.hashtags}</p>
      </Section>
    </article>
  )
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-400">
        {icon}
        {title}
      </div>
      {children}
    </div>
  )
}
