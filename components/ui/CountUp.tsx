'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  /** valor final numérico */
  to: number
  prefix?: string
  suffix?: string
  /** casas decimais */
  decimals?: number
  duration?: number
  className?: string
  /** separador de milhar pt-BR */
  grouping?: boolean
}

export function CountUp({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1600,
  className = '',
  grouping = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const animate = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
        setVal(to * eased)
        if (p < 1) requestAnimationFrame(tick)
        else setVal(to)
      }
      requestAnimationFrame(tick)
      // Garante o valor final mesmo se rAF não avançar (aba em background).
      setTimeout(() => setVal(to), duration + 100)
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (typeof IntersectionObserver === 'undefined' || prefersReduced) {
      setVal(to)
      started.current = true
      return
    }

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) animate()

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate()
      },
      { threshold: 0.4 }
    )
    obs.observe(el)

    // Fallback: se o observer não disparar, mostra o valor final.
    const safety = setTimeout(() => {
      if (!started.current) {
        setVal(to)
        started.current = true
      }
    }, 1400)

    return () => {
      obs.disconnect()
      clearTimeout(safety)
    }
  }, [to, duration])

  const formatted = grouping
    ? val.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : val.toFixed(decimals).replace('.', ',')

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
