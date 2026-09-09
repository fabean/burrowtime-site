import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://fabean.github.io/BurrowTime/');
  const link = (path: string) => new URL(path, root).toString();
  const body = `# BurrowTime

> BurrowTime is an open-source, local-first time tracker for developers and coding agents. It includes a terminal UI, scriptable CLI, agent skills, and an MCP server. Time data remains in local Watson-compatible files.

## Documentation

- [Start here](${link('docs/')})
- [Installation](${link('docs/installation/')})
- [Agent time tracking](${link('docs/agent-time-tracking/')})
- [MCP server](${link('docs/mcp/')})
- [CLI reference](${link('docs/cli/')})
- [Watson migration](${link('docs/watson/')})

## Source and releases

- [GitHub repository](https://github.com/fabean/BurrowTime)
- [Latest release](https://github.com/fabean/BurrowTime/releases/latest)

## Agent safety rule

Tracking starts only when the user explicitly asks and provides a BurrowTime project plus a task or ticket. Integrations retain the exact agent session ID and must not stop timers they do not own.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
