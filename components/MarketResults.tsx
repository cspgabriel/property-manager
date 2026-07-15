const STATS = [
  { n: '+30%', l: 'Aumento médio na receita' },
  { n: '4,9/5', l: 'Nota média dos hóspedes' },
  { n: '75-85%', l: 'Ocupação PropertyManager' },
]

export function MarketResults() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Resultados no mercado carioca
          </h2>
          <p className="mt-3 text-gray-600">
            Imóveis sob gestão PropertyManager vs. média do mercado (AirDNA: ~51% de ocupação).
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.l} className="rounded-2xl bg-primary-light p-8 text-center">
              <div className="text-5xl font-extrabold text-primary">{s.n}</div>
              <div className="mt-2 text-sm font-medium text-gray-600">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
