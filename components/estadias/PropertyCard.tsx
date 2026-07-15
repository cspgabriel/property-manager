import Image from 'next/image'
import { Star, Users, BedDouble } from 'lucide-react'
import { type Imovel } from '@/lib/imoveis'

function brl(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

export function PropertyCard({ imovel, priority = false }: { imovel: Imovel; priority?: boolean }) {
  return (
    <a
      href={`/estadias/${imovel.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imovel.foto}
          alt={imovel.nome}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
          {imovel.tipo}
        </span>
        {imovel.destaque && (
          <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            Destaque
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold leading-tight text-ink group-hover:text-primary">{imovel.nome}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ink">
            <Star size={14} className="fill-amber text-amber" />
            {imovel.nota.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          {imovel.bairro}, {imovel.cidade}
        </p>
        <div className="mt-3 flex gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <BedDouble size={14} /> {imovel.quartos} quarto{imovel.quartos > 1 ? 's' : ''}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} /> {imovel.hospedes} hóspedes
          </span>
        </div>
        <div className="mt-4 flex items-baseline gap-1 border-t border-gray-100 pt-4">
          <span className="text-lg font-extrabold text-ink">{brl(imovel.preco)}</span>
          <span className="text-sm text-gray-500">/noite</span>
        </div>
      </div>
    </a>
  )
}
