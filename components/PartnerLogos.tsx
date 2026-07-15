export function PartnerLogos() {
  const partners = ['Airbnb', 'Booking.com', 'Cadastur', 'VRBO']
  return (
    <section className="border-y border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wide text-gray-400">
          Parceiro oficial &amp; credenciado
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {partners.map((p) => (
            <span
              key={p}
              className="text-xl font-bold text-gray-300 transition hover:text-gray-500 md:text-2xl"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
