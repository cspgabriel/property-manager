export type Imovel = {
  slug: string
  nome: string
  bairro: string
  cidade: string
  tipo: string
  quartos: number
  banheiros: number
  hospedes: number
  preco: number // diária em R$
  nota: number
  avaliacoes: number
  /** caminho da foto (public/) */
  foto: string
  descricao: string
  comodidades: string[]
  destaque?: boolean
}

// gradientes tailwind por bairro (placeholder visual sem asset externo)
const GRAD: Record<string, string> = {
  Copacabana: 'from-sky-400 to-blue-600',
  Ipanema: 'from-emerald-400 to-teal-600',
  Leblon: 'from-violet-400 to-indigo-600',
  Botafogo: 'from-amber-400 to-orange-600',
  'Barra da Tijuca': 'from-cyan-400 to-sky-600',
  Flamengo: 'from-rose-400 to-pink-600',
}

export function gradiente(bairro: string) {
  return GRAD[bairro] ?? 'from-slate-400 to-slate-600'
}

export const IMOVEIS: Imovel[] = [
  {
    slug: 'cobertura-vista-mar-copacabana',
    nome: 'Cobertura vista mar em Copacabana',
    bairro: 'Copacabana',
    cidade: 'Rio de Janeiro',
    tipo: 'Cobertura',
    quartos: 3,
    banheiros: 2,
    hospedes: 6,
    preco: 890,
    nota: 4.97,
    avaliacoes: 214,
    foto: '/imoveis/cobertura-copacabana.png',
    descricao:
      'Cobertura ampla a uma quadra da praia, com terraço privativo, vista panorâmica para o mar e pôr do sol. Ideal para famílias e grupos que querem conforto no coração de Copacabana.',
    comodidades: ['Wi-Fi 500MB', 'Ar-condicionado', 'Cozinha completa', 'Terraço', 'Vista mar', 'Elevador'],
    destaque: true,
  },
  {
    slug: 'studio-moderno-ipanema',
    nome: 'Studio moderno em Ipanema',
    bairro: 'Ipanema',
    cidade: 'Rio de Janeiro',
    tipo: 'Studio',
    quartos: 1,
    banheiros: 1,
    hospedes: 2,
    preco: 520,
    nota: 4.92,
    avaliacoes: 156,
    foto: '/imoveis/studio-ipanema.png',
    descricao:
      'Studio recém-reformado a 300m da praia de Ipanema, decoração contemporânea e tudo que um casal precisa para uma estadia perfeita perto de bares e restaurantes.',
    comodidades: ['Wi-Fi 300MB', 'Ar-condicionado', 'Cozinha americana', 'Smart TV', 'Portaria 24h'],
    destaque: true,
  },
  {
    slug: 'apartamento-luxo-leblon',
    nome: 'Apartamento de luxo no Leblon',
    bairro: 'Leblon',
    cidade: 'Rio de Janeiro',
    tipo: 'Apartamento',
    quartos: 2,
    banheiros: 2,
    hospedes: 4,
    preco: 1150,
    nota: 4.99,
    avaliacoes: 189,
    foto: '/imoveis/apartamento-leblon.png',
    descricao:
      'Apartamento sofisticado no bairro mais nobre do Rio, com acabamento premium, a poucos passos da praia do Leblon e das melhores compras da cidade.',
    comodidades: ['Wi-Fi 1GB', 'Ar-condicionado', 'Cozinha gourmet', 'Academia', 'Piscina', 'Vaga garagem'],
    destaque: true,
  },
  {
    slug: 'loft-charmoso-botafogo',
    nome: 'Loft charmoso em Botafogo',
    bairro: 'Botafogo',
    cidade: 'Rio de Janeiro',
    tipo: 'Loft',
    quartos: 1,
    banheiros: 1,
    hospedes: 3,
    preco: 410,
    nota: 4.88,
    avaliacoes: 97,
    foto: '/imoveis/loft-botafogo.png',
    descricao:
      'Loft descolado com vista para o Pão de Açúcar, próximo ao metrô e à vida noturna de Botafogo. Perfeito para quem quer explorar a cidade.',
    comodidades: ['Wi-Fi 300MB', 'Ar-condicionado', 'Cozinha equipada', 'Metrô a 400m', 'Vista Pão de Açúcar'],
  },
  {
    slug: 'flat-familiar-barra',
    nome: 'Flat familiar na Barra da Tijuca',
    bairro: 'Barra da Tijuca',
    cidade: 'Rio de Janeiro',
    tipo: 'Flat',
    quartos: 2,
    banheiros: 2,
    hospedes: 5,
    preco: 640,
    nota: 4.9,
    avaliacoes: 132,
    foto: '/imoveis/flat-barra.png',
    descricao:
      'Flat espaçoso em condomínio com piscina e lazer completo, de frente para a praia da Barra. Ótimo para famílias que buscam tranquilidade e estrutura.',
    comodidades: ['Wi-Fi 400MB', 'Ar-condicionado', 'Cozinha completa', 'Piscina', 'Playground', 'Vaga garagem'],
  },
  {
    slug: 'apartamento-aconchegante-flamengo',
    nome: 'Apartamento aconchegante no Flamengo',
    bairro: 'Flamengo',
    cidade: 'Rio de Janeiro',
    tipo: 'Apartamento',
    quartos: 2,
    banheiros: 1,
    hospedes: 4,
    preco: 480,
    nota: 4.85,
    avaliacoes: 78,
    foto: '/imoveis/apartamento-flamengo.png',
    descricao:
      'Apartamento confortável de frente para o Aterro do Flamengo, com fácil acesso ao Centro e à Zona Sul. Ambiente familiar e bem localizado.',
    comodidades: ['Wi-Fi 300MB', 'Ar-condicionado', 'Cozinha equipada', 'Vista aterro', 'Metrô a 600m'],
  },
]

export function getImovel(slug: string) {
  return IMOVEIS.find((i) => i.slug === slug)
}

export const BAIRROS_DISPONIVEIS = Array.from(new Set(IMOVEIS.map((i) => i.bairro)))
