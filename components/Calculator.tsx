'use client'

import { useState } from 'react'
import { Minus, Plus, MapPin, Zap, FileText, TrendingUp, BarChart3, CalendarDays } from 'lucide-react'
import { ComparisonResult } from './ui/ComparisonResult'

function brl(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

// --- modo rápido: bairro x quartos ---
const BAIRROS: Record<string, number> = { Copacabana: 380, Ipanema: 620, Leblon: 1150, Outro: 300 }
const QUARTO_MULT: Record<string, number> = { '1': 1, '2': 1.7, '3': 2.4, '4+': 3.1 }
const OCUPACAO = 0.92
const OCUPACAO_PROPRIA = 0.55

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

export function Calculator() {
  const [modo, setModo] = useState<'rapido' | 'detalhado'>('rapido')

  // rápido
  const [bairro, setBairro] = useState('Copacabana')
  const [quartos, setQuartos] = useState('2')
  const diaria = BAIRROS[bairro] * QUARTO_MULT[quartos]
  const comPM = Math.round((diaria * 30 * OCUPACAO) / 10) * 10
  const proprio = Math.round((diaria * 0.8 * 30 * OCUPACAO_PROPRIA) / 10) * 10

  // detalhado
  const [dQuartos, setDQuartos] = useState(2)
  const [hospedes, setHospedes] = useState(4)
  const [calculado, setCalculado] = useState(false)
  const [dBairro, setDBairro] = useState('')
  const dDiaria = 480 + dQuartos * 220 + hospedes * 40
  const receitaAnual = Math.round((dDiaria * 365 * 0.82) / 1000) * 1000
  const receitaMensal = Math.round(receitaAnual / 12 / 100) * 100

  return (
    <section id="calculadora" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Quanto seu imóvel pode render?
          </h2>
          <p className="mt-3 text-gray-600">Resposta na hora, sem cadastro.</p>
        </div>

        {/* Toggle de modo */}
        <div className="mx-auto mt-8 flex max-w-md rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-gray-100">
          <button
            onClick={() => setModo('rapido')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
              modo === 'rapido' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'
            }`}
          >
            <Zap size={16} /> Simulação rápida
          </button>
          <button
            onClick={() => setModo('detalhado')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
              modo === 'detalhado' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'
            }`}
          >
            <FileText size={16} /> Análise por endereço
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 md:p-8">
          {modo === 'rapido' ? (
            <>
              <label className="text-sm font-semibold text-gray-700">Bairro</label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {Object.keys(BAIRROS).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBairro(b)}
                    className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                      bairro === b
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>

              <label className="mt-6 block text-sm font-semibold text-gray-700">Quartos</label>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {Object.keys(QUARTO_MULT).map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuartos(q)}
                    className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                      quartos === q
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <ComparisonResult proprio={proprio} comPM={comPM} />
              </div>

              <p className="mt-4 rounded-lg bg-success/10 px-4 py-3 text-center text-sm font-semibold text-success">
                Você deixaria de ganhar {brl(comPM - proprio)}/mês
              </p>
              <p className="mt-3 text-center text-xs text-gray-400">
                Base: dados reais de anúncios no bairro. Ocupação de 92%.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#calculadora"
                  onClick={() => setModo('detalhado')}
                  className="rounded-lg bg-primary px-6 py-3.5 text-center font-semibold text-white transition hover:bg-primary-dark"
                >
                  Receber análise do meu imóvel de {quartos} quarto{quartos !== '1' ? 's' : ''}
                </a>
                <button
                  onClick={() => setModo('detalhado')}
                  className="text-center text-sm font-medium text-primary hover:underline"
                >
                  Calcular com o endereço completo →
                </button>
              </div>
            </>
          ) : (
            <>
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
                  value={dBairro}
                  onChange={(e) => setDBairro(e.target.value)}
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
                <Stepper label="Quartos" value={dQuartos} set={setDQuartos} />
                <Stepper label="Acomoda" value={hospedes} set={setHospedes} />
              </div>

              <button
                onClick={() => setCalculado(true)}
                className="mt-8 w-full rounded-lg bg-primary px-6 py-3.5 font-semibold text-white transition hover:bg-primary-dark"
              >
                Calcular receita
              </button>

              {calculado && (
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-primary p-5 text-white">
                    <TrendingUp size={24} />
                    <p className="mt-3 text-xs opacity-90">Receita anual estimada</p>
                    <p className="mt-1 text-2xl font-extrabold">{brl(receitaAnual)}</p>
                    <p className="text-xs opacity-90">≈ {brl(receitaMensal)}/mês</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-5">
                    <BarChart3 className="text-primary" size={24} />
                    <dl className="mt-3 space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Diária média</dt>
                        <dd className="font-semibold text-ink">{brl(dDiaria)}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Quartos</dt>
                        <dd className="font-semibold text-ink">{dQuartos >= 6 ? '6+' : dQuartos}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Capacidade</dt>
                        <dd className="font-semibold text-ink">{hospedes >= 6 ? '6+' : hospedes}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-5">
                    <CalendarDays className="text-primary" size={24} />
                    <p className="mt-3 text-xs text-gray-500">Ocupação estimada</p>
                    <p className="mt-1 text-2xl font-extrabold text-primary">82%</p>
                    <a href="#" className="mt-3 inline-block rounded-lg bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-white">
                      Falar com especialista
                    </a>
                  </div>
                </div>
              )}

              {!calculado && (
                <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-gray-400">
                  <MapPin size={12} /> Informe os dados e clique em calcular para ver a estimativa.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
