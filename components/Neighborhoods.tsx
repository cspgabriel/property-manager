import { MapPin } from 'lucide-react'
import { Reveal } from './ui/Reveal'

const BAIRROS = [
  'Copacabana', 'Ipanema', 'Leblon', 'Barra da Tijuca',
  'Botafogo', 'Flamengo', 'Lapa', 'Centro',
  'Recreio', 'São Conrado', 'Jardim Botânico', 'Urca',
]

export function Neighborhoods() {
  return (
    <section className="bg-gradient-to-b from-white to-primary-light py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Atuamos no seu bairro
          </h2>
          <p className="mt-3 text-center text-gray-600">Gestão especializada em toda a cidade do Rio de Janeiro.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {BAIRROS.map((b, i) => (
            <Reveal key={b} delay={i * 40} from="scale">
              <a
                href="#hero-estimator"
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-medium text-gray-700 ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:text-primary hover:shadow-md hover:ring-primary"
              >
                <MapPin size={16} className="text-primary" />
                {b}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
