import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const installScript = readFileSync(join(process.cwd(), 'installer', 'install.sh'), 'utf8');

export const GET: APIRoute = () =>
  new Response(installScript, {
    headers: {
      'Content-Type': 'text/x-shellscript; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
