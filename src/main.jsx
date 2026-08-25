import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import heroImage from '../assets/images/cdqc-hero-clean.jpg';
import cityChengduImage from '../assets/images/webp/cdqc-city-chengdu.webp';
import cityChongqingImage from '../assets/images/webp/cdqc-city-chongqing.webp';
import teaImage from '../assets/images/webp/cdqc-experience-tea.webp';
import pandaImage from '../assets/images/webp/cdqc-experience-panda.webp';
import hotpotImage from '../assets/images/webp/cdqc-experience-hotpot.webp';
import nightscapeImage from '../assets/images/webp/cdqc-experience-nightscape.webp';
import teaLaneImage from '../assets/images/generated/cdqc-tea-lane.jpg';
import chongqingHillsideImage from '../assets/images/generated/cdqc-chongqing-hillside-night.jpg';
import sichuanTableImage from '../assets/images/generated/cdqc-sichuan-table.jpg';
import zigzagMark from '../assets/brand/zigzag-mark-new.png';
import { content, languages, languageNames } from './content';
import { getPublishedContent } from './lib/contentRepository';
import './styles.css';

const cities = [
  { name: 'Chengdu', eyebrow: 'Misty mornings · tea · giant panda', tone: 'jade' },
  { name: 'Chongqing', eyebrow: 'Neon nights · rivers · mountain city', tone: 'ember' },
];
const navAnchors = ['#about', '#destinations', '#experiences', '#booking'];

const resolveAssetUrl = (asset) => typeof asset === 'string' ? asset : asset?.src || asset?.default?.src || asset?.default || '';
const heroImageUrl = resolveAssetUrl(heroImage);
const cityChengduImageUrl = resolveAssetUrl(cityChengduImage);
const cityChongqingImageUrl = resolveAssetUrl(cityChongqingImage);
const hotpotImageUrl = resolveAssetUrl(hotpotImage);
const nightscapeImageUrl = resolveAssetUrl(nightscapeImage);
const teaLaneImageUrl = resolveAssetUrl(teaLaneImage);
const chongqingHillsideImageUrl = resolveAssetUrl(chongqingHillsideImage);
const sichuanTableImageUrl = resolveAssetUrl(sichuanTableImage);
const zigzagMarkUrl = resolveAssetUrl(zigzagMark);
const experienceImages = [teaImage, pandaImage, hotpotImage, nightscapeImage].map(resolveAssetUrl);

