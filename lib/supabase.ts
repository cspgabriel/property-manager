// Cliente mínimo do Supabase via PostgREST (sem SDK, bundle leve).
// Insere em tabelas pm_* do projeto AGENCIAR (RLS insert-only anon).

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/** Insere uma linha numa tabela. Silencioso em erro (não bloqueia UX). */
export async function inserir(tabela: string, row: Record<string, unknown>): Promise<boolean> {
  if (!URL || !ANON) {
    // Sem env configurada: no-op (útil em preview/local sem chaves).
    console.warn('[supabase] env ausente — insert ignorado')
    return false
  }
  try {
    const res = await fetch(`${URL}/rest/v1/${tabela}`, {
      method: 'POST',
      headers: {
        apikey: ANON,
        Authorization: `Bearer ${ANON}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(row),
    })
    return res.ok
  } catch {
    return false
  }
}
