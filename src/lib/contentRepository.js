import { content as localContent } from '../content';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const remoteEnabled = Boolean(supabaseUrl && supabaseAnonKey);

async function supabaseGet(table, query = '') {
  const response = await fetch(`${supabaseUrl}/rest/v1/${table}${query}`, {
    headers: { apikey: supabaseAnonKey, Authorization: `Bearer ${supabaseAnonKey}` },
  });
  if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
  return response.json();
}

async function supabasePost(table, payload) {
  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: 'POST',
    headers: { apikey: supabaseAnonKey, Authorization: `Bearer ${supabaseAnonKey}`, 'Content-Type': 'application/json', Prefer: 'resolution=ignore-duplicates,return=minimal' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
}

export async function submitWaitlist(email) {
  if (!remoteEnabled) return { source: 'local' };
  await supabasePost('waitlist_signups', { email, source: 'cdqc-homepage' });
  return { source: 'supabase' };
}

export async function getPublishedContent(language = 'en') {
  if (!remoteEnabled) return { source: 'local', language, content: localContent };

  try {
    const [cities, cityTranslations, routes, routeTranslations] = await Promise.all([
      supabaseGet('cities', '?is_published=eq.true&order=sort_order'),
      supabaseGet('city_translations', `?language_code=eq.${language}`),
      supabaseGet('routes', '?is_published=eq.true&order=sort_order'),
      supabaseGet('route_translations', `?language_code=eq.${language}`),
    ]);
    const locale = language === 'fr' ? 'FR' : language === 'zh' ? '中' : 'EN';
    const base = localContent[locale];
    const translatedCities = cityTranslations.reduce((result, item) => {
      const city = cities.find((entry) => entry.id === item.city_id);
      if (city) {
        const key = city.slug === 'chengdu' ? 'Chengdu' : 'Chongqing';
        result[key] = { ...result[key], title: item.name, eyebrow: item.eyebrow || '', body: item.short_description || '' };
      }
      return result;
    }, { ...base.city });
    const translatedRoutes = routes.map((route) => routeTranslations.find((item) => item.route_id === route.id)?.title || route.slug);
    const translatedRouteDetails = routes.map((route, index) => routeTranslations.find((item) => item.route_id === route.id)?.description || base.routeDetails?.[index] || '');
    return { source: 'supabase', language, content: { ...localContent, [locale]: { ...base, city: translatedCities, routes: translatedRoutes, routeDetails: translatedRouteDetails } } };
  } catch (error) {
    console.warn('CDQC content fallback:', error.message);
    return { source: 'local-fallback', language, content: localContent };
  }
}

export { remoteEnabled };
