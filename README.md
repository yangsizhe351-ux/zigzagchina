# CDQC

CDQC is a visual, multilingual travel product for international visitors discovering Chengdu and Chongqing.

## What is already working

- Editorial landing page with diagonal Chengdu / Chongqing hero composition
- English, French and Chinese content switching across the full page
- Search across cities, routes and experiences
- Route and experience detail views
- Persistent journey builder with remove, clear and share-link support
- Optional Supabase content loading and waitlist capture
- Local fallback content when Supabase is not configured
- Responsive layout, reduced-motion support and keyboard-friendly interactions

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Validate before handoff

```bash
npm run check
```

This checks the three locale data sets and runs the production build.

## Optional Supabase connection

Copy `.env.example` to `.env.local`, add the Supabase URL and anonymous key,
then run `supabase/schema.sql` followed by `supabase/seed.sql`. The homepage
will automatically read published cities and routes and can write waitlist
signups. Never put a service-role key in the frontend environment.

See [`docs/CONTENT_BACKEND.md`](docs/CONTENT_BACKEND.md) for the full data-layer notes.
