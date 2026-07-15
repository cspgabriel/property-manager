'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  className?: string
  /** direção de entrada */
  from?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

const OFFSETS: Record<NonNullable<Props['from']>, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  scale: 'scale-95',
}

export function Reveal({ children, delay = 0, className = '', from = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Sem IntersectionObserver ou reduced-motion: revela direto.
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (typeof IntersectionObserver === 'undefined' || prefersReduced) {
      setVisible(true)
      return
    }

    // Se já está em viewport no mount, revela imediatamente.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)

    // Fallback de segurança: nunca deixar conteúdo preso invisível.
    const safety = setTimeout(() => setVisible(true), 1200)

    return () => {
      obs.disconnect()
      clearTimeout(safety)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `${OFFSETS[from]} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  )
}
