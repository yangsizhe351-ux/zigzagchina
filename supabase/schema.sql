-- CDQC content foundation. Run in a Supabase SQL editor when the project is created.
create extension if not exists "pgcrypto";

create table if not exists public.cities (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  country text not null default 'China',
  sort_order int not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.city_translations (
  id uuid primary key default gen_random_uuid(),
  city_id uuid not null references public.cities(id) on delete cascade,
  language_code text not null check (language_code in ('en', 'fr', 'zh')),
  name text not null,
  eyebrow text,
  short_description text,
  long_description text,
  unique(city_id, language_code)
);

create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references public.cities(id) on delete set null,
  slug text unique not null,
  category text not null check (category in ('food', 'culture', 'nature', 'nightlife', 'shopping', 'practical')),
  cover_media_id uuid,
  sort_order int not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.experience_translations (
  id uuid primary key default gen_random_uuid(),
  experience_id uuid not null references public.experiences(id) on delete cascade,
  language_code text not null check (language_code in ('en', 'fr', 'zh')),
  title text not null,
  description text,
  address text,
  opening_info text,
  unique(experience_id, language_code)
);

create table if not exists public.routes (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  duration_days int,
  sort_order int not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.route_translations (
  id uuid primary key default gen_random_uuid(),
  route_id uuid not null references public.routes(id) on delete cascade,
  language_code text not null check (language_code in ('en', 'fr', 'zh')),
  title text not null,
  description text,
  unique(route_id, language_code)
);

create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  storage_path text not null,
  alt_text text,
  credit text,
  width int,
  height int,
  created_at timestamptz not null default now()
);

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'cdqc-homepage',
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_signups_email_unique on public.waitlist_signups (lower(email));

alter table public.experiences
  add constraint experiences_cover_media_fk foreign key (cover_media_id) references public.media(id) on delete set null;

-- Safe public read policy for published travel content. Editing stays private until auth is added.
alter table public.cities enable row level security;
alter table public.city_translations enable row level security;
alter table public.experiences enable row level security;
alter table public.experience_translations enable row level security;
alter table public.routes enable row level security;
alter table public.route_translations enable row level security;
alter table public.media enable row level security;
alter table public.waitlist_signups enable row level security;

create policy "published cities are readable" on public.cities for select using (is_published = true);
create policy "published city translations are readable" on public.city_translations for select using (exists (select 1 from public.cities c where c.id = city_id and c.is_published = true));
create policy "published experiences are readable" on public.experiences for select using (is_published = true);
create policy "published experience translations are readable" on public.experience_translations for select using (exists (select 1 from public.experiences e where e.id = experience_id and e.is_published = true));
create policy "published routes are readable" on public.routes for select using (is_published = true);
create policy "published route translations are readable" on public.route_translations for select using (exists (select 1 from public.routes r where r.id = route_id and r.is_published = true));
create policy "media is readable" on public.media for select using (true);
create policy "public can join waitlist" on public.waitlist_signups for insert with check (char_length(email) between 3 and 320);
