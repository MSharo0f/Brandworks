'use client'

import { useEffect, useState } from 'react'
import LiquidGlass from 'liquid-glass-react'
import { GLASS_CONFIG } from '@/lib/liquidGlassConfig'

interface GlassWrapperProps {
  children: React.ReactNode
  cornerRadius?: number
  padding?: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  overLight?: boolean
  variant?: 'navbar' | 'card' | 'button' | 'pill' | 'mobile' | 'stats' | 'project'
  mouseContainer?: React.RefObject<HTMLElement> | null
  blurAmount?: number
}

// Detect if browser supports feDisplacementMap backdrop properly
function useSupportsLiquidGlass() {
  const [supported, setSupported] = useState(true)
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox')
    if (isSafari || isFirefox) setSupported(false)
  }, [])
  return supported
}

export default function GlassWrapper({
  children,
  cornerRadius = 16,
  padding,
  className = '',
  style = {},
  onClick,
  overLight = false,
  variant,
  mouseContainer,
  blurAmount,
}: GlassWrapperProps) {
  const supported = useSupportsLiquidGlass()

  // Safari/Firefox fallback — clean backdrop blur
  if (!supported) {
    return (
      <div 
        className={`glass-fallback ${className}`}
        onClick={onClick}
        style={{
          ...style,
          borderRadius: cornerRadius,
          padding,
          background: overLight ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.2)',
          backdropFilter: blurAmount ? `blur(${blurAmount * 100}px)` : 'blur(12px)',
          WebkitBackdropFilter: blurAmount ? `blur(${blurAmount * 100}px)` : 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <LiquidGlass
      {...GLASS_CONFIG}
      cornerRadius={cornerRadius}
      padding={padding}
      className={className}
      style={style}
      onClick={onClick}
      mouseContainer={mouseContainer}
      blurAmount={blurAmount !== undefined ? blurAmount : GLASS_CONFIG.blurAmount}
    >
      {children}
    </LiquidGlass>
  )
}
