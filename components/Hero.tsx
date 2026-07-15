import { Star, Camera, TrendingUp, Sparkles, Send } from 'lucide-react'

const FEATURES = [
  { icon: Camera, label: 'Anúncio e fotos profissionais' },
  { icon: TrendingUp, label: 'Precificação dinâmica' },
  { icon: Sparkles, label: 'Hóspedes e limpeza' },
  { icon: Send, label: 'Repasse via Pix' },
]

const TRUST = ['Taxa única de 16%', 'Sem fidelidade', 'Resposta em até 5 min', '100% gratuito']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-white">
      <div className="mx-auto grid max-w-container items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        {/* Left: copy */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-gray-100">
            <div className="flex text-amber">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-ink">4,96 de 5 — Nº 1 do Brasil</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Administradora de Airbnb no Rio de Janeiro
          </h1>

          <p className="mt-5 text-lg text-gray-600 md:text-xl">
            Seu imóvel rendendo até <span className="font-bold text-primary">30% mais</span>, sem você
            levantar um dedo.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-gray-800">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <f.icon size={18} />
                </span>
                <span className="text-sm font-medium">{f.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {TRUST.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-gray-600">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#hero-estimator"
              className="rounded-lg bg-primary px-8 py-4 text-center font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
            >
              Falar com um especialista
            </a>
            <a href="#hero-estimator" className="text-center text-sm font-medium text-primary hover:underline">
              ou simule sua renda em 10 segundos →
            </a>
          </div>
        </div>

        {/* Right: proof stats card */}
        <div className="relative">
          <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">Nossos números</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-extrabold text-primary">92%</div>
                <div className="mt-1 text-xs text-gray-500">ocupação média</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">13+</div>
                <div className="mt-1 text-xs text-gray-500">cidades atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">R$ 0</div>
                <div className="mt-1 text-xs text-gray-500">taxa de adesão</div>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-primary-light p-6">
              <p className="text-sm text-gray-700">
                &ldquo;Meu apartamento foi de <strong>R$ 5.200</strong> para{' '}
                <strong className="text-primary">R$ 8.500/mês</strong> em três meses.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-gray-600">— Marcelo Santos, Copacabana, RJ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
