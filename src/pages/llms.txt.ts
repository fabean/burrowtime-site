import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://fabean.github.io/burrowtime-site/');
  const link = (path: string) => new URL(path, root).toString();
  const body = `# BurrowTime

> BurrowTime is an open-source, local-first time tracker for developers and coding agents. It includes a terminal UI, scriptable CLI, agent skills, and an MCP server. Time data remains in local Watson-compatible files.

## Documentation

- [Start here](${link('docs/')})
- [Installation](${link('docs/installation/')})
- [Agent time tracking](${link('docs/agent-time-tracking/')})
- [MCP server](${link('docs/mcp/')})
- [Optional Clockify plugin](${link('docs/clockify/')})
- [Optional Timetable connector](${link('docs/timetable/')})
- [CLI reference](${link('docs/cli/')})
- [Watson migration](${link('docs/watson/')})

## Source and releases

- [GitHub repository](https://github.com/fabean/BurrowTime)
- [Latest release](https://github.com/fabean/BurrowTime/releases/latest)

## Clockify export

The separately installed Clockify plugin exports completed entries only when invoked. It offers client-aware project mapping, editable confirmation, optional per-entry rounding, tag-only descriptions, and a local upload ledger. Clockify support currently requires installing both executables from main, not the latest tagged release.

## Timetable export

The separately installed Timetable connector exports completed entries only when invoked. It offers project mapping, editable confirmation, exact timestamps by default, optional rounding, and idempotent retries using stable frame IDs. Install BurrowTime and the connector from main.

## Agent safety rule

Tracking starts only when the user explicitly asks and provides a BurrowTime project plus a task or ticket. Integrations retain the exact agent session ID and must not stop timers they do not own.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
