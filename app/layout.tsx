import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PropertyManager — Administradora de Airbnb no Rio de Janeiro',
  description:
    'Seu imóvel rendendo até 30% mais, sem você levantar um dedo. Gestão completa de aluguel por temporada: anúncios, precificação dinâmica, limpeza, hóspedes e repasse via Pix. Taxa única de 16%, sem fidelidade.',
  keywords: ['administradora airbnb', 'aluguel temporada', 'gestão imóveis', 'rio de janeiro', 'copacabana', 'ipanema'],
  openGraph: {
    title: 'PropertyManager — Seu imóvel rendendo até 30% mais',
    description: 'Administradora profissional de Airbnb no Rio de Janeiro. Taxa única de 16%, sem fidelidade.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
