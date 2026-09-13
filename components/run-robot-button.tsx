"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { runRobotNow } from "@/app/conteudo/actions"
import { Loader2, Play } from "lucide-react"

export function RunRobotButton() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-end gap-1">
      <Button
        onClick={() => {
          setError(null)
          startTransition(async () => {
            try {
              await runRobotNow()
            } catch {
              setError("Falha ao rodar o robô. Tente de novo.")
            }
          })
        }}
        disabled={isPending}
        className="bg-orange-500 font-semibold text-white hover:bg-orange-600"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Gerando...
          </>
        ) : (
          <>
            <Play className="size-4" />
            Rodar robô agora
          </>
        )}
      </Button>
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  )
}
