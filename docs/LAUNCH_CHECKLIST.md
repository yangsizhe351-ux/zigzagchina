# CDQC launch checklist

## Verified locally

- [x] Production build passes with `npm run check`
- [x] Production preview serves the homepage with HTTP 200
- [x] English, French and Chinese switching works in the built bundle
- [x] Search covers cities, routes and experiences
- [x] Route and experience detail views work
- [x] Journey persistence, removal, clear and share-link behavior are implemented
- [x] Waitlist has local fallback and optional Supabase write path
- [x] Responsive and reduced-motion styles are present
- [x] `robots.txt` is served

## Required before public launch

- [ ] Create the production Supabase project
- [ ] Run `supabase/schema.sql` and `supabase/seed.sql`
- [ ] Add production `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- [ ] Verify a test waitlist signup in the Supabase dashboard
- [ ] Choose the production domain and add its canonical URL / sitemap
- [ ] Deploy the exact build produced by `npm run build`
- [ ] Run one final mobile and desktop pass on the public URL

The unchecked items require external project credentials, a chosen domain, or
deployment access; they are intentionally not faked in the local project.
