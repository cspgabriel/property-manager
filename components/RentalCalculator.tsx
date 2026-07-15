'use client'

import { useState } from 'react'
import { Minus, Plus, MapPin, TrendingUp, BarChart3, CalendarDays } from 'lucide-react'

function brl(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

function Stepper({ label, value, set }: { label: string; value: number; set: (v: number) => void }) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div className="mt-2 flex items-center gap-3">
        <button
          onClick={() => set(Math.max(1, value - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
          aria-label={`Menos ${label}`}
        >
          <Minus size={16} />
        </button>
        <span className="w-10 text-center text-lg font-bold text-ink">{value >= 6 ? '6+' : value}</span>
        <button
          onClick={() => set(Math.min(6, value + 1))}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
          aria-label={`Mais ${label}`}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  )
}

export function RentalCalculator() {
  const [quartos, setQuartos] = useState(2)
  const [hospedes, setHospedes] = useState(4)
  const [calculado, setCalculado] = useState(false)
  const [bairro, setBairro] = useState('')

  const diaria = 480 + quartos * 220 + hospedes * 40
  const receitaAnual = Math.round((diaria * 365 * 0.82) / 1000) * 1000
  const receitaMensal = Math.round(receitaAnual / 12 / 100) * 100

  return (
    <section id="rental-data-display" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Quanto seu imóvel pode render no Airbnb?
          </h2>
          <p className="mt-3 text-gray-600">
            Calculadora gratuita — receba sua estimativa em 30 segundos.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Map placeholder */}
          <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-gray-100 ring-1 ring-gray-100">
            <div className="text-center text-gray-400">
              <MapPin className="mx-auto" size={48} />
              <p className="mt-3 text-sm font-medium">
                {calculado ? `Imóvel localizado${bairro ? ` em ${bairro}` : ''}` : 'Informe o endereço para localizar'}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100 md:p-8">
            <div className="grid grid-cols-2 gap-3">
              <input
                className="col-span-2 rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Nome da rua"
              />
              <input
                className="rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Número"
              />
              <input
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Bairro"
              />
              <input
                className="col-span-2 rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Cidade"
                defaultValue="Rio de Janeiro"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <Stepper label="Quartos" value={quartos} set={setQuartos} />
              <Stepper label="Acomoda" value={hospedes} set={setHospedes} />
            </div>

            <button
              onClick={() => setCalculado(true)}
              className="mt-8 w-full rounded-lg bg-primary px-6 py-3.5 font-semibold text-white transition hover:bg-primary-dark"
            >
              Calcular receita
            </button>
          </div>
        </div>

        {/* Results */}
        {calculado && (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-primary p-6 text-white">
              <TrendingUp size={28} />
              <p className="mt-4 text-sm opacity-90">Previsão de receita anual</p>
              <p className="mt-1 text-3xl font-extrabold">{brl(receitaAnual)}</p>
              <p className="mt-1 text-sm opacity-90">≈ {brl(receitaMensal)}/mês</p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-100">
              <BarChart3 className="text-primary" size={28} />
              <p className="mt-4 text-sm text-gray-500">Estatísticas do imóvel</p>
              <dl className="mt-3 space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Diária média</dt>
                  <dd className="font-semibold text-ink">{brl(diaria)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Quartos</dt>
                  <dd className="font-semibold text-ink">{quartos >= 6 ? '6+' : quartos}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Capacidade</dt>
                  <dd className="font-semibold text-ink">{hospedes >= 6 ? '6+' : hospedes} hóspedes</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-100">
              <CalendarDays className="text-primary" size={28} />
              <p className="mt-4 text-sm text-gray-500">Ocupação estimada</p>
              <p className="mt-1 text-3xl font-extrabold text-primary">82%</p>
              <a
                href="#"
                className="mt-4 inline-block rounded-lg bg-primary-light px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
