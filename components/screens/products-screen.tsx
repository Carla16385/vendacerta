import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { products, AFFILIATE_ID, type Product } from "@/lib/venda-certa"
import { StepIndicator } from "@/components/step-indicator"

export function ProductsScreen({
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
      <StepIndicator current={2} label="Produtos" />
      <h2 className="mt-4 text-2xl font-black text-[#3A1D0F]">Top produtos de Moda e Beleza hoje</h2>

      <label htmlFor="affiliate-id" className="mt-4 block text-xs font-extrabold uppercase tracking-wide text-[#3A1D0F]">
        Seu ID de afiliada conectado
      </label>
      <div
        id="affiliate-id"
        className="mt-2 flex items-center justify-between rounded-xl border-2 border-[#FF6B1A] bg-white px-4 py-3 font-extrabold text-[#3A1D0F]"
      >
        <span>{AFFILIATE_ID}</span>
        <span className="flex items-center gap-1 text-sm text-green-600">
          <Check className="h-4 w-4" /> Conectada
        </span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {products.map((product: Product) => {
          const isSelected = selected === product.id
          return (
            <li key={product.id}>
              <button
                onClick={() => onSelect(product.id)}
                className={[
                  "flex w-full items-center gap-3 rounded-2xl p-3 text-left shadow-sm transition-colors",
                  isSelected ? "bg-[#FFE8C6] ring-2 ring-[#FF6B1A]" : "bg-white",
                ].join(" ")}
                aria-pressed={isSelected}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="h-16 w-16 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-extrabold text-[#3A1D0F]">{product.name}</p>
                  <p className="text-xs text-[#3A1D0F]/60">
                    {product.sales} · {product.commission}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-[#FF6B1A]">Link: ?aff={AFFILIATE_ID}</p>
                </div>
                {isSelected ? <Check className="h-5 w-5 shrink-0 text-[#FF6B1A]" /> : null}
              </button>
            </li>
          )
        })}
      </ul>

      <button
        onClick={onNext}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B1A] px-6 py-4 text-base font-extrabold text-white transition-transform active:scale-[0.98]"
      >
        Continuar com este produto <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  )
}
