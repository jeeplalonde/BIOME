/**
 * Manifest AI Supabase Client
 *
 * WHY: Uses the shared BIOME client factory from core,
 * configured with this app's env vars.
 */

import { createBiomeClient } from '@biome/core/supabase'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createBiomeClient(supabaseUrl, supabaseAnonKey)
