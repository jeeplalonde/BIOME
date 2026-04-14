interface WaveDividerProps {
  fillColor?: string
  className?: string
  flip?: boolean
}

export function WaveDivider({
  fillColor = '#0d1f10',
  className = '',
  flip = false,
}: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
      >
        <path
          fill={fillColor}
          d="M0,64 C240,100 480,20 720,64 C960,108 1200,28 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  )
}
