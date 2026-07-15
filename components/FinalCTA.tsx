const WHATSAPP =
  'https://wa.me/5521999999999?text=Ol%C3%A1!%20Quero%20aumentar%20a%20receita%20do%20meu%20im%C3%B3vel%20com%20a%20PropertyManager.'

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Pronto para aumentar a receita do seu imóvel?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
          Comece hoje. Sem taxa de adesão, sem fidelidade e sem compromisso. Simule sua renda em 10 segundos.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#hero-estimator"
            className="rounded-lg bg-white px-8 py-4 font-bold text-primary transition hover:bg-gray-100"
          >
            Simular minha renda
          </a>
          <a
            href={WHATSAPP}
            className="rounded-lg border-2 border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Falar com especialista
          </a>
        </div>
        <p className="mt-6 text-sm text-white/70">Taxa única de 16% · Repasse via Pix · Resposta em até 5 min</p>
      </div>
    </section>
  )
}
