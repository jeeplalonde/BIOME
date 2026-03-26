import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export interface ProjectClient {
  id: string
  name: string
  region: string
  client: SupabaseClient
}

export const projectClients: ProjectClient[] = [
  {
    id: 'manifest',
    name: 'Manifest AI',
    region: 'ca-central-1',
    client: createClient(
      'https://jslzcnurnyucfiigyrtj.supabase.co',
      import.meta.env.VITE_SUPABASE_MANIFEST_ANON_KEY
    ),
  },
  {
    id: 'website',
    name: 'BIOME Website',
    region: 'ca-central-1',
    client: createClient(
      'https://oqxuczoaouebbpiacvpk.supabase.co',
      import.meta.env.VITE_SUPABASE_WEBSITE_ANON_KEY
    ),
  },
  {
    id: 'mymantra',
    name: 'MyMantra',
    region: 'us-east-2',
    client: createClient(
      'https://xyckbtgidlvrihcpxhpr.supabase.co',
      import.meta.env.VITE_SUPABASE_MYMANTRA_ANON_KEY
    ),
  },
]
