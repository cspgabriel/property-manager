import { Camera, Sparkles, Shield, KeyRound } from 'lucide-react'
import { Reveal } from './ui/Reveal'

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
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Gestão completa de aluguel por temporada no Rio
          </h2>
          <p className="mt-3 text-gray-600">
            Conte com a expertise da PropertyManager para maximizar seus ganhos sem dor de cabeça.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 120} from={i % 2 ? 'right' : 'left'}>
              <div className="flex h-full gap-5 rounded-2xl bg-white p-7 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <s.icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-gray-600">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/servicos" className="rounded-lg bg-primary px-7 py-3.5 text-center font-semibold text-white transition hover:bg-primary-dark">
            Ver todos os serviços em detalhe
          </a>
          <a href="/calculadora" className="rounded-lg border-2 border-primary px-7 py-3.5 text-center font-semibold text-primary transition hover:bg-primary hover:text-white">
            Calcular a renda do meu imóvel →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