function BrandLockup() {
  return <><img src={zigzagMarkUrl} alt="" aria-hidden="true" /><span>ZigZag China</span></>;
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [menuOpen, setMenuOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(null);
  const [bookingSubject, setBookingSubject] = useState('ZigZag China private guide request');
  const [contentData, setContentData] = useState(content);
  const t = contentData[language];
  useEffect(() => {
    document.documentElement.lang = language === '中' ? 'zh-CN' : language === 'FR' ? 'fr' : 'en';
    document.title = t.pageTitle;
    localStorage.setItem('cdqc-language', language);
  }, [language, t.pageTitle]);

  useEffect(() => {
    let active = true;
    const apiLanguage = language === '中' ? 'zh' : language.toLowerCase();
    getPublishedContent(apiLanguage).then((result) => {
      if (active && result.content) setContentData(result.content);
    });
    return () => { active = false; };
  }, [language]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    const image = new Image();
    image.onload = () => setLoaded(true);
    image.onerror = () => setLoaded(true);
    image.src = heroImageUrl;
    const onMove = (event) => setCursor({ x: (event.clientX / window.innerWidth - .5) * 2, y: (event.clientY / window.innerHeight - .5) * 2 });
    const onKey = (event) => { if (event.key === 'Escape') { setMenuOpen(false); setLanguageOpen(false); setExperienceOpen(null); } };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('pointermove', onMove); window.removeEventListener('keydown', onKey); image.onload = null; image.onerror = null; };
  }, []);

  const jumpTo = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const openCityExperience = (city) => {
    const cardIndex = city === 'Chengdu' ? 0 : 2;
    const [title, cityLabel, index] = t.experienceCards[cardIndex];
    setExperienceOpen({ title, city: cityLabel, index, image: experienceImages[cardIndex], detail: t.experienceDetails[cardIndex] });
  };

  const openExperience = (title, city, index, image, detail) => setExperienceOpen({ title, city, index, image, detail });

  const requestExperience = () => {
    setBookingSubject(`ZigZag China private guide request — ${experienceOpen.title}`);
    setExperienceOpen(null);
    jumpTo('booking');
  };

  const bookingHref = `mailto:yangsizhe351@gmail.com?subject=${encodeURIComponent(bookingSubject)}`;

  return (
    <main id="top" className={`${scrolled ? 'page is-scrolled' : 'page'} ${loaded ? 'is-loaded' : ''}`}>
      <a className="skip-link" href="#destinations">{t.skipToContent}</a>
      {!loaded && <div className="loader"><div className="loader-brand" role="img" aria-label="ZigZag China"><BrandLockup /></div><i /></div>}
      <section className="hero" aria-label="Discover Chengdu and Chongqing">
        <div className="hero-media" style={{ backgroundImage: `url(${heroImageUrl})`, '--mx': `${cursor.x * 10}px`, '--my': `${cursor.y * 8}px` }} />
        <div className="hero-split" />
        <div className="hero-shade" />
        <header className="site-header">
          <a className="brand-mark" href="#top" aria-label="ZigZag China home"><BrandLockup /></a>
          <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
          <nav className="nav-links" aria-label="Main navigation">
            {t.nav.map((item, index) => <a href={navAnchors[index]} key={item}>{item}</a>)}
          </nav>
          <div className="header-actions"><div className="language-wrap"><button className="language-button" aria-expanded={languageOpen} onClick={() => setLanguageOpen(!languageOpen)} aria-label="Choose language">{languages.find(({ code }) => code === language)?.short} <span>⌄</span></button>{languageOpen && <div className="language-menu">{languages.map(({ code, short }) => <button key={code} onClick={() => { setLanguage(code); setLanguageOpen(false); }}>{short}<span>{languageNames[language][code]}</span></button>)}</div>}</div></div>
        </header>
        {menuOpen && <div className="mobile-menu">{t.nav.map((item, index) => <button key={item} onClick={() => jumpTo(navAnchors[index].slice(1))}>{item} <span>0{index + 1}</span></button>)}</div>}
        <div className="hero-copy">
          <p className="kicker">{t.kicker} <span className="kicker-dot" /></p>
          <h1>{t.title[0]}<br /><em>{t.title[1]}</em></h1>
          <p className="intro">{t.intro}</p>
          <div className="city-actions">
            {cities.map((city) => (
                <button key={city.name} className={`city-card ${city.tone}`} onClick={() => openCityExperience(city.name)}>
                <span className="city-name">{t.city[city.name].title}</span>
                <span className="city-line" />
                <span className="city-detail">{t.city[city.name].eyebrow}</span>
                <span className="city-cta">{t.explore} <b>↗</b></span>
              </button>
            ))}
          </div>
        </div>
        <div className="scroll-note"><span className="scroll-line" />{t.scroll}</div>
      </section>

      <section className="about-section" id="about">
        <div className="about-heading"><p className="kicker">{t.aboutKicker}</p><h2>{t.aboutTitle[0]}<br /><em>{t.aboutTitle[1]}</em></h2></div>
        <div className="about-copy">{t.aboutSections.map(([title, body]) => <article className="about-block" key={title}><h3>{title}</h3><p>{body}</p></article>)}<a href="#destinations">{t.aboutAction} <span>↗</span></a></div>
      </section>

      <section className="teaser" id="destination-intro" style={{ '--section-image': `url(${teaLaneImageUrl})` }}>
        <div className="teaser-heading"><p className="kicker">{t.teaserKicker}</p><h2>{t.teaserTitle[0]}<br /><em>{t.teaserTitle[1]}</em></h2></div>
        <div className="teaser-copy"><p>{t.teaserBody}</p><a href="#destinations">{t.begin} <span>↗</span></a></div>
      </section>

      <section className="city-strip" id="destinations">
        <div className="section-label">{t.sectionLabel}</div>
        <div className="city-panel jade-panel" id="city-chengdu" style={{ '--panel-image': `url(${cityChengduImageUrl})` }}><span className="panel-index">01</span><h3>{t.city.Chengdu.title}</h3><p>{t.city.Chengdu.body}</p><button onClick={() => openCityExperience('Chengdu')}>{t.city.Chengdu.action} <b>↗</b></button></div>
        <div className="city-panel ember-panel" id="city-chongqing" style={{ '--panel-image': `url(${cityChongqingImageUrl})` }}><span className="panel-index">02</span><h3>{t.city.Chongqing.title}</h3><p>{t.city.Chongqing.body}</p><button onClick={() => openCityExperience('Chongqing')}>{t.city.Chongqing.action} <b>↗</b></button></div>
      </section>

      <section className="experience-section" id="experiences" style={{ '--section-image': `url(${chongqingHillsideImageUrl})` }}>
        <div className="experience-heading"><p className="kicker">{t.experienceKicker}</p><h2>{t.experienceTitle[0]}<br /><em>{t.experienceTitle[1]}</em></h2></div>
        <div className="experience-grid">{t.experienceCards.map(([title, city, index], cardIndex) => <button className={`experience-card experience-${cardIndex + 1}`} style={{ '--experience-image': `url(${experienceImages[cardIndex]})` }} key={title} onClick={() => openExperience(title, city, index, experienceImages[cardIndex], t.experienceDetails[cardIndex])}><span>{index}</span><strong>{title}</strong><small>{city}</small><i>↗</i></button>)}</div>
      </section>

      <section className="booking-section" id="booking" style={{ '--section-image': `url(${sichuanTableImageUrl})` }}><div><p className="kicker">{t.booking.kicker}</p><h2>{t.booking.title[0]}<br /><em>{t.booking.title[1]}</em></h2></div><div className="booking-copy"><p>{t.booking.body}</p><a href={bookingHref} className="booking-action">{t.booking.action} <span>↗</span></a><div className="payment-placeholder"><small>{t.booking.paymentLabel}</small><strong>{t.booking.payment}</strong></div></div></section>
      <footer className="site-footer" id="contact"><div><strong>ZigZag China</strong><p>{t.footerText}</p></div><a href={bookingHref}>{t.booking.action} <span>↗</span></a><small>© 2026 ZigZag China</small></footer>

      {experienceOpen && <div className="experience-modal" role="dialog" aria-modal="true"><button className="modal-backdrop" aria-label={t.close} onClick={() => setExperienceOpen(null)} /><article className="modal-card" style={{ '--modal-image': `url(${experienceOpen.image})` }}><button className="modal-close" aria-label={t.close} onClick={() => setExperienceOpen(null)}>×</button><span className="modal-index">{experienceOpen.index}</span><small>{experienceOpen.city}</small><h3>{experienceOpen.title}</h3><p>{experienceOpen.detail}</p><button className="modal-action" onClick={requestExperience}>{t.booking.action} <b>↗</b></button></article></div>}
    </main>
  );
}

export default App;

if (typeof document !== 'undefined' && document.getElementById('root')) {
  createRoot(document.getElementById('root')).render(<App />);
}
