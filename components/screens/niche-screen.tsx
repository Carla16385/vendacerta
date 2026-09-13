import { Shirt, Utensils, Baby, PawPrint, Check, ArrowRight } from "lucide-react"
import { niches, type Niche } from "@/lib/venda-certa"
import { StepIndicator } from "@/components/step-indicator"

const iconMap = {
  shirt: Shirt,
  utensils: Utensils,
  baby: Baby,
  pawprint: PawPrint,
}

export function NicheScreen({
  selected,
  onSelect,
  onNext,
}: {
  selected: string
  onSelect: (id: string) => void
  onNext: () => void
}) {
  return (
    <div className="p-5">
      <StepIndicator current={1} label="Nicho" />
      <h2 className="mt-4 text-2xl font-black text-[#3A1D0F]">Qual nicho você quer trabalhar?</h2>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {niches.map((niche: Niche) => {
          const Icon = iconMap[niche.icon]
          const isSelected = selected === niche.id
          return (
            <button
              key={niche.id}
              onClick={() => onSelect(niche.id)}
              className={[
                "flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center text-sm font-extrabold shadow-sm transition-colors",
                isSelected ? "bg-[#FF6B1A] text-white" : "bg-white text-[#3A1D0F]",
              ].join(" ")}
              aria-pressed={isSelected}
            >
              <Icon className="h-6 w-6" />
              <span>{niche.label}</span>
              {isSelected ? (
                <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide">
                  <Check className="h-3.5 w-3.5" /> Selecionado
                </span>
              ) : null}
            </button>
          )
        })}
      </div>

      <button
        onClick={onNext}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#FFE8C6] px-6 py-4 text-base font-extrabold text-black transition-transform active:scale-[0.98]"
      >
        Encontrar produtos <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  )
}
