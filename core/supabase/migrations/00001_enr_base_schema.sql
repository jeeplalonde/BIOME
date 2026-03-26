-- ================================================
-- BIOME ENR Base Schema
-- Single Source of Truth — define data once, reference everywhere
-- ================================================

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- ----------------------------
-- Entity Nodes
-- The core artifact table. Every object in BIOME is an entity.
-- ----------------------------
create table entity_nodes (
  id          uuid primary key default uuid_generate_v4(),
  type        text not null,
  label       text not null,
  status      text not null default 'draft'
                check (status in ('draft', 'active', 'archived', 'deleted')),
  metadata    jsonb not null default '{}',
  created_by  uuid references auth.users(id),
  owned_by    uuid references auth.users(id),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ----------------------------
-- Field Nodes
-- The atomic unit of truth. Each field belongs to one entity.
-- ----------------------------
create table field_nodes (
  id              uuid primary key default uuid_generate_v4(),
  entity_id       uuid not null references entity_nodes(id) on delete cascade,
  key             text not null,
  value           jsonb,
  version         integer not null default 1,
  source_form     text not null default '',
  referenced_by   uuid[] not null default '{}',
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),

  -- One key per entity per version (SSOT)
  unique (entity_id, key, version)
);

-- ----------------------------
-- Edges
-- Typed directional connections between entities.
-- ----------------------------
create table edges (
  id          uuid primary key default uuid_generate_v4(),
  type        text not null,
  source_id   uuid not null references entity_nodes(id) on delete cascade,
  target_id   uuid not null references entity_nodes(id) on delete cascade,
  metadata    jsonb not null default '{}',
  created_at  timestamptz not null default now(),

  -- Prevent duplicate edges of the same type between same nodes
  unique (type, source_id, target_id)
);

-- ----------------------------
-- Canvas Chains
-- Ordered sequences with dependency tracking.
-- Upstream must complete before downstream can start.
-- ----------------------------
create table canvas_chains (
  id          uuid primary key default uuid_generate_v4(),
  label       text not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table canvas_steps (
  id            uuid primary key default uuid_generate_v4(),
  chain_id      uuid not null references canvas_chains(id) on delete cascade,
  entity_id     uuid not null references entity_nodes(id) on delete cascade,
  step_order    integer not null,
  depends_on    uuid[] not null default '{}',
  status        text not null default 'pending'
                  check (status in ('pending', 'in_progress', 'complete', 'blocked')),
  created_at    timestamptz not null default now(),

  unique (chain_id, step_order)
);

-- ----------------------------
-- Audit Trail
-- Immutable. Append-only. Every mutation is recorded.
-- ----------------------------
create table audit_log (
  id          uuid primary key default uuid_generate_v4(),
  entity_id   uuid not null,
  entity_type text not null,
  action      text not null
                check (action in ('create', 'update', 'delete', 'archive', 'restore', 'transition')),
  actor_id    uuid references auth.users(id),
  before_data jsonb,
  after_data  jsonb,
  reason      text,
  created_at  timestamptz not null default now()
);

-- Audit log is append-only: no updates, no deletes
-- We enforce this with RLS + no update/delete policies

-- ----------------------------
-- Indexes for performance
-- ----------------------------
create index idx_field_nodes_entity on field_nodes(entity_id);
create index idx_edges_source on edges(source_id);
create index idx_edges_target on edges(target_id);
create index idx_audit_entity on audit_log(entity_id);
create index idx_audit_actor on audit_log(actor_id);
create index idx_entity_type on entity_nodes(type);
create index idx_entity_status on entity_nodes(status);
create index idx_canvas_steps_chain on canvas_steps(chain_id);

-- ----------------------------
-- Auto-update updated_at
-- ----------------------------
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger entity_nodes_updated_at
  before update on entity_nodes
  for each row execute function update_updated_at();

create trigger field_nodes_updated_at
  before update on field_nodes
  for each row execute function update_updated_at();

create trigger canvas_chains_updated_at
  before update on canvas_chains
  for each row execute function update_updated_at();

-- ----------------------------
-- Row Level Security
-- ----------------------------
alter table entity_nodes enable row level security;
alter table field_nodes enable row level security;
alter table edges enable row level security;
alter table canvas_chains enable row level security;
alter table canvas_steps enable row level security;
alter table audit_log enable row level security;

-- Authenticated users can read entities they own or created
create policy "Users can read own entities"
  on entity_nodes for select
  using (auth.uid() = owned_by or auth.uid() = created_by);

-- Authenticated users can insert entities
create policy "Users can create entities"
  on entity_nodes for insert
  with check (auth.uid() = created_by);

-- Authenticated users can update their own entities
create policy "Users can update own entities"
  on entity_nodes for update
  using (auth.uid() = owned_by);

-- Field nodes inherit access from their parent entity
create policy "Users can read own field nodes"
  on field_nodes for select
  using (exists (
    select 1 from entity_nodes
    where entity_nodes.id = field_nodes.entity_id
      and (auth.uid() = entity_nodes.owned_by or auth.uid() = entity_nodes.created_by)
  ));

create policy "Users can create field nodes"
  on field_nodes for insert
  with check (exists (
    select 1 from entity_nodes
    where entity_nodes.id = field_nodes.entity_id
      and auth.uid() = entity_nodes.owned_by
  ));

-- Edges: readable if you can see either connected entity
create policy "Users can read edges"
  on edges for select
  using (exists (
    select 1 from entity_nodes
    where (entity_nodes.id = edges.source_id or entity_nodes.id = edges.target_id)
      and (auth.uid() = entity_nodes.owned_by or auth.uid() = entity_nodes.created_by)
  ));

-- Audit log: read-only for entity owners, insert for system
create policy "Users can read own audit"
  on audit_log for select
  using (auth.uid() = actor_id);

create policy "System can insert audit"
  on audit_log for insert
  with check (true);

-- No update or delete policies on audit_log — it's immutable
