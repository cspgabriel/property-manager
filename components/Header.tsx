'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const WHATSAPP =
  'https://wa.me/5521999999999?text=Ol%C3%A1!%20Vim%20do%20site%20PropertyManager%20e%20quero%20saber%20mais%20sobre%20gest%C3%A3o%20de%20Airbnb.'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-container items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-extrabold text-white">
            PM
          </div>
          <span className="text-lg font-bold text-ink">
            Property<span className="text-primary">Manager</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#hero-estimator" className="text-sm font-medium text-gray-700 hover:text-primary">
            Simular renda
          </a>
          <a href="#servicos" className="text-sm font-medium text-gray-700 hover:text-primary">
            Serviços
          </a>
          <a href="#vantagens" className="text-sm font-medium text-gray-700 hover:text-primary">
            Vantagens
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary">
            Dúvidas
          </a>
        </div>

        <div className="flex items-center gap-3">
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
          <a href="#hero-estimator" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            Simular renda
          </a>
          <a href="#servicos" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            Serviços
          </a>
          <a href="#vantagens" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            Vantagens
          </a>
          <a href="#faq" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            Dúvidas
          </a>
          <a href={WHATSAPP} className="mt-2 block rounded-lg bg-primary px-3 py-2.5 text-center font-semibold text-white">
            Falar com especialista
          </a>
        </div>
      )}
    </header>
  )
}
