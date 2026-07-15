import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap' })

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
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
