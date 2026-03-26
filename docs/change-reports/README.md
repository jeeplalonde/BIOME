# Change Reports

Change reports are generated at the end of every BIOME build session. They provide a structured record of what was built, changed, and deployed.

## Format

Each report is a JSON file named `change-report-YYYY-MM-DD.json` containing:

| Field | Description |
|-------|-------------|
| `session` | Date of the build session |
| `branch` | Git branch the work was done on |
| `summary` | One-line description of the session |
| `milestones` | Product milestones achieved with status |
| `commits` | All commits made during the session |
| `infrastructure` | Supabase projects, deployments, and monorepo structure changes |
| `architecture_standards_met` | Which BIOME ARB standards were addressed |
| `design_systems` | Design mode usage (Daylight vs Canopy) |
| `next_steps` | What comes next |

## How to read them

- **Quick scan**: Read `summary` and `milestones` for the high-level picture
- **Detail dive**: Check `commits` for every change, `infrastructure` for system state
- **Continuity**: `next_steps` tells the next session where to pick up
- **Compliance**: `architecture_standards_met` confirms ARB alignment

## Convention

- One report per build session
- Filename: `change-report-YYYY-MM-DD.json`
- Generated at session end, committed and pushed with the final changes
