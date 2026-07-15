import { Reveal } from './ui/Reveal'

const CITIES = [
  { city: 'São Paulo', areas: 'Vila Mariana, Pinheiros, Vila Madalena' },
  { city: 'Brasília', areas: 'Lago Sul, Noroeste, Asa Norte' },
  { city: 'Salvador', areas: 'Rio Vermelho, Barra, Ondina' },
  { city: 'Florianópolis', areas: 'Lagoa da Conceição, Campeche, Jurerê' },
]

export function OtherCities() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Expandindo para outras cidades
        </h2>
        <p className="mt-3 text-center text-gray-600">Já atuamos além do Rio. Consulte disponibilidade na sua região.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((c, i) => (
            <Reveal key={c.city} delay={i * 100}>
              <div className="h-full rounded-2xl border border-gray-100 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
                <h3 className="text-lg font-bold text-ink">{c.city}</h3>
                <p className="mt-1.5 text-sm text-gray-500">{c.areas}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
