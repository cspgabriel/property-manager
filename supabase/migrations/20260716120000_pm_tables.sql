-- PropertyManager: tabelas com prefixo pm_ no projeto AGENCIAR (banco compartilhado)

-- Leads da calculadora de renda
create table if not exists public.pm_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text,
  email text,
  telefone text,
  bairro text,
  quartos text,
  modo text,                       -- 'rapido' | 'detalhado'
  receita_estimada numeric,
  origem text default 'calculadora',
  payload jsonb
);

-- Solicitações de reserva do portal de estadias
create table if not exists public.pm_reservas (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  imovel_slug text not null,
  imovel_nome text,
  checkin date,
  checkout date,
  noites int,
  hospedes int,
  total numeric,
  hospede_nome text,
  hospede_email text,
  hospede_telefone text,
  status text default 'solicitada',
  payload jsonb
);

-- RLS: permitir apenas INSERT anônimo (captação pública), sem leitura pública
alter table public.pm_leads enable row level security;
alter table public.pm_reservas enable row level security;

drop policy if exists pm_leads_insert_anon on public.pm_leads;
create policy pm_leads_insert_anon on public.pm_leads
  for insert to anon, authenticated with check (true);

drop policy if exists pm_reservas_insert_anon on public.pm_reservas;
create policy pm_reservas_insert_anon on public.pm_reservas
  for insert to anon, authenticated with check (true);

create index if not exists pm_leads_created_idx on public.pm_leads (created_at desc);
create index if not exists pm_reservas_created_idx on public.pm_reservas (created_at desc);
