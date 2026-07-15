import { Home, Building2, ArrowRight } from 'lucide-react'

/** Faixa no topo da home que direciona para os 2 portais da empresa. */
export function PortalSwitch() {
  return (
    <div className="bg-primary-dark text-white">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-3 px-4 py-3 text-center md:flex-row md:px-6 md:text-left">
        <p className="flex items-center gap-2 text-sm">
          <Home size={16} className="shrink-0" />
          Você é <strong>proprietário</strong> e quer rentabilizar seu imóvel? Está no lugar certo.
        </p>
        <a
          href="/estadias"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white/15 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/20 transition hover:bg-white/25"
        >
          <Building2 size={15} /> Quero me hospedar
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
