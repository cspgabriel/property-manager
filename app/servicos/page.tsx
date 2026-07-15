import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/ui/Reveal'
import { SERVICOS } from '@/lib/servicos'

export const metadata: Metadata = {
  title: 'Serviços — PropertyManager',
  description:
    'Gestão completa de aluguel por temporada: anúncios profissionais, precificação dinâmica, limpeza, atendimento aos hóspedes, segurança e relatórios financeiros.',
}

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary via-primary-dark to-[#003a75] py-16 text-white md:py-24">
          <div className="mx-auto max-w-container px-4 text-center md:px-6">
            <Reveal>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Nossos serviços</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Gestão 100% profissional do seu imóvel. Você usa quando quiser — nós cuidamos de todo o resto.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICOS.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 100}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition group-hover:bg-primary group-hover:text-white">
                      <s.icon size={24} />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 flex-1 text-gray-600">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Saiba mais <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-light py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Tudo isso por uma taxa única de 16%
              </h2>
              <p className="mt-4 text-lg text-gray-600">Sem fidelidade, sem taxa de adesão. Você só paga quando o imóvel rende.</p>
              <a
                href="/#calculadora"
                className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary-dark"
              >
                Simular minha renda
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
