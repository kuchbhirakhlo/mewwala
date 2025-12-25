import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard/menu/create`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard/orders`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard/qr-codes`,
      lastModified: new Date(),
    },
    // Dynamic routes for menu would need to be generated based on data
    // For now, static routes are included
  ]
}