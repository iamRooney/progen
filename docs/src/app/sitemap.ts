import { MetadataRoute } from 'next';
import { templates } from '@/lib/templates';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://setupkaro.dev';
  const now = new Date();

  const templateUrls = templates.map(t => ({
    url: `${base}/templates/${t.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/templates`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...templateUrls,
  ];
}