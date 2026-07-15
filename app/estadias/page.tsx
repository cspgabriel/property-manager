import type { Metadata } from 'next'
import { GuestHeader } from '@/components/estadias/GuestHeader'
import { Footer } from '@/components/Footer'
import { SearchExplorer } from '@/components/estadias/SearchExplorer'

export const metadata: Metadata = {
  title: 'PropertyStays — Estadias no Rio de Janeiro',
  description:
    'Reserve apartamentos, coberturas e studios selecionados no Rio de Janeiro. Imóveis verificados e gerenciados pela PropertyManager em Copacabana, Ipanema, Leblon e mais.',
}

export default function EstadiasPage({
  searchParams,
}: {
  searchParams: { bairro?: string }
}) {
  return (
    <>
      <GuestHeader />
      <main>
        <section className="bg-gradient-to-br from-primary via-primary-dark to-[#003a75] py-14 text-white md:py-20">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Sua próxima estadia no Rio começa aqui
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              Imóveis verificados e gerenciados pela PropertyManager. Reserva rápida, check-in fácil e suporte
              24/7.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-10 md:py-14">
          <div className="mx-auto max-w-container px-4 md:px-6">
            {/* -mt puxa a barra de busca sobre o hero */}
            <div className="-mt-16 md:-mt-20">
              <SearchExplorer bairroInicial={searchParams.bairro ?? ''} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
