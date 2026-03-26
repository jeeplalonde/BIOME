/**
 * useAuth — React hook for authentication state.
 *
 * WHY: Every BIOME app needs to know who's logged in.
 * This hook subscribes to auth changes and provides the current user.
 * Components re-render automatically when auth state changes.
 */

import { useState, useEffect } from 'react'
import type { SupabaseClient, User } from '@supabase/supabase-js'
import { getCurrentUser, onAuthStateChange } from '../../auth'

export function useAuth(client: SupabaseClient) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load initial user
    getCurrentUser(client).then(u => {
      setUser(u)
      setLoading(false)
    })

    // Subscribe to changes
    const unsubscribe = onAuthStateChange(client, setUser)
    return unsubscribe
  }, [client])

  return {
    user,
    loading,
    isAuthenticated: !!user,
  }
}
