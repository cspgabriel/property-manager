import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BookingEngineDemo } from '@/components/motor/BookingEngineDemo'
import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import {
  CalendarCheck,
  Gauge,
  DollarSign,
  ShieldAlert,
  BarChart3,
  Plug,
  MessageSquare,
  Bell,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Motor de Reservas — PropertyManager',
  description:
    'Motor de reservas próprio da PropertyManager: calendário unificado multi-plataforma, sincronização automática com Airbnb, Booking e VRBO, precificação dinâmica e proteção contra overbooking.',
}

const FEATURES = [
  { icon: CalendarCheck, title: 'Calendário unificado', body: 'Airbnb, Booking e VRBO num só lugar. Bloqueou uma data? Atualiza em todos os canais na hora.' },
  { icon: ShieldAlert, title: 'Zero overbooking', body: 'Sincronização em tempo real entre plataformas elimina o risco de reserva dupla.' },
  { icon: DollarSign, title: 'Precificação dinâmica', body: 'Preço ajustado automaticamente por demanda, eventos locais, clima e sazonalidade.' },
  { icon: Gauge, title: 'Ocupação otimizada', body: 'Algoritmo distribui disponibilidade entre canais para maximizar a taxa de ocupação.' },
  { icon: MessageSquare, title: 'Mensagens automáticas', body: 'Respostas e instruções de check-in enviadas automaticamente aos hóspedes.' },
  { icon: BarChart3, title: 'Relatórios em tempo real', body: 'Receita, ocupação e performance consolidados — prontos para o Carnê-Leão.' },
  { icon: Plug, title: 'Integrações abertas', body: 'API e webhooks para conectar fechaduras eletrônicas, limpeza e contabilidade.' },
  { icon: Bell, title: 'Alertas inteligentes', body: 'Avisos de nova reserva, cancelamento e oportunidades de aumento de preço.' },
]

export default function MotorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#003a75] py-16 text-white md:py-24">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/20">
                ⚙️ Motor de Reservas próprio
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Um calendário. Todas as plataformas. Zero overbooking.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
                Nosso motor sincroniza Airbnb, Booking e VRBO em tempo real, ajusta o preço automaticamente e
                mantém seu imóvel sempre com a melhor ocupação possível.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="#demo" className="rounded-lg bg-white px-8 py-4 font-bold text-primary transition hover:bg-gray-100">
                  Ver o motor funcionando
                </a>
                <a href="/#hero-estimator" className="rounded-lg border-2 border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                  Simular minha renda
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Demo interativa */}
        <section id="demo" className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Veja o motor em ação
              </h2>
              <p className="mt-3 text-gray-600">
                Clique em <strong>Sincronizar</strong> e acompanhe o calendário consolidando todos os canais.
              </p>
            </Reveal>
            <Reveal from="scale">
              <BookingEngineDemo />
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white md:py-20">
          <div className="mx-auto grid max-w-container gap-6 px-4 sm:grid-cols-3 md:px-6">
            {[
              { to: 3, suffix: '', label: 'plataformas sincronizadas' },
              { to: 18, suffix: '%', prefix: '+', label: 'receita com preço dinâmico' },
              { to: 0, suffix: '', label: 'casos de overbooking' },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="rounded-2xl bg-white/10 p-8 text-center ring-1 ring-white/15 backdrop-blur">
                  <div className="text-5xl font-extrabold">
                    {s.prefix}
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-white/80">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Features grid */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Tudo que o motor faz por você
              </h2>
              <p className="mt-3 text-gray-600">Tecnologia própria construída para maximizar a receita do seu imóvel.</p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={(i % 4) * 90}>
                  <div className="h-full rounded-2xl border border-gray-100 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <f.icon size={20} />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-light py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Quer o motor rodando no seu imóvel?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                A gestão completa da PropertyManager já inclui o motor de reservas — sem custo adicional.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="/#hero-estimator" className="rounded-lg bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary-dark">
                  Simular minha renda
                </a>
                <a href="/servicos" className="rounded-lg border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white">
                  Ver todos os serviços
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
