# PropertyManager

Plataforma open-source para administradora de aluguel por temporada (Airbnb), com **dois portais** da mesma empresa:

- **Portal do proprietário** (`/`) — captação de donos de imóveis; estrutura inspirada no Hostnjoy, com calculadora de rendimento estilo Bewave.
- **Portal do hóspede** (`/estadias`) — marketplace de reservas tipo CharlieStay: vitrine, detalhe do imóvel e fluxo de reserva.

Produção: https://property-manager-app-azure.vercel.app

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- lucide-react (ícones)
- Supabase (PostgREST) para leads e reservas
- Fotos geradas por IA (Gemini) em `public/`

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Portal do proprietário (landing) |
| `/calculadora` | Calculadora de renda unificada (rápida + por endereço) |
| `/servicos`, `/servicos/[slug]` | Serviços (6 páginas de detalhe) |
| `/estadias` | Vitrine de imóveis com busca e filtros |
| `/estadias/[slug]` | Detalhe do imóvel + reserva |

## Desenvolvimento

```bash
npm install
cp .env.example .env.local   # preencha as chaves do Supabase
npm run dev                  # http://localhost:3200
npm run build                # build de produção
```

## Backend (Supabase)

Tabelas com prefixo `pm_` (banco compartilhado do projeto AGENCIAR), RLS insert-only para `anon`:

- `pm_leads` — leads da calculadora de renda
- `pm_reservas` — solicitações de reserva do portal de hóspedes

Migration em `supabase/migrations/`. Variáveis de ambiente necessárias:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

O cliente (`lib/supabase.ts`) usa PostgREST direto (sem SDK). Se as env vars estiverem ausentes, os inserts viram no-op (não quebram a UX).
