import { content, languageNames } from '../src/content.js';

const locales = Object.keys(content);
const required = ['nav', 'title', 'city', 'routes', 'routeDetails', 'experienceCards', 'practicalCards', 'proofStats', 'waitlistTitle', 'waitlistBody', 'waitlistPlaceholder', 'waitlistButton', 'waitlistSuccess', 'skipToContent', 'booking'];
const errors = [];

function collectStrings(value, path = 'EN') {
  if (typeof value === 'string') return [{ path, value }];
  if (Array.isArray(value)) return value.flatMap((item, index) => collectStrings(item, `${path}[${index}]`));
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([key, item]) => collectStrings(item, `${path}.${key}`));
  return [];
}

for (const field of required) {
  for (const locale of locales) {
    if (!content[locale][field]) errors.push(`${locale}.${field} is missing`);
  }
}

for (const { path, value } of collectStrings(content.EN)) {
  if (/\p{Script=Han}/u.test(value)) errors.push(`${path} contains Chinese characters`);
}

for (const { path, value } of collectStrings(languageNames.EN, 'languageNames.EN')) {
  if (/\p{Script=Han}/u.test(value)) errors.push(`${path} contains Chinese characters`);
}

for (const locale of locales) {
  if (!content[locale].booking.paymentLabel) errors.push(`${locale}.booking.paymentLabel is missing`);
}

const reference = content.EN;
for (const locale of locales) {
  if (content[locale].nav.length !== reference.nav.length) errors.push(`${locale}.nav has a different length`);
  if (content[locale].routes.length !== reference.routes.length) errors.push(`${locale}.routes has a different length`);
  if (content[locale].routeDetails.length !== reference.routeDetails.length) errors.push(`${locale}.routeDetails has a different length`);
  if (content[locale].experienceCards.length !== reference.experienceCards.length) errors.push(`${locale}.experienceCards has a different length`);
  if (content[locale].practicalCards.length !== reference.practicalCards.length) errors.push(`${locale}.practicalCards has a different length`);
  for (const [index, card] of content[locale].practicalCards.entries()) {
    if (!Array.isArray(card) || card.length < 2 || card.some((value) => !String(value).trim())) errors.push(`${locale}.practicalCards[${index}] is incomplete`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Content check passed: ${locales.length} locales, ${reference.routes.length} routes, ${reference.experienceCards.length} experiences.`);
