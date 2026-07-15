'use client'

import { useState } from 'react'
import { GripVertical } from 'lucide-react'

function brl(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

/**
 * Resultado comparativo:
 * - Desktop (>= sm): duas colunas lado a lado.
 * - Mobile (< sm): slider — arrasta a alça para revelar "com gestão" sobre "por conta própria".
 */
export function ComparisonResult({
  proprio,
  comPM,
  sufixo = '/mês',
}: {
  proprio: number
  comPM: number
  sufixo?: string
}) {
  const [pos, setPos] = useState(55) // % revelado do painel "com PM" no mobile

  return (
    <div>
      {/* Desktop: 2 colunas */}
      <div className="hidden grid-cols-2 gap-4 sm:grid">
        <div className="rounded-xl bg-gray-50 p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Por conta própria</p>
          <p className="mt-2 text-2xl font-bold text-gray-500">{brl(proprio)}</p>
          <p className="text-xs text-gray-400">{sufixo}</p>
        </div>
        <div className="rounded-xl bg-primary-light p-5 text-center ring-2 ring-primary">
          <p className="text-xs font-medium uppercase tracking-wide text-primary">Com a PropertyManager</p>
          <p className="mt-2 text-2xl font-extrabold text-primary">{brl(comPM)}</p>
          <p className="text-xs text-primary">{sufixo}</p>
        </div>
      </div>

      {/* Mobile: slider comparativo */}
      <div className="sm:hidden">
        <div className="relative h-32 overflow-hidden rounded-xl ring-1 ring-gray-200">
          {/* fundo: por conta própria */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
            <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Por conta própria</p>
            <p className="mt-1 text-2xl font-bold text-gray-500">{brl(proprio)}</p>
            <p className="text-xs text-gray-400">{sufixo}</p>
          </div>
          {/* frente: com PM, largura controlada pelo slider */}
          <div
            className="absolute inset-y-0 left-0 flex flex-col items-center justify-center overflow-hidden bg-primary-light"
            style={{ width: `${pos}%` }}
          >
            <div className="flex w-[calc(100vw-4rem)] max-w-md flex-col items-center justify-center">
              <p className="text-[11px] font-medium uppercase tracking-wide text-primary">Com a PropertyManager</p>
              <p className="mt-1 text-2xl font-extrabold text-primary">{brl(comPM)}</p>
              <p className="text-xs text-primary">{sufixo}</p>
            </div>
          </div>
          {/* alça */}
          <div
            className="pointer-events-none absolute inset-y-0 flex items-center"
            style={{ left: `calc(${pos}% - 14px)` }}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-lg">
              <GripVertical size={16} />
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Comparar renda"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
        <p className="mt-2 text-center text-[11px] text-gray-400">← arraste para comparar →</p>
      </div>
    </div>
  )
}
