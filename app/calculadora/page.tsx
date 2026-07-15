import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Calculator } from '@/components/Calculator'
import { Reveal } from '@/components/ui/Reveal'
import { Zap, FileText, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calculadora de renda de Airbnb — PropertyManager',
  description:
    'Descubra quanto seu imóvel pode render no Airbnb. Simulação rápida por bairro ou análise completa por endereço. Gratuita e sem compromisso.',
}

const PASSOS = [
  { icon: Zap, title: 'Simulação instantânea', body: 'Escolha bairro e número de quartos e veja a estimativa na hora, sem cadastro.' },
  { icon: FileText, title: 'Análise por endereço', body: 'Informe o endereço e receba uma previsão detalhada de receita e ocupação.' },
  { icon: ShieldCheck, title: 'Sem compromisso', body: 'A calculadora é 100% gratuita. Você decide se quer falar com um especialista depois.' },
]

export default function CalculadoraPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary via-primary-dark to-[#003a75] py-16 text-white md:py-20">
          <div className="mx-auto max-w-container px-4 text-center md:px-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/20">
                🧮 Calculadora gratuita
              </span>
              <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
                Quanto seu imóvel pode render no Airbnb?
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Faça uma simulação rápida por bairro ou uma análise completa pelo endereço. Descubra em segundos
                o potencial de receita da sua propriedade.
              </p>
            </Reveal>
          </div>
        </section>

        <Calculator />

        {/* Como funciona */}
        <section className="bg-primary-light py-16 md:py-24">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">Como funciona</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PASSOS.map((p, i) => (
                <Reveal key={p.title} delay={i * 120}>
                  <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-gray-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <p.icon size={20} />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{p.body}</p>
                  </div>
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
