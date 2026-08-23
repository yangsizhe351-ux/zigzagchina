import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import heroImage from '../assets/images/cdqc-hero-clean.jpg';
import cityChengduImage from '../assets/images/cdqc-city-chengdu.png';
import cityChongqingImage from '../assets/images/cdqc-city-chongqing.png';
import teaImage from '../assets/images/cdqc-experience-tea.png';
import pandaImage from '../assets/images/cdqc-experience-panda.png';
import hotpotImage from '../assets/images/cdqc-experience-hotpot.png';
import nightscapeImage from '../assets/images/cdqc-experience-nightscape.png';
import zigzagLogo from '../assets/brand/zigzag-logo.svg';
import { content, languages } from './content';
import { getPublishedContent } from './lib/contentRepository';
import './styles.css';

const cities = [
  { name: 'Chengdu', eyebrow: 'Misty mornings · tea · giant panda', tone: 'jade' },
  { name: 'Chongqing', eyebrow: 'Neon nights · rivers · mountain city', tone: 'ember' },
];

const experienceImages = [teaImage, pandaImage, hotpotImage, nightscapeImage];

function App() {
  const [activeCity, setActiveCity] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [menuOpen, setMenuOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(null);
  const [guideOpen, setGuideOpen] = useState(null);
  const [routeOpen, setRouteOpen] = useState(null);
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
    image.src = heroImage;
    const onMove = (event) => setCursor({ x: (event.clientX / window.innerWidth - .5) * 2, y: (event.clientY / window.innerHeight - .5) * 2 });
    const onKey = (event) => { if (event.key === 'Escape') { setMenuOpen(false); setLanguageOpen(false); setExperienceOpen(null); setGuideOpen(null); setRouteOpen(null); } };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('pointermove', onMove); window.removeEventListener('keydown', onKey); image.onload = null; image.onerror = null; };
  }, []);

  const jumpTo = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const chooseCity = (city) => { setActiveCity(city); jumpTo('experiences'); };

  return (
    <main id="top" className={`${scrolled ? 'page is-scrolled' : 'page'} ${loaded ? 'is-loaded' : ''}`}>
      <a className="skip-link" href="#destinations">{t.skipToContent}</a>
      {!loaded && <div className="loader"><img src={zigzagLogo} alt="ZigZag" /><i /></div>}
      <section className="hero" aria-label="Discover Chengdu and Chongqing">
        <div className="hero-media" style={{ backgroundImage: `url(${heroImage})`, '--mx': `${cursor.x * 10}px`, '--my': `${cursor.y * 8}px` }} />
        <div className="hero-split" />
        <div className="hero-shade" />
        <header className="site-header">
          <a className="brand-mark" href="#top" aria-label="ZigZag home"><img src={zigzagLogo} alt="ZigZag" /></a>
          <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
          <nav className="nav-links" aria-label="Main navigation">
            {t.nav.map((item, index) => <a href={['#destinations', '#experiences', '#plan', '#guide'][index]} key={item}>{item}</a>)}
          </nav>
          <div className="header-actions"><div className="language-wrap"><button className="language-button" aria-expanded={languageOpen} onClick={() => setLanguageOpen(!languageOpen)} aria-label="Choose language">{language} <span>⌄</span></button>{languageOpen && <div className="language-menu">{languages.map(({ code, label }) => <button key={code} onClick={() => { setLanguage(code); setLanguageOpen(false); }}>{code}<span>{label}</span></button>)}</div>}</div></div>
        </header>
        {menuOpen && <div className="mobile-menu">{t.nav.map((item, index) => <button key={item} onClick={() => jumpTo(['destinations', 'experiences', 'plan', 'guide'][index])}>{item} <span>0{index + 1}</span></button>)}</div>}
        <div className="hero-copy">
          <p className="kicker">{t.kicker} <span className="kicker-dot" /></p>
          <h1>{t.title[0]}<br /><em>{t.title[1]}</em></h1>
          <p className="intro">{t.intro}</p>
          <div className="city-actions">
            {cities.map((city) => (
                <button key={city.name} className={`city-card ${city.tone}`} onClick={() => chooseCity(city.name)}>
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

      <section className="teaser" id="destinations">
        <div className="teaser-heading"><p className="kicker">{t.teaserKicker}</p><h2>{t.teaserTitle[0]}<br /><em>{t.teaserTitle[1]}</em></h2></div>
        <div className="teaser-copy"><p>{t.teaserBody}</p><a href="#experiences">{t.begin} <span>↗</span></a></div>
      </section>

      <section className="proof-section">
        <div className="proof-copy"><p className="kicker">{t.proofKicker}</p><h2>{t.proofTitle[0]}<br /><em>{t.proofTitle[1]}</em></h2><p>{t.proofBody}</p><a href="#plan" className="proof-action">{t.proofAction} <span>↗</span></a></div>
        <div className="proof-stats">{t.proofStats.map(([value, label]) => <div className="proof-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="city-strip" id="experiences">
        <div className="section-label">{t.sectionLabel}</div>
        <div className="city-panel jade-panel" id="city-chengdu" style={{ '--panel-image': `url(${cityChengduImage})` }}><span className="panel-index">01</span><h3>{t.city.Chengdu.title}</h3><p>{t.city.Chengdu.body}</p><button onClick={() => setActiveCity('Chengdu')}>{t.city.Chengdu.action} <b>↗</b></button></div>
        <div className="city-panel ember-panel" id="city-chongqing" style={{ '--panel-image': `url(${cityChongqingImage})` }}><span className="panel-index">02</span><h3>{t.city.Chongqing.title}</h3><p>{t.city.Chongqing.body}</p><button onClick={() => setActiveCity('Chongqing')}>{t.city.Chongqing.action} <b>↗</b></button></div>
      </section>

      <section className="experience-section">
        <div className="experience-heading"><p className="kicker">{t.experienceKicker}</p><h2>{t.experienceTitle[0]}<br /><em>{t.experienceTitle[1]}</em></h2></div>
        <div className="experience-grid">{t.experienceCards.map(([title, city, index], cardIndex) => <button className={`experience-card experience-${cardIndex + 1}`} style={{ '--experience-image': `url(${experienceImages[cardIndex]})` }} key={title} onClick={() => setExperienceOpen({ title, city, index })}><span>{index}</span><strong>{title}</strong><small>{city}</small><i>↗</i></button>)}</div>
      </section>

      <section className="practical-section" id="guide">
        <div className="practical-heading"><p className="kicker">{t.practicalKicker}</p><h2>{t.practicalTitle[0]}<br /><em>{t.practicalTitle[1]}</em></h2></div>
        <div className="practical-list">{t.practicalCards.map(([title, body], index) => <button className="practical-item" key={title} onClick={() => setGuideOpen({ title, body, index })}><span>0{index + 1}</span><div><strong>{title}</strong><p>{body}</p></div><i>↗</i></button>)}</div>
      </section>

      <section className="route-section" id="plan">
        <div id="plan"><p className="kicker">{t.routeKicker}</p><h2>{t.routeTitle[0]}<br /><em>{t.routeTitle[1]}</em></h2></div>
        <div className="route-list">
          {t.routes.map((route, index) => <button className="route-item" key={route} onClick={() => setRouteOpen({ route, index })}><span>0{index + 1}</span><strong>{route}</strong><i>↗</i></button>)}
          <a className="all-routes" href="#guide">{t.viewRoutes} <span>→</span></a>
        </div>
      </section>

      <section className="booking-section" id="booking"><div><p className="kicker">{t.booking.kicker}</p><h2>{t.booking.title[0]}<br /><em>{t.booking.title[1]}</em></h2></div><div className="booking-copy"><p>{t.booking.body}</p><a href="mailto:yangsizhe351@gmail.com?subject=ZigZag%20private%20guide%20request" className="booking-action">{t.booking.action} <span>↗</span></a><div className="payment-placeholder"><small>Payment</small><strong>{t.booking.payment}</strong></div></div></section>
      <footer className="site-footer" id="contact"><div><strong>ZigZag</strong><p>{t.footerText}</p></div><a href="mailto:yangsizhe351@gmail.com?subject=ZigZag%20private%20guide%20request">{t.booking.action} <span>↗</span></a><small>© 2026 ZigZag</small></footer>

      {experienceOpen && <div className="experience-modal" role="dialog" aria-modal="true"><button className="modal-backdrop" aria-label={t.close} onClick={() => setExperienceOpen(null)} /><article className={`modal-card experience-${experienceOpen.index}`}><button className="modal-close" onClick={() => setExperienceOpen(null)}>×</button><span className="modal-index">{experienceOpen.index}</span><small>{experienceOpen.city}</small><h3>{experienceOpen.title}</h3><p>{t.experienceDetail}</p><button className="modal-action" onClick={() => setExperienceOpen(null)}>{t.explore} <b>↗</b></button></article></div>}
      {guideOpen && <div className="experience-modal guide-modal" role="dialog" aria-modal="true"><button className="modal-backdrop" aria-label={t.close} onClick={() => setGuideOpen(null)} /><article className="modal-card guide-card"><button className="modal-close" onClick={() => setGuideOpen(null)}>×</button><span className="modal-index">0{guideOpen.index + 1}</span><small>{t.practicalKicker}</small><h3>{guideOpen.title}</h3><p>{guideOpen.body}</p><button className="modal-action" onClick={() => { setGuideOpen(null); jumpTo('plan'); }}>{t.footerAction} <b>↗</b></button></article></div>}
      {routeOpen && <div className="experience-modal route-modal" role="dialog" aria-modal="true"><button className="modal-backdrop" aria-label={t.close} onClick={() => setRouteOpen(null)} /><article className="modal-card route-card"><button className="modal-close" onClick={() => setRouteOpen(null)}>×</button><span className="modal-index">0{routeOpen.index + 1}</span><small>{t.routeKicker}</small><h3>{routeOpen.route}</h3><p>{t.routeDetails?.[routeOpen.index] || t.routeKicker}</p><button className="modal-action" onClick={() => setRouteOpen(null)}>{t.explore} <b>↗</b></button></article></div>}

      {activeCity && <div className="toast" role="status">{t.cityComing(t.city[activeCity].title)} <button onClick={() => setActiveCity(null)}>×</button></div>}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
