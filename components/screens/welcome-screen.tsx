import { Search, Clapperboard, Scissors, Send } from "lucide-react"
import { AFFILIATE_ID } from "@/lib/venda-certa"

const features = [
  { icon: Search, text: "Encontra produtos que mais vendem em Moda e Beleza" },
  { icon: Clapperboard, text: "Transforma vídeos virais em conteúdo próprio" },
  { icon: Scissors, text: "Corta, legenda e cria hashtags automáticas" },
  { icon: Send, text: `Posta no automático às 11h, 15h e 19h com seu link ${AFFILIATE_ID}` },
]

export function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="rounded-b-[28px] bg-[#FF4D00] px-5 pb-8 pt-6 text-center text-white shadow-lg">
      <span className="inline-block rounded-full bg-[#FFF2C7] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#333]">
        Sua nova funcionária IA — ID {AFFILIATE_ID}
      </span>

      <h1 className="mt-4 text-balance text-4xl font-black leading-none">
        Quem é a{" "}
        <span className="underline decoration-[#FFD23F] decoration-4 underline-offset-4">VendaCerta?</span>
      </h1>

      <p className="mx-auto mt-3 max-w-xs text-pretty text-sm leading-relaxed text-white/90">
        Cria, edita e posta vídeos por você no Shopee Video, TikTok e Instagram. Nicho Moda e Beleza — Afiliada{" "}
        {AFFILIATE_ID}.
      </p>

      <ul className="mt-5 space-y-2.5 text-left">
        {features.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm font-semibold text-[#3A1D0F] shadow-sm">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFE8C6] text-[#FF4D00]">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-pretty">{text}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onNext}
        className="mt-6 w-full rounded-full bg-[#FFD23F] px-6 py-4 text-base font-extrabold text-black transition-transform active:scale-[0.98]"
      >
        QUERO A VENDACERTA PRA MIM
      </button>
    </div>
  )
}
