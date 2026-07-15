'use client'

import { useState } from 'react'
import { CalendarDays, RefreshCw, Check } from 'lucide-react'

const PLATFORMS = [
  { name: 'Airbnb', color: 'bg-rose-500' },
  { name: 'Booking.com', color: 'bg-blue-600' },
  { name: 'VRBO', color: 'bg-emerald-500' },
]

// estado por dia: livre | airbnb | booking | vrbo | bloqueado
type Status = 'livre' | 'airbnb' | 'booking' | 'vrbo' | 'bloqueado'

const SEED: Status[] = [
  'livre', 'livre', 'airbnb', 'airbnb', 'airbnb', 'booking', 'booking', 'livre', 'livre', 'livre',
  'vrbo', 'vrbo', 'vrbo', 'vrbo', 'livre', 'livre', 'airbnb', 'airbnb', 'bloqueado', 'bloqueado',
  'livre', 'booking', 'booking', 'booking', 'livre', 'livre', 'airbnb', 'airbnb', 'airbnb', 'livre',
]

const DAY_STYLE: Record<Status, string> = {
  livre: 'bg-white text-gray-400 ring-gray-200',
  airbnb: 'bg-rose-500 text-white ring-rose-500',
  booking: 'bg-blue-600 text-white ring-blue-600',
  vrbo: 'bg-emerald-500 text-white ring-emerald-500',
  bloqueado: 'bg-gray-300 text-gray-500 ring-gray-300',
}

export function BookingEngineDemo() {
  const [syncing, setSyncing] = useState(false)
  const [synced, setSynced] = useState(true)

  function handleSync() {
    setSyncing(true)
    setSynced(false)
    setTimeout(() => {
      setSyncing(false)
      setSynced(true)
    }, 1400)
  }

  const ocupados = SEED.filter((s) => s !== 'livre').length
  const ocupacao = Math.round((ocupados / SEED.length) * 100)

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-100">
      {/* top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 bg-gray-50 px-6 py-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="text-primary" size={20} />
          <span className="font-bold text-ink">Calendário unificado</span>
        </div>
        <button
          onClick={handleSync}
          disabled={syncing}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-70"
        >
          <RefreshCw size={15} className={syncing ? 'animate-spin' : ''} />
          {syncing ? 'Sincronizando...' : 'Sincronizar'}
        </button>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-3">
        {/* calendar */}
        <div className="lg:col-span-2">
          <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1.5">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                <span className={`h-2.5 w-2.5 rounded-full ${p.color}`} />
                {p.name}
              </span>
            ))}
            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" /> Bloqueado
            </span>
          </div>
          <div className="grid grid-cols-10 gap-1.5">
            {SEED.map((s, i) => (
              <div
                key={i}
                className={`flex aspect-square items-center justify-center rounded-md text-[11px] font-semibold ring-1 transition ${DAY_STYLE[s]}`}
                title={s}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
            {synced ? (
              <>
                <Check size={13} className="text-success" /> Sincronizado com 3 plataformas — sem risco de overbooking
              </>
            ) : (
              'Atualizando disponibilidade em todas as plataformas...'
            )}
          </p>
        </div>

        {/* pricing + stats */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-primary-light p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Precificação dinâmica</p>
            <p className="mt-2 text-3xl font-extrabold text-ink">R$ 720</p>
            <p className="text-xs text-gray-500">diária sugerida hoje</p>
            <div className="mt-3 flex items-center gap-1 text-xs font-medium text-success">
              <span>▲ +18% vs. preço fixo</span>
            </div>
            <p className="mt-2 text-[11px] text-gray-400">Ajustado por demanda, eventos e sazonalidade.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-primary">{ocupacao}%</p>
              <p className="text-[11px] text-gray-500">ocupação do mês</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-primary">3</p>
              <p className="text-[11px] text-gray-500">canais ativos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
