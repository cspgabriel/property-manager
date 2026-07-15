import { Camera, Sparkles, Shield, KeyRound } from 'lucide-react'

const SERVICES = [
  { icon: Camera, title: 'Anúncios otimizados', body: 'Fotos profissionais, descrições atraentes e posicionamento estratégico nas plataformas.' },
  { icon: Sparkles, title: 'Limpeza profissional', body: 'Equipe especializada garantindo excelência entre cada estadia.' },
  { icon: Shield, title: 'Segurança total', body: 'Sistema completo: depósito caução, seguro e verificação de hóspedes.' },
  { icon: KeyRound, title: 'Controle de acesso', body: 'Gestão profissional de chaves e fechaduras eletrônicas.' },
]

export function Services() {
  return (
    <section id="servicos" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Gestão completa de aluguel por temporada no Rio
          </h2>
          <p className="mt-3 text-gray-600">
            Conte com a expertise da PropertyManager para maximizar seus ganhos sem dor de cabeça.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex gap-5 rounded-2xl bg-white p-7 ring-1 ring-gray-100 transition hover:shadow-lg">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <s.icon size={22} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-gray-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
