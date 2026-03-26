/**
 * Auth Service — session management and user operations.
 *
 * WHY: Every BIOME app needs authentication. This wraps Supabase Auth
 * into a clean API that all apps share. One auth flow, everywhere.
 */

import type { SupabaseClient, User, Session } from '@supabase/supabase-js'

export async function signInWithEmail(
  client: SupabaseClient,
  email: string,
  password: string
): Promise<{ user: User; session: Session }> {
  const { data, error } = await client.auth.signInWithPassword({ email, password })
  if (error) throw error
  return { user: data.user, session: data.session }
}

export async function signUpWithEmail(
  client: SupabaseClient,
  email: string,
  password: string
): Promise<{ user: User | null }> {
  const { data, error } = await client.auth.signUp({ email, password })
  if (error) throw error
  return { user: data.user }
}

export async function signOut(client: SupabaseClient): Promise<void> {
  const { error } = await client.auth.signOut()
  if (error) throw error
}

export async function getCurrentUser(client: SupabaseClient): Promise<User | null> {
  const { data: { user } } = await client.auth.getUser()
  return user
}

export async function getCurrentSession(client: SupabaseClient): Promise<Session | null> {
  const { data: { session } } = await client.auth.getSession()
  return session
}

/** Subscribe to auth state changes. Returns an unsubscribe function. */
export function onAuthStateChange(
  client: SupabaseClient,
  callback: (user: User | null) => void
): () => void {
  const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null)
  })
  return () => subscription.unsubscribe()
}
