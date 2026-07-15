'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { IMOVEIS, BAIRROS_DISPONIVEIS } from '@/lib/imoveis'
import { PropertyCard } from './PropertyCard'

export function SearchExplorer({ bairroInicial = '' }: { bairroInicial?: string }) {
  const [bairro, setBairro] = useState(bairroInicial)
  const [hospedes, setHospedes] = useState(0)
  const [ordem, setOrdem] = useState<'destaque' | 'preco-asc' | 'preco-desc' | 'nota'>('destaque')

  const lista = useMemo(() => {
    let r = IMOVEIS.filter((i) => (bairro ? i.bairro === bairro : true) && (hospedes ? i.hospedes >= hospedes : true))
    if (ordem === 'preco-asc') r = [...r].sort((a, b) => a.preco - b.preco)
    else if (ordem === 'preco-desc') r = [...r].sort((a, b) => b.preco - a.preco)
    else if (ordem === 'nota') r = [...r].sort((a, b) => b.nota - a.nota)
    else r = [...r].sort((a, b) => Number(!!b.destaque) - Number(!!a.destaque))
    return r
  }, [bairro, hospedes, ordem])

  return (
    <div>
      {/* barra de busca */}
      <div className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-100 md:p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
          <label className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-gray-500">Bairro</span>
            <select
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
            >
              <option value="">Todos os bairros</option>
              {BAIRROS_DISPONIVEIS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-gray-500">Hóspedes</span>
            <select
              value={hospedes}
              onChange={(e) => setHospedes(Number(e.target.value))}
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
            >
              <option value={0}>Qualquer</option>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n}+ hóspedes
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-gray-500">
              <SlidersHorizontal size={12} className="mr-1 inline" />
              Ordenar
            </span>
            <select
              value={ordem}
              onChange={(e) => setOrdem(e.target.value as typeof ordem)}
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
            >
              <option value="destaque">Em destaque</option>
              <option value="preco-asc">Menor preço</option>
              <option value="preco-desc">Maior preço</option>
              <option value="nota">Melhor avaliados</option>
            </select>
          </label>
          <button className="flex items-center justify-center gap-2 self-end rounded-lg bg-primary px-6 py-2.5 font-semibold text-white transition hover:bg-primary-dark">
            <Search size={16} /> Buscar
          </button>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        {lista.length} {lista.length === 1 ? 'imóvel disponível' : 'imóveis disponíveis'}
        {bairro ? ` em ${bairro}` : ''}
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((imovel, idx) => (
          <PropertyCard key={imovel.slug} imovel={imovel} priority={idx < 3} />
        ))}
      </div>

      {lista.length === 0 && (
        <div className="mt-10 rounded-2xl bg-gray-50 p-10 text-center text-gray-500">
          Nenhum imóvel encontrado com esses filtros. Tente ampliar a busca.
        </div>
      )}
    </div>
  )
}
