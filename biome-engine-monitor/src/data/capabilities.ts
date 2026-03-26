export type HealthStatus = 'healthy' | 'warning' | 'critical' | 'unknown'

export interface Capability {
  id: string
  name: string
  category: 'security' | 'data' | 'reliability' | 'standards'
  description: string
  whyItMatters: string
  industryStandard: string
  metric: string
  evaluate: (value: unknown) => HealthStatus
}

export interface ProjectConfig {
  id: string
  name: string
  supabaseId: string
  region: string
}

// --- The 3 BIOME projects ---

export const projects: ProjectConfig[] = [
  {
    id: 'manifest',
    name: 'Manifest AI',
    supabaseId: 'jslzcnurnyucfiigyrtj',
    region: 'ca-central-1',
  },
  {
    id: 'website',
    name: 'BIOME Website',
    supabaseId: 'oqxuczoaouebbpiacvpk',
    region: 'ca-central-1',
  },
  {
    id: 'mymantra',
    name: 'MyMantra',
    supabaseId: 'xyckbtgidlvrihcpxhpr',
    region: 'us-east-2',
  },
]

// --- Capability definitions ---

export const capabilities: Capability[] = [
  // === SECURITY ===
  {
    id: 'rls_coverage',
    name: 'Row Level Security Coverage',
    category: 'security',
    description:
      'Row Level Security (RLS) controls who can read, insert, update, or delete rows in each table. When RLS is enabled, every query is filtered through policies you define — even if someone gets your API key, they can only access data the policies allow.',
    whyItMatters:
      'Without RLS, your anon key gives full read/write access to every row in the table. RLS is Supabase\'s primary defense against unauthorized data access. A single table without RLS can expose your entire dataset.',
    industryStandard:
      '100% of public-facing tables must have RLS enabled. This is Supabase\'s #1 security recommendation and aligns with the OWASP principle of "deny by default" access control.',
    metric: 'Percentage of tables with RLS enabled',
    evaluate: (value) => {
      const pct = value as number
      if (pct === 100) return 'healthy'
      if (pct >= 80) return 'warning'
      return 'critical'
    },
  },
  {
    id: 'rls_policy_count',
    name: 'RLS Policy Completeness',
    category: 'security',
    description:
      'Having RLS enabled on a table is step one. Step two is having actual policies defined. A table with RLS enabled but zero policies will block ALL access — which is safe but broken. Each table needs at least SELECT and INSERT policies for basic functionality.',
    whyItMatters:
      'Tables with RLS enabled but no policies are "locked out" — no one can read or write. Tables with only SELECT but no INSERT/UPDATE policies mean your app can display data but can\'t save. Both are silent failures that are hard to debug.',
    industryStandard:
      'Every RLS-enabled table should have at minimum a SELECT policy. Tables that accept user input need INSERT and UPDATE policies. Supabase recommends testing policies with their SQL editor before deploying.',
    metric: 'Tables with RLS enabled that have at least one policy defined',
    evaluate: (value) => {
      const pct = value as number
      if (pct === 100) return 'healthy'
      if (pct >= 50) return 'warning'
      return 'critical'
    },
  },

  // === DATA ===
  {
    id: 'audit_log_standard',
    name: 'Audit Log Compliance',
    category: 'data',
    description:
      'An audit log records who changed what, when, and why. The BIOME standard audit log uses a generic pattern: entity_id + entity_type + before/after JSONB snapshots + actor_id linked to auth.users. This works across any table without schema changes.',
    whyItMatters:
      'Without audit logs, you can\'t answer "who changed this and when?" — which matters for debugging, compliance, and trust. A standardized audit log means every BIOME app can be audited the same way, and you can query across projects.',
    industryStandard:
      'SOC 2 and ISO 27001 require audit trails for data changes. The generic entity/before/after pattern is an industry best practice used by systems like Salesforce and HubSpot — it scales without schema changes.',
    metric: 'Presence of BIOME-standard audit_log table (entity_id, entity_type, actor_id, before_data, after_data)',
    evaluate: (value) => {
      const present = value as boolean
      return present ? 'healthy' : 'critical'
    },
  },
  {
    id: 'updated_at_triggers',
    name: 'Automatic Timestamp Triggers',
    category: 'data',
    description:
      'An updated_at trigger automatically sets the updated_at column to now() whenever a row is modified. Without it, updated_at only reflects when the row was created — making it useless for tracking changes.',
    whyItMatters:
      'If updated_at doesn\'t auto-update, you can\'t sort by "recently changed," build sync logic, or detect stale data. It\'s one of the most common bugs in early-stage apps — everything looks fine until you need to know what changed recently.',
    industryStandard:
      'Every table with an updated_at column should have a BEFORE UPDATE trigger. PostgreSQL doesn\'t do this automatically (unlike MySQL\'s ON UPDATE CURRENT_TIMESTAMP), so you must create it explicitly. The BIOME standard uses a shared set_updated_at() function.',
    metric: 'Percentage of tables with updated_at that have a trigger',
    evaluate: (value) => {
      const pct = value as number
      if (pct === 100) return 'healthy'
      if (pct >= 50) return 'warning'
      return 'critical'
    },
  },

  // === RELIABILITY ===
  {
    id: 'database_health',
    name: 'Database Connection',
    category: 'reliability',
    description:
      'A basic liveness check — can we connect to the database and run a query? This is the foundation of all monitoring. If this fails, nothing else matters.',
    whyItMatters:
      'Database outages are the #1 cause of application downtime. Knowing your database is reachable before users report problems lets you respond proactively instead of reactively.',
    industryStandard:
      'Every production system should have a heartbeat check that runs at regular intervals. AWS, GCP, and Azure all provide database health checks as a baseline monitoring capability. Response time under 500ms is considered healthy.',
    metric: 'Can execute SELECT 1 successfully',
    evaluate: (value) => {
      const ok = value as boolean
      return ok ? 'healthy' : 'critical'
    },
  },
  {
    id: 'table_count',
    name: 'Schema Size',
    category: 'reliability',
    description:
      'The number of tables in your public schema. This isn\'t about "more is bad" — it\'s about knowing your footprint. As your system grows, tracking schema size helps you catch runaway table creation and maintain awareness of your data model.',
    whyItMatters:
      'Schema sprawl — tables created for one-off experiments that never get cleaned up — makes databases harder to maintain, backup, and reason about. Knowing your table count is the first step to keeping your schema intentional.',
    industryStandard:
      'There\'s no magic number, but you should always know how many tables you have and why each exists. Database teams at companies like Stripe and Shopify maintain schema registries for exactly this reason.',
    metric: 'Count of tables in public schema',
    evaluate: (value) => {
      const count = value as number
      if (count > 0 && count <= 50) return 'healthy'
      if (count > 50) return 'warning'
      return 'critical'
    },
  },
  {
    id: 'total_rows',
    name: 'Data Volume',
    category: 'reliability',
    description:
      'Total estimated rows across all tables. On Supabase\'s free tier, you have limited storage. Monitoring row counts helps you understand growth rate and plan for scaling before you hit limits.',
    whyItMatters:
      'Running out of database storage causes write failures — your app stops saving data with no warning to users. Monitoring volume early means you can plan upgrades or archival strategies before it becomes an emergency.',
    industryStandard:
      'Track row counts per table and total. Set alerts at 70% and 90% of your storage tier limit. PostgreSQL\'s pg_stat_user_tables provides estimates without expensive COUNT(*) queries.',
    metric: 'Total estimated rows across all public tables',
    evaluate: (value) => {
      const rows = value as number
      if (rows < 100_000) return 'healthy'
      if (rows < 1_000_000) return 'warning'
      return 'critical'
    },
  },

  // === STANDARDS ===
  {
    id: 'uuid_standard',
    name: 'UUID Generation Standard',
    category: 'standards',
    description:
      'UUID primary keys can be generated two ways in PostgreSQL: the native gen_random_uuid() (built into Postgres 14+) or the extension-based uuid_generate_v4() (requires the uuid-ossp extension). Both produce valid v4 UUIDs, but mixing them creates inconsistency.',
    whyItMatters:
      'Using the native function means one less extension dependency, consistent behavior across projects, and simpler database setup. Mixing both in the same system signals that tables were created at different times without a standard — a maintenance smell.',
    industryStandard:
      'PostgreSQL 14+ recommends gen_random_uuid() as the preferred approach. It\'s built into core, requires no extension, and is the default in Supabase\'s newer templates. The BIOME standard is gen_random_uuid() everywhere.',
    metric: 'All UUID defaults use gen_random_uuid() (not uuid_generate_v4)',
    evaluate: (value) => {
      const allNative = value as boolean
      return allNative ? 'healthy' : 'warning'
    },
  },
  {
    id: 'biome_function_standard',
    name: 'BIOME Shared Functions',
    category: 'standards',
    description:
      'The BIOME standard defines shared PostgreSQL functions that every project should have. Currently this is set_updated_at() — a trigger function that automatically maintains updated_at timestamps. As the platform grows, more shared functions may be added.',
    whyItMatters:
      'Shared functions ensure every BIOME app behaves the same way. If one project has set_updated_at() and another doesn\'t, timestamps will be reliable in one app and stale in another — creating subtle data inconsistencies across the ecosystem.',
    industryStandard:
      'Platform engineering teams at companies like Shopify and Stripe maintain "golden path" database templates with standard functions, triggers, and policies. This is the same principle — consistency at the infrastructure layer.',
    metric: 'Presence of BIOME standard functions (set_updated_at)',
    evaluate: (value) => {
      const present = value as boolean
      return present ? 'healthy' : 'critical'
    },
  },
]

export const categoryLabels: Record<Capability['category'], string> = {
  security: 'Security',
  data: 'Data Integrity',
  reliability: 'Reliability',
  standards: 'BIOME Standards',
}

export const categoryDescriptions: Record<Capability['category'], string> = {
  security: 'Access control and data protection — who can see and change what.',
  data: 'Tracking changes, maintaining history, and keeping timestamps honest.',
  reliability: 'Is the system up, how big is it, and can it handle growth.',
  standards: 'Cross-project consistency — the patterns that make BIOME apps work together.',
}
