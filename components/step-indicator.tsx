import { Check } from "lucide-react"

type StepIndicatorProps = {
  current: number
  label?: string
}

const TOTAL = 4

export function StepIndicator({ current, label }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        {Array.from({ length: TOTAL }, (_, i) => {
          const step = i + 1
          const isDone = step < current
          const isActive = step === current
          return (
            <span
              key={step}
              className={[
                "flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold transition-colors",
                isActive
                  ? "bg-[#FF6B1A] text-white"
                  : isDone
                    ? "bg-[#FF6B1A]/15 text-[#FF6B1A]"
                    : "bg-black/5 text-black/40",
              ].join(" ")}
              aria-current={isActive ? "step" : undefined}
            >
              {isDone ? <Check className="h-4 w-4" /> : step}
            </span>
          )
        })}
      </div>
      {label ? <span className="text-sm font-extrabold text-[#FF6B1A]">{label}</span> : null}
    </div>
  )
}
