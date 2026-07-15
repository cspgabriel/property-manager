import { Check } from 'lucide-react'

const BULLETS = ['Receita mais previsível', 'Suporte local 24/7', 'Gestão completa para o proprietário']

export function MidCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-14 text-center text-white md:px-16">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">
            Os resultados já aparecem nos depoimentos. O próximo imóvel pode ser o seu.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Se você quer transformar sazonalidade em performance consistente, fale com a PropertyManager.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {BULLETS.map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm font-medium">
                <Check size={18} className="text-white" /> {b}
              </span>
            ))}
          </div>
          <a
            href="#hero-estimator"
            className="mt-9 inline-block rounded-lg bg-white px-8 py-4 font-bold text-primary transition hover:bg-gray-100"
          >
            Quero aumentar minha receita
          </a>
        </div>
      </div>
    </section>
  )
}
