import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET() {
  // Using relative URL for sitemap - crawlers will resolve it based on the robots.txt location
  const robotsTxt = `# https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt
User-agent: *
Allow: /

# Disallow private/admin areas
Disallow: /dashboard/
Disallow: /auth/
Disallow: /login/
Disallow: /signup/

# Sitemap location
Sitemap: /sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}