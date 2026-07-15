'use client'

import { useState } from 'react'
import { ComparisonResult } from './ui/ComparisonResult'

const BAIRROS: Record<string, number> = {
  Copacabana: 380,
  Ipanema: 620,
  Leblon: 1150,
  Outro: 300,
}
const OCUPACAO = 0.92
const OCUPACAO_PROPRIA = 0.55
const QUARTO_MULT: Record<string, number> = { '1': 1, '2': 1.7, '3': 2.4, '4+': 3.1 }

function brl(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

export function HeroEstimator() {
  const [bairro, setBairro] = useState('Copacabana')
  const [quartos, setQuartos] = useState('2')

  const diaria = BAIRROS[bairro] * QUARTO_MULT[quartos]
  const comPM = Math.round((diaria * 30 * OCUPACAO) / 10) * 10
  const proprio = Math.round((diaria * 0.8 * 30 * OCUPACAO_PROPRIA) / 10) * 10
  const diff = comPM - proprio

  return (
    <section id="hero-estimator" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Quanto seu imóvel pode render?
          </h2>
          <p className="mt-3 text-gray-600">Resposta na hora, sem cadastro.</p>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 md:p-8">
          {/* Bairro */}
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

          {/* Quartos */}
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

          {/* Output: 2 colunas desktop / slider mobile */}
          <div className="mt-8">
            <ComparisonResult proprio={proprio} comPM={comPM} />
          </div>

          <p className="mt-4 rounded-lg bg-success/10 px-4 py-3 text-center text-sm font-semibold text-success">
            Você deixaria de ganhar {brl(diff)}/mês
          </p>

          <p className="mt-3 text-center text-xs text-gray-400">
            Base: dados reais de anúncios no bairro. Ocupação de 92%.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#rental-data-display"
              className="rounded-lg bg-primary px-6 py-3.5 text-center font-semibold text-white transition hover:bg-primary-dark"
            >
              Receber análise do meu imóvel de {quartos} quarto{quartos !== '1' ? 's' : ''}
            </a>
            <a
              href="#rental-data-display"
              className="text-center text-sm font-medium text-primary hover:underline"
            >
              Calcular com o endereço completo →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
