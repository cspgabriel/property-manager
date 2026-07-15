'use client'

import { Menu, X, Building2 } from 'lucide-react'
import { useState } from 'react'

const WHATSAPP =
  'https://wa.me/5521999999999?text=Ol%C3%A1!%20Vim%20do%20site%20PropertyManager%20e%20quero%20saber%20mais%20sobre%20gest%C3%A3o%20de%20Airbnb.'

const LINKS = [
  { href: '/#hero-estimator', label: 'Simular renda' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/calculadora', label: 'Calculadora' },
  { href: '/#vantagens', label: 'Vantagens' },
  { href: '/#faq', label: 'Dúvidas' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-container items-center justify-between px-4 py-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-extrabold text-white">
            PM
          </div>
          <span className="text-lg font-bold text-ink">
            Property<span className="text-primary">Manager</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/estadias"
            className="hidden items-center gap-1.5 rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary-light md:inline-flex"
          >
            <Building2 size={16} /> Reservar estadia
          </a>
          <a
            href={WHATSAPP}
            className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark md:inline-block"
          >
            Falar com especialista
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="space-y-1 border-t border-gray-100 px-4 py-3 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/estadias"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-primary px-3 py-2.5 font-semibold text-primary"
          >
            <Building2 size={16} /> Reservar estadia
          </a>
          <a href={WHATSAPP} className="mt-1 block rounded-lg bg-primary px-3 py-2.5 text-center font-semibold text-white">
            Falar com especialista
          </a>
        </div>
      )}
    </header>
  )
}
