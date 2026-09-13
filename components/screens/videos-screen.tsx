import { Sparkles, Zap } from "lucide-react"
import { videoOptions, AFFILIATE_ID } from "@/lib/venda-certa"
import { StepIndicator } from "@/components/step-indicator"

export function VideosScreen({
  selected,
  onSelect,
  onNext,
}: {
  selected: number
  onSelect: (count: number) => void
  onNext: () => void
}) {
  return (
    <div className="p-5">
      <StepIndicator current={3} label="Vídeos" />
      <h2 className="mt-4 text-2xl font-black text-[#3A1D0F]">Quantos vídeos vamos criar?</h2>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {videoOptions.map((count) => {
          const isSelected = selected === count
          return (
            <button
              key={count}
              onClick={() => onSelect(count)}
              className={[
                "flex flex-col items-center rounded-2xl p-4 shadow-sm transition-colors",
                isSelected ? "bg-[#3A1D0F] text-[#FFE8C6]" : "bg-white text-[#3A1D0F]",
              ].join(" ")}
              aria-pressed={isSelected}
            >
              <b className="text-3xl">{count}</b>
              <span className="text-sm font-semibold">vídeos</span>
            </button>
          )
        })}
      </div>

      <button
        onClick={onNext}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B1A] px-6 py-4 text-base font-extrabold text-white transition-transform active:scale-[0.98]"
      >
        <Sparkles className="h-5 w-5" /> Deixar a VendaCerta escolher — Recomendado
      </button>
      <button
        onClick={onNext}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#FFE8C6] px-6 py-4 text-base font-extrabold text-black transition-transform active:scale-[0.98]"
      >
        <Zap className="h-5 w-5" /> Criar meus vídeos com ID {AFFILIATE_ID}
      </button>
    </div>
  )
}
