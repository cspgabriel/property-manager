import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, Star, Users, BedDouble, Bath, MapPin, Check } from 'lucide-react'
import { GuestHeader } from '@/components/estadias/GuestHeader'
import { Footer } from '@/components/Footer'
import { BookingWidget } from '@/components/estadias/BookingWidget'
import Image from 'next/image'
import { IMOVEIS, getImovel } from '@/lib/imoveis'

export function generateStaticParams() {
  return IMOVEIS.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const i = getImovel(params.slug)
  if (!i) return { title: 'Estadia — PropertyStays' }
  return { title: `${i.nome} — PropertyStays`, description: i.descricao.slice(0, 155) }
}

export default function ImovelDetalhe({ params }: { params: { slug: string } }) {
  const imovel = getImovel(params.slug)
  if (!imovel) notFound()

  return (
    <>
      <GuestHeader />
      <main className="bg-white">
        <div className="mx-auto max-w-container px-4 py-6 md:px-6">
          <a href="/estadias" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary">
            <ArrowLeft size={16} /> Voltar para as estadias
          </a>
        </div>

        {/* galeria */}
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2">
            <div className="relative h-64 overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 md:h-full">
              <Image
                src={imovel.foto}
                alt={imovel.nome}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {[0, 1, 2, 3].map((n) => (
              <div key={n} className="relative hidden h-full min-h-[120px] overflow-hidden rounded-2xl md:block">
                <Image
                  src={imovel.foto}
                  alt={imovel.nome}
                  fill
                  sizes="25vw"
                  className="object-cover"
                  style={{ objectPosition: `${25 + n * 15}% ${30 + n * 12}%`, transform: 'scale(1.15)' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* conteúdo + widget */}
        <div className="mx-auto max-w-container px-4 py-10 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            <div>
              <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                {imovel.tipo}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{imovel.nome}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
                <span className="flex items-center gap-1.5 font-semibold text-ink">
                  <Star size={15} className="fill-amber text-amber" />
                  {imovel.nota.toFixed(2).replace('.', ',')} · {imovel.avaliacoes} avaliações
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} /> {imovel.bairro}, {imovel.cidade}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 border-y border-gray-100 py-5 text-sm">
                <span className="flex items-center gap-2 text-gray-700">
                  <Users size={18} className="text-primary" /> {imovel.hospedes} hóspedes
                </span>
                <span className="flex items-center gap-2 text-gray-700">
                  <BedDouble size={18} className="text-primary" /> {imovel.quartos} quarto{imovel.quartos > 1 ? 's' : ''}
                </span>
                <span className="flex items-center gap-2 text-gray-700">
                  <Bath size={18} className="text-primary" /> {imovel.banheiros} banheiro{imovel.banheiros > 1 ? 's' : ''}
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-gray-700">{imovel.descricao}</p>

              <h2 className="mt-8 text-xl font-bold text-ink">O que este lugar oferece</h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {imovel.comodidades.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-gray-700">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-primary">
                      <Check size={15} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              {/* mapa placeholder */}
              <h2 className="mt-8 text-xl font-bold text-ink">Localização</h2>
              <div className="mt-4 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-gray-100 text-gray-400">
                <div className="text-center">
                  <MapPin className="mx-auto" size={40} />
                  <p className="mt-2 text-sm font-medium">
                    {imovel.bairro}, {imovel.cidade}
                  </p>
                </div>
              </div>
            </div>

            {/* widget sticky */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <BookingWidget
                preco={imovel.preco}
                nota={imovel.nota}
                avaliacoes={imovel.avaliacoes}
                maxHospedes={imovel.hospedes}
                nome={imovel.nome}
              />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
