# CDQC content backend

The page currently uses `src/content.js` as a safe local fallback. The optional
`src/lib/contentRepository.js` switches to Supabase automatically when these
variables exist:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

To connect the real backend:

1. Create a Supabase project.
2. Run `supabase/schema.sql`.
3. Run `supabase/seed.sql`.
4. Copy `.env.example` to `.env.local` and fill in the project URL and anon key.
5. Restart Vite. `src/main.jsx` already calls `getPublishedContent()` whenever the language changes.
6. Open the browser console and confirm there is no `CDQC content fallback` warning. If the tables are reachable, the source is Supabase; if not, the page safely keeps the local translations.

The same schema creates `waitlist_signups`. The homepage writes only an email,
the source label, and the database timestamp through the public insert policy;
there is no public read policy for those signups.

The public site only reads published rows. Editing permissions remain private
until an authenticated admin surface is added.

The current public read path intentionally does not expose a service-role key.
The next backend milestone is an authenticated content editor or a protected
seed/update workflow; it should not be implemented with a client-side secret.
