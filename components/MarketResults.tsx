import { CountUp } from './ui/CountUp'
import { Reveal } from './ui/Reveal'

export function MarketResults() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Resultados no mercado carioca</h2>
          <p className="mt-3 text-white/80">
            Imóveis sob gestão PropertyManager vs. média do mercado (AirDNA: ~51% de ocupação).
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="rounded-2xl bg-white/10 p-8 text-center ring-1 ring-white/15 backdrop-blur">
              <div className="text-5xl font-extrabold">
                +<CountUp to={30} suffix="%" />
              </div>
              <div className="mt-2 text-sm font-medium text-white/80">Aumento médio na receita</div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl bg-white/10 p-8 text-center ring-1 ring-white/15 backdrop-blur">
              <div className="text-5xl font-extrabold">
                <CountUp to={4.9} decimals={1} />/5
              </div>
              <div className="mt-2 text-sm font-medium text-white/80">Nota média dos hóspedes</div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="rounded-2xl bg-white/10 p-8 text-center ring-1 ring-white/15 backdrop-blur">
              <div className="text-5xl font-extrabold">
                <CountUp to={85} suffix="%" />
              </div>
              <div className="mt-2 text-sm font-medium text-white/80">Pico de ocupação PropertyManager</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
