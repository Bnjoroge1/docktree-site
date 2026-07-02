import type { APIRoute } from 'astro';

import installScript from '../../installer/install.sh?raw';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(installScript, {
    headers: {
      'Content-Type': 'text/x-shellscript; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
