interface StatBarProps {
  label: string
  current: number
  max: number
  type: "health" | "mana" | "xp"
  showNumbers?: boolean
}

export default function StatBar({ label, current, max, type, showNumbers = true }: StatBarProps) {
  const percentage = (current / max) * 100

  const getBarClass = () => {
    switch (type) {
      case "health":
        return "health-bar"
      case "mana":
        return "mana-bar"
      case "xp":
        return "xp-bar"
      default:
        return "health-bar"
    }
  }

  const getGradient = () => {
    switch (type) {
      case "health":
        return "from-red-600 to-red-400"
      case "mana":
        return "from-blue-600 to-blue-400"
      case "xp":
        return "from-green-600 to-green-400"
      default:
        return "from-red-600 to-red-400"
    }
  }

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-amber-200">{label}</span>
        {showNumbers && (
          <span className="text-xs text-amber-300">
            {current}/{max}
          </span>
        )}
      </div>
      <div className={getBarClass()}>
        <div
          className={`h-full bg-gradient-to-r ${getGradient()} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
