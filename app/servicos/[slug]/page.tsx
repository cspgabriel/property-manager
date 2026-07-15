import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowLeft } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/ui/Reveal'
import { SERVICOS, getServico } from '@/lib/servicos'

export function generateStaticParams() {
  return SERVICOS.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getServico(params.slug)
  if (!s) return { title: 'Serviço — PropertyManager' }
  return {
    title: `${s.title} — PropertyManager`,
    description: s.short,
  }
}

export default function ServicoDetalhe({ params }: { params: { slug: string } }) {
  const servico = getServico(params.slug)
  if (!servico) notFound()

  const Icon = servico.icon
  const outros = SERVICOS.filter((s) => s.slug !== servico.slug).slice(0, 3)

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary via-primary-dark to-[#003a75] py-16 text-white md:py-24">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <Reveal className="max-w-3xl">
              <Link href="/servicos" className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
                <ArrowLeft size={16} /> Todos os serviços
              </Link>
              <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <Icon size={28} />
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">{servico.title}</h1>
              <p className="mt-4 text-lg text-white/90">{servico.hero}</p>
              <a
                href="/#hero-estimator"
                className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-primary transition hover:bg-gray-100"
              >
                Simular minha renda
              </a>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {servico.bullets.map((b, i) => (
                <Reveal key={b.title} delay={(i % 2) * 120}>
                  <div className="flex h-full gap-4 rounded-2xl bg-gray-50 p-7">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check size={18} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                      <p className="mt-1.5 text-gray-600">{b.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-light py-16 md:py-24">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <Reveal>
              <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Outros serviços
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {outros.map((s, i) => (
                <Reveal key={s.slug} delay={i * 100}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary group-hover:bg-primary group-hover:text-white">
                      <s.icon size={20} />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-600">{s.short}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
