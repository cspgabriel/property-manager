import { Reveal } from './ui/Reveal'

const SCEN = [
  {
    tag: '2 quartos · Leblon',
    diaria: 'R$ 1.150',
    ocupacao: '80%',
    bruta: '≈ R$ 336.000',
    liquido: '≈ R$ 228.500 – 248.500',
    highlight: true,
  },
  {
    tag: '1 quarto · Ipanema',
    diaria: 'R$ 620',
    ocupacao: '80%',
    bruta: '≈ R$ 181.000',
    liquido: '≈ R$ 123.000 – 134.000',
  },
  {
    tag: 'Estúdio · Copacabana',
    diaria: 'R$ 380',
    ocupacao: '78%',
    bruta: '≈ R$ 108.000',
    liquido: '≈ R$ 73.500 – 80.000',
  },
]

export function Scenarios() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">Cenários típicos no Rio</h2>
          <p className="mt-3 text-gray-600">Exemplos ilustrativos baseados em faixas observadas no mercado.</p>
        </Reveal>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {SCEN.map((s, i) => (
            <Reveal key={s.tag} delay={i * 120} className="h-full">
              <div
                className={`h-full rounded-2xl p-7 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  s.highlight ? 'bg-primary text-white ring-primary' : 'bg-white text-ink ring-gray-100'
                }`}
              >
              <p className={`text-sm font-semibold ${s.highlight ? 'text-white/80' : 'text-primary'}`}>{s.tag}</p>
              <dl className="mt-5 space-y-3">
                {[
                  ['Diária média', s.diaria],
                  ['Ocupação', s.ocupacao],
                  ['Receita bruta/ano', s.bruta],
                  ['Líquido (16% + custos)', s.liquido],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4">
                    <dt className={`text-sm ${s.highlight ? 'text-white/70' : 'text-gray-500'}`}>{k}</dt>
                    <dd className="text-right text-sm font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
