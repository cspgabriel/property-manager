'use client'

import { Menu, X, Home } from 'lucide-react'
import { useState } from 'react'

export function GuestHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-container items-center justify-between px-4 py-4 md:px-6">
        <a href="/estadias" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-extrabold text-white">
            PM
          </div>
          <span className="text-lg font-bold text-ink">
            Property<span className="text-primary">Stays</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <a href="/estadias" className="text-sm font-medium text-gray-700 hover:text-primary">
            Estadias
          </a>
          <a href="/estadias?bairro=Copacabana" className="text-sm font-medium text-gray-700 hover:text-primary">
            Copacabana
          </a>
          <a href="/estadias?bairro=Ipanema" className="text-sm font-medium text-gray-700 hover:text-primary">
            Ipanema
          </a>
          <a href="/estadias?bairro=Leblon" className="text-sm font-medium text-gray-700 hover:text-primary">
            Leblon
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/"
            className="hidden items-center gap-1.5 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-primary hover:text-primary md:inline-flex"
          >
            <Home size={16} /> Tenho um imóvel
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
          <a href="/estadias" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            Todas as estadias
          </a>
          <a href="/estadias?bairro=Copacabana" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            Copacabana
          </a>
          <a href="/estadias?bairro=Ipanema" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            Ipanema
          </a>
          <a href="/estadias?bairro=Leblon" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            Leblon
          </a>
          <a href="/" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2.5 font-semibold text-gray-700">
            <Home size={16} /> Tenho um imóvel
          </a>
        </div>
      )}
    </header>
  )
}
