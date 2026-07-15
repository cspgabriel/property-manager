import {
  Camera,
  DollarSign,
  Sparkles,
  MessageSquare,
  Shield,
  FileBarChart,
  type LucideIcon,
} from 'lucide-react'

export type Servico = {
  slug: string
  icon: LucideIcon
  title: string
  short: string
  hero: string
  bullets: { title: string; body: string }[]
}

export const SERVICOS: Servico[] = [
  {
    slug: 'anuncios',
    icon: Camera,
    title: 'Anúncios profissionais',
    short: 'Fotos, descrição e posicionamento que fazem seu imóvel se destacar.',
    hero: 'Anúncios que vendem noites — não que só ocupam espaço nas plataformas.',
    bullets: [
      { title: 'Fotografia profissional', body: 'Ensaio completo com fotógrafo especializado em imóveis para temporada.' },
      { title: 'Copy que converte', body: 'Descrições otimizadas para busca e persuasão em cada plataforma.' },
      { title: 'Posicionamento estratégico', body: 'Configuração de destaques, comodidades e regras para subir no ranking.' },
      { title: 'Multi-plataforma', body: 'Publicação simultânea no Airbnb, Booking e VRBO, sincronizada pelo nosso motor.' },
    ],
  },
  {
    slug: 'precificacao',
    icon: DollarSign,
    title: 'Precificação dinâmica',
    short: 'Preço ajustado automaticamente por demanda, eventos e sazonalidade.',
    hero: 'O preço certo, todos os dias — sem você ficar de olho no calendário.',
    bullets: [
      { title: 'Análise de demanda', body: 'Monitoramos ocupação da região e ajustamos o preço em tempo real.' },
      { title: 'Eventos e alta temporada', body: 'Carnaval, Réveillon e Rock in Rio com multiplicadores de 5 a 6x.' },
      { title: 'Mínimos inteligentes', body: 'Estadia mínima ajustada para maximizar receita sem deixar buracos no calendário.' },
      { title: 'Sem trabalho manual', body: 'O motor cuida de tudo. Você só acompanha os resultados.' },
    ],
  },
  {
    slug: 'limpeza',
    icon: Sparkles,
    title: 'Limpeza e manutenção',
    short: 'Equipe profissional garantindo excelência entre cada estadia.',
    hero: 'Seu imóvel impecável a cada check-in, sem você mover um dedo.',
    bullets: [
      { title: 'Limpeza entre hóspedes', body: 'Rede de profissionais acionada automaticamente após cada check-out.' },
      { title: 'Reposição de amenidades', body: 'Enxoval, produtos e itens de boas-vindas sempre repostos.' },
      { title: 'Manutenção preventiva', body: 'Inspeções regulares para preservar e valorizar o patrimônio.' },
      { title: 'Emergências 24/7', body: 'Encanador, eletricista e chaveiro acionados quando necessário.' },
    ],
  },
  {
    slug: 'hospedes',
    icon: MessageSquare,
    title: 'Atendimento aos hóspedes',
    short: 'Comunicação, check-in e suporte 24/7 em português e inglês.',
    hero: 'Hóspedes bem atendidos avaliam melhor — e avaliação alta rende mais.',
    bullets: [
      { title: 'Respostas em minutos', body: 'Atendimento rápido antes, durante e depois da estadia.' },
      { title: 'Check-in autônomo', body: 'Instruções automáticas e fechaduras eletrônicas integradas.' },
      { title: 'Suporte bilíngue', body: 'Comunicação em português e inglês para hóspedes do mundo todo.' },
      { title: 'Gestão de avaliações', body: 'Incentivamos e respondemos avaliações para manter sua nota no topo.' },
    ],
  },
  {
    slug: 'seguranca',
    icon: Shield,
    title: 'Segurança e proteção',
    short: 'Verificação de hóspedes, seguro e caução para tranquilidade total.',
    hero: 'Receba com tranquilidade: verificamos quem entra no seu imóvel.',
    bullets: [
      { title: 'Verificação de hóspedes', body: 'Triagem e validação de identidade antes de cada reserva.' },
      { title: 'Depósito caução', body: 'Cobrança e gestão de caução para cobrir eventuais danos.' },
      { title: 'Seguro de proteção', body: 'Cobertura contra danos e imprevistos durante a estadia.' },
      { title: 'Controle de acesso', body: 'Fechaduras eletrônicas com códigos únicos por hóspede.' },
    ],
  },
  {
    slug: 'relatorios',
    icon: FileBarChart,
    title: 'Relatórios e financeiro',
    short: 'Receita, ocupação e repasses transparentes, prontos para o imposto.',
    hero: 'Transparência total: você vê cada real que seu imóvel gera.',
    bullets: [
      { title: 'Repasse via Pix', body: 'Pagamentos pontuais e rastreáveis, direto na sua conta.' },
      { title: 'Relatório mensal', body: 'Receita, ocupação, despesas e performance consolidados.' },
      { title: 'Pronto para o Carnê-Leão', body: 'Documentação organizada para a sua declaração de imposto.' },
      { title: 'Dashboard em tempo real', body: 'Acompanhe reservas e ganhos a qualquer momento pelo painel.' },
    ],
  },
]

export function getServico(slug: string) {
  return SERVICOS.find((s) => s.slug === slug)
}
