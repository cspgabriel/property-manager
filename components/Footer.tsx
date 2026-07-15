import { Instagram, Facebook, Mail, Phone } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Serviços',
    links: [
      { label: 'Anúncios profissionais', href: '/servicos/anuncios' },
      { label: 'Precificação dinâmica', href: '/servicos/precificacao' },
      { label: 'Limpeza e manutenção', href: '/servicos/limpeza' },
      { label: 'Calculadora de renda', href: '/calculadora' },
    ],
  },
  {
    title: 'Hóspedes',
    links: [
      { label: 'Reservar estadia', href: '/estadias' },
      { label: 'Copacabana', href: '/estadias?bairro=Copacabana' },
      { label: 'Ipanema', href: '/estadias?bairro=Ipanema' },
      { label: 'Leblon', href: '/estadias?bairro=Leblon' },
    ],
  },
  {
    title: 'Cidades',
    links: [
      { label: 'Rio de Janeiro', href: '/#calculadora' },
      { label: 'São Paulo', href: '/#calculadora' },
      { label: 'Brasília', href: '/#calculadora' },
      { label: 'Salvador', href: '/#calculadora' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Todos os serviços', href: '/servicos' },
      { label: 'Como funciona', href: '/#calculadora' },
      { label: 'Depoimentos', href: '/#faq' },
      { label: 'Dúvidas', href: '/#faq' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink text-gray-300">
      <div className="mx-auto max-w-container px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-extrabold text-white">
                PM
              </div>
              <span className="text-lg font-bold text-white">
                Property<span className="text-primary">Manager</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-gray-400">
              Administradora profissional de aluguel por temporada. Seu imóvel rendendo até 30% mais, sem você
              levantar um dedo.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Mail, Phone].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-primary hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-gray-400 transition hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} PropertyManager. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacidade</a>
            <a href="#" className="hover:text-primary">Termos</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
