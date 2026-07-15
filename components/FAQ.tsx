'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ITEMS = [
  { q: 'Qual é a taxa de administração?', a: 'Taxa única de 16% sobre a receita líquida. Sem fidelidade, sem taxa de adesão e sem contratos enganosos. Você só paga quando o imóvel rende.' },
  { q: 'Como funciona a sincronização com o Airbnb?', a: 'Conectamos sua conta Airbnb (e outras plataformas como Booking) e sincronizamos calendário, preços e reservas automaticamente, evitando duplicidade de datas.' },
  { q: 'Posso usar meu imóvel quando quiser?', a: 'Claro. Você bloqueia as datas que desejar direto no seu painel e nós respeitamos sua agenda pessoal.' },
  { q: 'Vocês cuidam da limpeza e manutenção?', a: 'Sim. Temos uma rede de profissionais para limpeza entre hóspedes, manutenção preventiva e emergências, tudo coordenado pela nossa equipe.' },
  { q: 'Como recebo os repasses?', a: 'O repasse é feito via Pix, com relatório mensal detalhado de receita, ocupação e despesas — pronto para o Carnê-Leão.' },
  { q: 'Existe algum contrato de permanência mínima?', a: 'Não. Você pode encerrar a qualquer momento, sem multa. Trabalhamos para reter você pelo resultado, não por contrato.' },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-ink">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="pb-5 text-gray-600">{a}</p>}
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Perguntas frequentes
        </h2>
        <div className="mt-10">
          {ITEMS.map((it) => (
            <Item key={it.q} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}
