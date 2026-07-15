'use client'

import { useState } from 'react'
import { Star, Check, Minus, Plus } from 'lucide-react'

function brl(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

export function BookingWidget({
  preco,
  nota,
  avaliacoes,
  maxHospedes,
  nome,
}: {
  preco: number
  nota: number
  avaliacoes: number
  maxHospedes: number
  nome: string
}) {
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [hospedes, setHospedes] = useState(2)
  const [enviado, setEnviado] = useState(false)

  // calcula noites
  const noites =
    checkin && checkout
      ? Math.max(0, Math.round((new Date(checkout).getTime() - new Date(checkin).getTime()) / 86400000))
      : 0

  const subtotal = noites * preco
  const limpeza = noites > 0 ? 180 : 0
  const servico = Math.round(subtotal * 0.08)
  const total = subtotal + limpeza + servico

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
      {enviado ? (
        <div className="py-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
            <Check size={28} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-ink">Solicitação enviada!</h3>
          <p className="mt-2 text-sm text-gray-600">
            Recebemos seu pedido de reserva para <strong>{nome}</strong>. Nossa equipe confirma a
            disponibilidade e entra em contato em minutos.
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="mt-5 text-sm font-semibold text-primary hover:underline"
          >
            Fazer outra simulação
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-baseline justify-between">
            <p>
              <span className="text-2xl font-extrabold text-ink">{brl(preco)}</span>
              <span className="text-sm text-gray-500"> /noite</span>
            </p>
            <span className="flex items-center gap-1 text-sm font-semibold text-ink">
              <Star size={14} className="fill-amber text-amber" />
              {nota.toFixed(2).replace('.', ',')} · {avaliacoes} avaliações
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500">Check-in</span>
              <input
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500">Check-out</span>
              <input
                type="date"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
              />
            </label>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2.5">
            <span className="text-sm font-semibold text-gray-600">Hóspedes</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setHospedes(Math.max(1, hospedes - 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                aria-label="Menos hóspedes"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center font-bold text-ink">{hospedes}</span>
              <button
                onClick={() => setHospedes(Math.min(maxHospedes, hospedes + 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                aria-label="Mais hóspedes"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {noites > 0 && (
            <dl className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">
                  {brl(preco)} × {noites} noite{noites > 1 ? 's' : ''}
                </dt>
                <dd className="text-ink">{brl(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Taxa de limpeza</dt>
                <dd className="text-ink">{brl(limpeza)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Taxa de serviço</dt>
                <dd className="text-ink">{brl(servico)}</dd>
              </div>
              <div className="flex justify-between border-t border-gray-100 pt-2 text-base font-bold text-ink">
                <dt>Total</dt>
                <dd>{brl(total)}</dd>
              </div>
            </dl>
          )}

          <button
            onClick={() => noites > 0 && setEnviado(true)}
            disabled={noites <= 0}
            className="mt-5 w-full rounded-lg bg-primary px-6 py-3.5 font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            {noites > 0 ? 'Solicitar reserva' : 'Escolha as datas'}
          </button>
          <p className="mt-3 text-center text-xs text-gray-400">Você ainda não será cobrado.</p>
        </>
      )}
    </div>
  )
}
