'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

type Depoimento = {
  nome: string
  local: string
  avatar: string
  texto: string
  antes: string
  depois: string
}

const ITEMS: Depoimento[] = [
  {
    nome: 'Marcelo Santos',
    local: 'Copacabana, RJ',
    avatar: '/avatars/a1.png',
    texto: 'Meu apartamento em Copacabana foi de R$ 5.200 para R$ 8.500/mês. Não preciso me preocupar com nada — eles cuidam de tudo, do anúncio ao repasse.',
    antes: 'R$ 5.200',
    depois: 'R$ 8.500/mês',
  },
  {
    nome: 'Fernanda Lima',
    local: 'Ipanema, RJ',
    avatar: '/avatars/a2.png',
    texto: 'A precificação inteligente fez toda diferença no Carnaval e no Réveillon. Faturei em duas semanas o que rendia num mês inteiro antes.',
    antes: '40% ocupação',
    depois: '82% ocupação',
  },
  {
    nome: 'Ricardo Almeida',
    local: 'Leblon, RJ',
    avatar: '/avatars/a3.png',
    texto: 'Transparência total nos relatórios e repasse via Pix pontual. Profissionalizaram meu imóvel de um jeito que eu jamais conseguiria sozinho.',
    antes: 'R$ 9.100',
    depois: 'R$ 13.400/mês',
  },
  {
    nome: 'Beatriz Carvalho',
    local: 'Barra da Tijuca, RJ',
    avatar: '/avatars/a4.png',
    texto: 'Tinha medo de alugar por temporada e dar trabalho. Com a PropertyManager virou renda passiva de verdade — não lembro a última vez que precisei intervir.',
    antes: 'R$ 3.800',
    depois: 'R$ 6.200/mês',
  },
  {
    nome: 'Thiago Moraes',
    local: 'Botafogo, RJ',
    avatar: '/avatars/a5.png',
    texto: 'As fotos profissionais e o anúncio otimizado dobraram minhas reservas no primeiro mês. Atendimento aos hóspedes impecável, avaliações nota 5.',
    antes: '3,2 reservas/mês',
    depois: '7 reservas/mês',
  },
  {
    nome: 'Cláudia Ribeiro',
    local: 'Flamengo, RJ',
    avatar: '/avatars/a6.png',
    texto: 'Uso meu apartamento quando quero e ele rende o resto do tempo. O painel é claro e o suporte responde na hora. Recomendo de olhos fechados.',
    antes: 'R$ 2.900',
    depois: 'R$ 4.700/mês',
  },
  {
    nome: 'André Nogueira',
    local: 'Copacabana, RJ',
    avatar: '/avatars/a7.png',
    texto: 'Já tinha tentado gerenciar sozinho e com outra empresa. A diferença de resultado e de profissionalismo aqui é gritante. Melhor decisão que tomei.',
    antes: 'R$ 6.400',
    depois: 'R$ 9.800/mês',
  },
  {
    nome: 'Sônia Martins',
    local: 'Leblon, RJ',
    avatar: '/avatars/a8.png',
    texto: 'Herdei o imóvel e não sabia o que fazer. Eles cuidaram de tudo, da mobília ao primeiro hóspede. Hoje é minha principal fonte de renda.',
    antes: 'imóvel parado',
    depois: 'R$ 11.200/mês',
  },
]

export function Testimonials() {
  const [i, setI] = useState(0)
  const [pausado, setPausado] = useState(false)

  const next = useCallback(() => setI((v) => (v + 1) % ITEMS.length), [])
  const prev = () => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length)

  useEffect(() => {
    if (pausado) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next, pausado])

  const t = ITEMS[i]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5">
            <div className="flex text-amber">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-primary">4,96/5 · +500 proprietários</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Proprietários que confiam na PropertyManager
          </h2>
          <p className="mt-3 text-gray-600">Resultados reais de quem entregou a gestão para a gente.</p>
        </div>

        <div
          className="mx-auto mt-10 max-w-3xl"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100 md:p-12">
            <Quote className="text-primary/25" size={40} />
            <p className="mt-4 text-xl font-medium leading-relaxed text-gray-800">{t.texto}</p>

            <div className="mt-6 flex items-center gap-2 text-amber">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={18} fill="currentColor" />
              ))}
            </div>

            <div className="mt-6 flex flex-col justify-between gap-5 border-t border-gray-100 pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary-light">
                  <Image src={t.avatar} alt={t.nome} fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-ink">{t.nome}</p>
                  <p className="text-sm text-gray-500">{t.local}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-success/10 px-4 py-2.5">
                <span className="text-sm text-gray-500 line-through">{t.antes}</span>
                <span className="text-success">→</span>
                <span className="font-bold text-success">{t.depois}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
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
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
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
