import { Zap, Megaphone, Headphones, PartyPopper, Wrench, FileBarChart } from 'lucide-react'

const ADV = [
  { icon: Zap, title: 'Precificação inteligente', body: 'Sistema exclusivo que considera eventos, temporada e demanda local em tempo real.' },
  { icon: Megaphone, title: 'Marketing especializado', body: 'Estratégias específicas para Zona Sul e Barra, com foco no público de alto padrão.' },
  { icon: Headphones, title: 'Suporte local 24/7', body: 'Equipe disponível para emergências e atendimento aos hóspedes a qualquer hora.' },
  { icon: PartyPopper, title: 'Gestão de eventos', body: 'Especialistas em Carnaval, Réveillon e Rock in Rio — multiplicadores de 5 a 6x na diária.' },
  { icon: Wrench, title: 'Manutenção preventiva', body: 'Cuidados constantes para preservar e valorizar seu patrimônio.' },
  { icon: FileBarChart, title: 'Relatórios mensais', body: 'Receita, ocupação e performance, prontos para o Carnê-Leão.' },
]

export function Advantages() {
  return (
    <section id="vantagens" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Vantagens da PropertyManager no Rio
          </h2>
          <p className="mt-3 text-gray-600">Tecnologia e expertise local para maximizar sua receita.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADV.map((a) => (
            <div key={a.title} className="rounded-2xl border border-gray-100 p-7 transition hover:border-primary hover:shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                <a.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
