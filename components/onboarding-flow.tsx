"use client"

import { useState } from "react"
import { PartyPopper } from "lucide-react"
import { WelcomeScreen } from "@/components/screens/tela-boas-vindas"
import { NicheScreen } from "@/components/screens/tela-nicho"
import { ProductsScreen } from "@/components/screens/tela-produtos"
import { VideosScreen } from "@/components/screens/tela-videos"
import { ReviewScreen } from "@/components/screens/tela-revisao"
import { AFFILIATE_ID } from "@/lib/venda-certa"

type Screen = 1 | 2 | 3 | 4 | 5 | 6

export function OnboardingFlow() {
  const [screen, setScreen] = useState<Screen>(1)
  const [niche, setNiche] = useState("moda-beleza")
  const [product, setProduct] = useState("meias-calca")
  const [videoCount, setVideoCount] = useState(3)

  const go = (n: Screen) => {
    setScreen(n)
    window.scrollTo(0, 0)
  }

  return (
    <main className="mx-auto min-h-dvh max-w-md bg-white">
      {screen === 1 && <WelcomeScreen onNext={() => go(2)} />}
      {screen === 2 && <NicheScreen selected={niche} onSelect={setNiche} onNext={() => go(3)} />}
      {screen === 3 && <ProductsScreen selected={product} onSelect={setProduct} onNext={() => go(4)} />}
      {screen === 4 && <VideosScreen selected={videoCount} onSelect={setVideoCount} onNext={() => go(5)} />}
      {screen === 5 && <ReviewScreen productId={product} videoCount={videoCount} onNext={() => go(6)} />}
      {screen === 6 && (
        <div className="flex min-h-dvh flex-col items-center justify-center p-6 text-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <PartyPopper className="h-10 w-10 text-green-600" />
          </span>
          <h2 className="mt-6 text-2xl font-black">Tudo pronto! 🎉</h2>
          <p className="mt-2 max-w-xs text-pretty text-zinc-600">
            Seus vídeos foram agendados para postar automaticamente. Agora desbloqueie sua loja completa!
          </p>
          
          <div className="mt-6 w-full rounded-2xl bg-yellow-50 p-4 border border-yellow-200">
            <p className="text-sm font-bold">🔥 OFERTA ESPECIAL</p>
            <p className="mt-1 text-2xl font-black">R$27 <span className="text-sm font-normal line-through">R$97</span></p>
            <p className="text-xs text-zinc-600">Acesso vitalício + vídeos prontos</p>
          </div>

          <button
            onClick={() => window.location.href = 'https://pay.kiwify.com.br/Vtt0mHD'}
            className="mt-6 w-full rounded-full bg-[#FF6B00] py-4 text-lg font-black text-white shadow-lg hover:bg-orange-600"
          >
            LIBERAR MINHA LOJA AGORA 🚀
          </button>
          
          <p className="mt-3 text-xs text-zinc-500">Pagamento 100% seguro pela Kiwify</p>
        </div>
      )}
    </main>
  )
}
