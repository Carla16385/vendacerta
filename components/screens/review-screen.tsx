import Image from "next/image"
import { Play, Check, Music2, Camera, Store } from "lucide-react"
import { products, AFFILIATE_ID, type Product } from "@/lib/venda-certa"
import { StepIndicator } from "@/components/step-indicator"

export function ReviewScreen({
  productId,
  videoCount,
  onApprove,
}: {
  productId: string
  videoCount: number
  onApprove: () => void
}) {
  const product: Product = products.find((p) => p.id === productId) ?? products[0]

  return (
    <div className="p-5 pb-28">
      <StepIndicator current={4} />
      <h2 className="mt-4 text-2xl font-black text-[#3A1D0F]">Revise os vídeos criados pela VendaCerta</h2>
      <p className="mt-1 text-sm text-[#3A1D0F]/60">
        {videoCount} vídeos prontos com seu link {AFFILIATE_ID} vinculado
      </p>

      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/35 text-white">
            <Play className="h-6 w-6 fill-white" />
            <span className="text-xs font-bold">17s</span>
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-extrabold text-[#3A1D0F]">{product.name} que parece pisar nas nuvens...</p>
          <p className="mt-1 text-sm font-semibold text-[#FF6B1A]">#achadinho #moda</p>
          <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-green-600">
            <Check className="h-3.5 w-3.5" /> Sem direitos autorais · ?aff={AFFILIATE_ID}
          </p>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md p-4">
        <button
          onClick={onApprove}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF4D00] px-6 py-4 text-base font-extrabold text-white shadow-lg transition-transform active:scale-[0.98]"
        >
          <span className="flex items-center gap-1.5">
            <Store className="h-5 w-5" />
            <Music2 className="h-5 w-5" />
            <Camera className="h-5 w-5" />
          </span>
          Aprovar e postar — ID {AFFILIATE_ID}
        </button>
      </div>
    </div>
  )
}
