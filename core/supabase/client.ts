/**
 * BIOME Supabase Client — shared across all apps.
 *
 * WHY: SSOT principle — one client factory, consistent configuration.
 * Each app calls createBiomeClient() with its own env vars.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export function createBiomeClient(url: string, anonKey: string): SupabaseClient {
  if (!url || !anonKey) {
    throw new Error(
      'Missing Supabase config. Provide VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
    )
  }
  return createClient(url, anonKey)
}

export type { SupabaseClient }
