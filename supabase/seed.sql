-- Starter content for CDQC. Run after schema.sql.
insert into public.cities (slug, sort_order, is_published) values
  ('chengdu', 1, true), ('chongqing', 2, true)
on conflict (slug) do update set is_published = excluded.is_published;

insert into public.city_translations (city_id, language_code, name, eyebrow, short_description)
select c.id, v.language_code, v.name, v.eyebrow, v.short_description
from public.cities c
join (values
  ('chengdu','en','Chengdu','Misty mornings · tea · giant panda','Slow mornings, spicy tables and ancient streets.'),
  ('chengdu','fr','Chengdu','Brumes · thé · panda géant','Matins paisibles, tables épicées et ruelles anciennes.'),
  ('chengdu','zh','成都','晨雾 · 茶 · 大熊猫','慢下来的清晨、热辣的餐桌和古老街巷。'),
  ('chongqing','en','Chongqing','Neon nights · rivers · mountain city','Rivers of light and a city built layer upon layer.'),
  ('chongqing','fr','Chongqing','Néons · rivières · ville-montagne','Rivières de lumière et ville construite sur plusieurs niveaux.'),
  ('chongqing','zh','重庆','霓虹 · 江河 · 山城','流动的灯火、层叠的高架和立体山城。')
) as v(slug, language_code, name, eyebrow, short_description) on v.slug = c.slug
on conflict (city_id, language_code) do update set name = excluded.name, eyebrow = excluded.eyebrow, short_description = excluded.short_description;

insert into public.routes (slug, duration_days, sort_order, is_published) values
  ('first-taste-of-sichuan', 3, 1, true), ('two-cities-one-week', 7, 2, true), ('after-dark-chongqing', 2, 3, true)
on conflict (slug) do update set is_published = excluded.is_published;

insert into public.route_translations (route_id, language_code, title, description)
select r.id, v.language_code, v.title, v.description
from public.routes r
join (values
  ('first-taste-of-sichuan','en','First taste of Sichuan','A compact introduction to Chengdu’s food, tea and culture.'),
  ('first-taste-of-sichuan','fr','Premiers goûts du Sichuan','Une première immersion dans la cuisine et la culture de Chengdu.'),
  ('first-taste-of-sichuan','zh','第一次品尝四川','用一段短途旅程认识成都的美食、茶与文化。'),
  ('two-cities-one-week','en','Two cities, one week','A balanced journey from Chengdu mornings to Chongqing nights.'),
  ('two-cities-one-week','fr','Deux villes en une semaine','Un voyage entre les matins de Chengdu et les nuits de Chongqing.'),
  ('two-cities-one-week','zh','一周双城之旅','从成都清晨走到重庆夜色的完整路线。'),
  ('after-dark-chongqing','en','After-dark Chongqing','Bridges, rivers, viewpoints and the city after sunset.'),
  ('after-dark-chongqing','fr','Chongqing après la nuit','Ponts, rivières et points de vue après le coucher du soleil.'),
  ('after-dark-chongqing','zh','重庆夜游路线','桥梁、江河、观景台与日落后的山城。')
) as v(slug, language_code, title, description) on v.slug = r.slug
on conflict (route_id, language_code) do update set title = excluded.title, description = excluded.description;
