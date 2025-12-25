import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const robotsTxt = `User-agent: *
Disallow: /dashboard/
Disallow: /auth/
Disallow: /login/
Disallow: /signup/

Sitemap: https://menuwal.online/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}