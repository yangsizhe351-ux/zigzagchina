import { content, languageNames } from '../src/content.js';

const locales = Object.keys(content);
const requiredPaths = [
  'pageTitle', 'skipToContent', 'nav', 'kicker', 'title', 'intro', 'explore', 'scroll',
  'teaserKicker', 'teaserTitle', 'teaserBody', 'begin', 'sectionLabel',
  'aboutKicker', 'aboutTitle', 'aboutBody', 'aboutAction', 'aboutSections',
  'city.Chengdu.eyebrow', 'city.Chengdu.title', 'city.Chengdu.body', 'city.Chengdu.action',
  'city.Chongqing.eyebrow', 'city.Chongqing.title', 'city.Chongqing.body', 'city.Chongqing.action',
  'cityComing', 'experienceKicker', 'experienceTitle', 'experienceCards', 'experienceDetails', 'experienceDetail',
  'footerText', 'close', 'booking.kicker', 'booking.title', 'booking.body', 'booking.action',
  'booking.paymentLabel', 'booking.payment',
];
const errors = [];

function valueAtPath(value, path) {
  return path.split('.').reduce((result, key) => result?.[key], value);
}

function isPresent(value) {
  return typeof value === 'function' || (Array.isArray(value) ? value.length > 0 : Boolean(String(value ?? '').trim()));
}

function collectStrings(value, path = 'EN') {
  if (typeof value === 'string') return [{ path, value }];
  if (Array.isArray(value)) return value.flatMap((item, index) => collectStrings(item, `${path}[${index}]`));
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([key, item]) => collectStrings(item, `${path}.${key}`));
  return [];
}

for (const path of requiredPaths) {
  for (const locale of locales) {
    if (!isPresent(valueAtPath(content[locale], path))) errors.push(`${locale}.${path} is missing`);
  }
}

for (const { path, value } of collectStrings(content.EN)) {
  if (/\p{Script=Han}/u.test(value)) errors.push(`${path} contains Chinese characters`);
}

for (const { path, value } of collectStrings(languageNames.EN, 'languageNames.EN')) {
  if (/\p{Script=Han}/u.test(value)) errors.push(`${path} contains Chinese characters`);
}

const reference = content.EN;
for (const locale of locales) {
  if (content[locale].nav.length !== reference.nav.length) errors.push(`${locale}.nav has a different length`);
  if (content[locale].experienceCards.length !== reference.experienceCards.length) errors.push(`${locale}.experienceCards has a different length`);
  if (content[locale].experienceDetails.length !== content[locale].experienceCards.length) errors.push(`${locale}.experienceDetails has a different length`);
  for (const field of ['title', 'teaserTitle', 'experienceTitle']) {
    if (content[locale][field].length !== 2) errors.push(`${locale}.${field} must contain two lines`);
  }
  if (content[locale].booking.title.length !== 2) errors.push(`${locale}.booking.title must contain two lines`);
  for (const [index, card] of content[locale].experienceCards.entries()) {
    if (!Array.isArray(card) || card.length !== 3 || card.some((value) => !String(value).trim())) errors.push(`${locale}.experienceCards[${index}] is incomplete`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Content check passed: ${locales.length} locales, ${reference.nav.length} navigation items, ${reference.experienceCards.length} experiences.`);
