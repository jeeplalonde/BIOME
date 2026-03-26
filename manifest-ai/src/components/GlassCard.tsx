/**
 * GlassCard — the standard container for Canopy mode.
 *
 * WHY: Glass morphism is our internal design language.
 * Every panel, widget, and section sits inside a glass card.
 * This keeps the UI consistent and the code DRY.
 */

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`glass-card p-5 ${className}`}>
      {children}
    </div>
  )
}
