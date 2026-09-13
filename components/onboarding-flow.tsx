"use client"

import { useState } from "react"
import { PartyPopper } from "lucide-react"
import { WelcomeScreen } from "@/components/screens/welcome-screen"
import { NicheScreen } from "@/components/screens/niche-screen"
import { ProductsScreen } from "@/components/screens/products-screen"
import { VideosScreen } from "@/components/screens/videos-screen"
import { ReviewScreen } from "@/components/screens/review-screen"
import { AFFILIATE_ID } from "@/lib/venda-certa"

type Screen = 1 | 2 | 3 | 4 | 5 | 6

export function OnboardingFlow() {
  const [screen, setScreen] = useState<Screen>(1)
  const [niche, setNiche] = useState("moda-beleza")
  const [product, setProduct] = useState("meias-nuvem")
  const [videoCount, setVideoCount] = useState(3)

  const go = (n: Screen) => {
    setScreen(n)
    window.scrollTo(0, 0)
  }

  return (
    <main className="mx-auto min-h-dvh max-w-md bg-[#FFF7ED]">
      {screen === 1 && <WelcomeScreen onNext={() => go(2)} />}
      {screen === 2 && <NicheScreen selected={niche} onSelect={setNiche} onNext={() => go(3)} />}
      {screen === 3 && <ProductsScreen selected={product} onSelect={setProduct} onNext={() => go(4)} />}
      {screen === 4 && <VideosScreen selected={videoCount} onSelect={setVideoCount} onNext={() => go(5)} />}
      {screen === 5 && <ReviewScreen productId={product} videoCount={videoCount} onApprove={() => go(6)} />}
      {screen === 6 && (
        <div className="flex min-h-dvh flex-col items-center justify-center p-8 text-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFD23F] text-[#FF4D00]">
            <PartyPopper className="h-10 w-10" />
          </span>
          <h2 className="mt-6 text-2xl font-black text-[#3A1D0F]">Tudo pronto!</h2>
          <p className="mt-2 max-w-xs text-pretty text-sm text-[#3A1D0F]/70">
            Seus vídeos foram agendados para postar às 11h, 15h e 19h com o link da afiliada {AFFILIATE_ID}.
          </p>
          <button
            onClick={() => go(1)}
            className="mt-6 rounded-full bg-[#FF6B1A] px-8 py-3 text-sm font-extrabold text-white transition-transform active:scale-[0.98]"
          >
            Voltar ao início
          </button>
        </div>
      )}
    </main>
  )
}
