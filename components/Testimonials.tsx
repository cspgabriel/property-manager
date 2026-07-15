'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const ITEMS = [
  {
    quote: 'Meu apartamento em Copacabana foi de R$ 5.200 para R$ 8.500/mês. Não preciso me preocupar com nada — eles cuidam de tudo.',
    author: 'Marcelo Santos',
    location: 'Copacabana, RJ',
  },
  {
    quote: 'A precificação inteligente fez toda diferença no Carnaval e no Réveillon. Faturei em duas semanas o que rendia num mês inteiro antes.',
    author: 'Fernanda Lima',
    location: 'Ipanema, RJ',
  },
  {
    quote: 'Transparência total nos relatórios e repasse via Pix pontual. Recomendo para qualquer proprietário que quer profissionalizar o imóvel.',
    author: 'Ricardo Almeida',
    location: 'Leblon, RJ',
  },
]

export function Testimonials() {
  const [i, setI] = useState(0)
  const t = ITEMS[i]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Proprietários que confiam na PropertyManager
        </h2>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100 md:p-12">
          <Quote className="text-primary/30" size={40} />
          <p className="mt-4 text-xl font-medium italic leading-relaxed text-gray-800">{t.quote}</p>
          <div className="mt-6">
            <p className="font-bold text-ink">{t.author}</p>
            <p className="text-sm text-gray-500">{t.location}</p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${idx === i ? 'w-6 bg-primary' : 'w-2 bg-gray-300'}`}
                  aria-label={`Depoimento ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setI((i - 1 + ITEMS.length) % ITEMS.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setI((i + 1) % ITEMS.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                aria-label="Próximo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
