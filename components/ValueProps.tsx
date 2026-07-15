import { MapPin, TrendingUp, ShieldCheck } from 'lucide-react'
import { Reveal } from './ui/Reveal'

const CARDS = [
  {
    icon: MapPin,
    title: 'Expertise local no Rio',
    body: 'Somos especialistas no mercado carioca. Conhecemos cada detalhe de Copacabana, Ipanema, Leblon e Barra — e usamos isso a favor do seu imóvel.',
  },
  {
    icon: TrendingUp,
    title: 'Aumento de 30% na receita',
    body: 'Nossa precificação dinâmica considera eventos locais, ocupação hoteleira, clima e feriados. Resultado: ocupação média de 85%.',
  },
  {
    icon: ShieldCheck,
    title: 'Gestão 100% profissional',
    body: 'Use seu imóvel quando quiser — nós cuidamos do resto. Check-in/out, limpeza, manutenção e atendimento 24/7.',
  },
]

export function ValueProps() {
  return (
    <section className="bg-primary-light py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Por que contratar uma administradora de Airbnb no Rio?
          </h2>
          <p className="mt-3 text-gray-600">Resultados comprovados na cidade do Rio de Janeiro.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="h-full rounded-2xl bg-white p-8 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <c.icon size={24} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-3 text-gray-600">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
