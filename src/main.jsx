import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot, hydrateRoot } from 'react-dom/client';
import heroImage from '../assets/images/cdqc-hero-panda-city.png';
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
const credentialDetails = {
  legalOperator: '重庆渝养恬年文化旅游有限公司',
  legalRepresentative: '阳书美',
  permitNumber: 'L-CQ-101179',
};
const englishAboutPageTitle = 'About ZigZag China | Private Guides in Chengdu & Chongqing';

function BrandLockup() {
  return <><img src={zigzagMarkUrl} alt="" aria-hidden="true" /><span>ZigZag China</span></>;
}

function SiteHeader({ t, language, setLanguage, languageOpen, setLanguageOpen, menuOpen, setMenuOpen, innerPage = false }) {
  const navLinks = innerPage ? ['/about', '/#destinations', '/#booking', '/#contact'] : ['/about', '#destinations', '#booking', '#contact'];
  return <>
    <header className={`site-header ${innerPage ? 'inner-page-header' : ''}`}>
      <a className="brand-mark" href={innerPage ? '/' : '#top'} aria-label={t.a11y.home}><BrandLockup /></a>
      <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className="nav-links" aria-label={t.a11y.mainNav}>
        {t.nav.map((item, index) => <a href={navLinks[index]} key={item}>{item}</a>)}
      </nav>
      <div className="header-actions"><div className="language-wrap"><button className="language-button" aria-expanded={languageOpen} onClick={() => setLanguageOpen(!languageOpen)} aria-label={t.a11y.chooseLanguage}>{languages.find(({ code }) => code === language)?.short} <span>⌄</span></button>{languageOpen && <div className="language-menu">{languages.map(({ code, short }) => <button key={code} onClick={() => { setLanguage(code); setLanguageOpen(false); }}>{short}<span>{languageNames[language][code]}</span></button>)}</div>}</div></div>
    </header>
    {menuOpen && <div className={`mobile-menu ${innerPage ? 'inner-page-menu' : ''}`}>{t.nav.map((item, index) => <a href={navLinks[index]} key={item} onClick={() => setMenuOpen(false)}>{item} <span>0{index + 1}</span></a>)}</div>}
  </>;
}

function SiteFooter({ t, bookingHref }) {
  return <footer className="site-footer" id="contact">
    <div className="footer-brand"><strong>ZigZag China</strong><p>{t.footerText}</p></div>
    <div className="footer-credentials">
      <p className="footer-licence">{t.credentials.footerLicence}</p>
      <p>{t.credentials.operatorLabel}: {credentialDetails.legalOperator}</p>
      <p>{t.credentials.representativeLabel}: {credentialDetails.legalRepresentative}</p>
      <a href="/business-credentials">{t.credentials.credentialsLink} <span>↗</span></a>
    </div>
    <a className="footer-booking" href={bookingHref}>{t.booking.action} <span>↗</span></a>
    <small>© 2026 ZigZag China</small>
  </footer>;
}

function AboutPageContent({ t }) {
  return <>
    <section className="about-page-layout">
      <div className="about-page-intro">
        <p className="kicker">{t.aboutKicker}</p>
        <h1>{t.aboutTitle[0]}<br /><em>{t.aboutTitle[1]}</em></h1>
      </div>
      <section className="about-page-sections" aria-label={t.aboutKicker}>
        {t.aboutSections.map(([title, body]) => {
          const brand = 'ZigZag China';
          const hasBrandLead = body.startsWith(brand);
          return <article className="about-page-block" key={title}><h2>{title}</h2><p>{hasBrandLead ? <><strong className="about-brand-lead">{brand}</strong>{body.slice(brand.length)}</> : body}</p></article>;
        })}
      </section>
    </section>
    <div className="about-page-action"><a href="/#destinations">{t.aboutAction} <span>↗</span></a></div>
  </>;
}

function CredentialsPageContent({ t }) {
  const details = [
    [t.credentials.operatorLabel, credentialDetails.legalOperator],
    [t.credentials.permitNumberLabel, credentialDetails.permitNumber],
    [t.credentials.scopeLabel, t.credentials.scope],
    [t.credentials.representativeLabel, credentialDetails.legalRepresentative],
  ];

  return <>
    <section className="credentials-page-layout">
      <div className="credentials-hero">
        <div>
          <p className="kicker">{t.credentials.kicker}</p>
          <h1>{t.credentials.title[0]}<br /><em>{t.credentials.title[1]}</em></h1>
          <p className="credentials-intro">{t.credentials.intro}</p>
        </div>
        <aside className="credential-badge" aria-label={t.credentials.licenseType}>
          <span>{t.credentials.licenseType}</span>
          <strong>{credentialDetails.permitNumber}</strong>
          <small>{t.credentials.scope}</small>
        </aside>
      </div>
      <section className="credentials-details" aria-label={t.credentials.detailsLabel}>
        {details.map(([label, value]) => <article key={label}><small>{label}</small><p>{value}</p></article>)}
      </section>
    </section>
    <section className="credentials-privacy">
      <div><p className="kicker">{t.credentials.privacyKicker}</p><h2>{t.credentials.privacyTitle}</h2></div>
      <div><p>{t.credentials.privacyBody}</p><a href="https://zwfw.mct.gov.cn/" target="_blank" rel="noreferrer">{t.credentials.verificationLink} <span>↗</span></a></div>
    </section>
  </>;
}

function App({ initialPath = '/' }) {
  const pageRef = useRef(null);
  const heroMediaRef = useRef(null);
  const modalRef = useRef(null);
  const returnFocusRef = useRef(null);
  const pointerFrameRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [languageReady, setLanguageReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [cityFilter, setCityFilter] = useState(null);
  const [contentData, setContentData] = useState(content);
  const t = contentData[language];
  const currentPath = typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') || '/' : initialPath;
  const aboutPage = currentPath === '/about';
  const credentialsPage = currentPath === '/business-credentials';
  const innerPage = aboutPage || credentialsPage;
  const pageTitle = credentialsPage ? t.credentials.pageTitle : aboutPage ? language === 'EN' ? englishAboutPageTitle : `${t.aboutKicker} | ZigZag China` : t.pageTitle;
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('cdqc-language');
      if (languages.some(({ code }) => code === saved)) setLanguage(saved);
    } catch {
      document.documentElement.removeAttribute('data-language-pending');
    } finally {
      setLanguageReady(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === '中' ? 'zh-CN' : language === 'FR' ? 'fr' : 'en';
    document.title = pageTitle;
  }, [language, pageTitle]);

  useEffect(() => {
    if (!languageReady) return;
    try {
      localStorage.setItem('cdqc-language', language);
    } catch {
      // Language still applies for this visit when browser storage is unavailable.
    } finally {
      document.documentElement.removeAttribute('data-language-pending');
    }
  }, [language, languageReady]);

  useEffect(() => {
    if (!languageReady) return undefined;
    let active = true;
    const apiLanguage = language === '中' ? 'zh' : language.toLowerCase();
    getPublishedContent(apiLanguage).then((result) => {
      if (active && result.content) setContentData(result.content);
    });
    return () => { active = false; };
  }, [language, languageReady]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setLanguageOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!experienceOpen) return undefined;
    const page = pageRef.current;
    const previousOverflow = document.body.style.overflow;
    page?.setAttribute('inert', '');
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => modalRef.current?.querySelector('.modal-close')?.focus());
    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setExperienceOpen(null);
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...(modalRef.current?.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])') || [])];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', onKey);
      page?.removeAttribute('inert');
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [experienceOpen]);

  useEffect(() => {
    if (innerPage) {
      setLoaded(true);
      return undefined;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    const image = new Image();
    image.onload = () => setLoaded(true);
    image.onerror = () => setLoaded(true);
    image.src = heroImageUrl;
    const onMove = (event) => {
      if (pointerFrameRef.current) return;
      pointerFrameRef.current = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - .5) * 20;
        const y = (event.clientY / window.innerHeight - .5) * 16;
        heroMediaRef.current?.style.setProperty('--mx', `${x}px`);
        heroMediaRef.current?.style.setProperty('--my', `${y}px`);
        pointerFrameRef.current = null;
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('pointermove', onMove); if (pointerFrameRef.current) window.cancelAnimationFrame(pointerFrameRef.current); image.onload = null; image.onerror = null; };
  }, [innerPage]);

  const jumpTo = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const exploreCity = (city) => {
    setCityFilter(city);
    window.requestAnimationFrame(() => jumpTo('experiences'));
  };

  const openExperience = (title, city, index, image, detail) => {
    returnFocusRef.current = document.activeElement;
    setExperienceOpen({ title, city, index, image, detail });
  };

  const requestExperience = () => {
    setSelectedExperience(experienceOpen.title);
    setExperienceOpen(null);
    window.requestAnimationFrame(() => jumpTo('booking'));
  };

  const bookingSubject = selectedExperience ? `ZigZag China private guide request — ${selectedExperience}` : 'ZigZag China private guide request';
  const bookingHref = `mailto:yangsizhe351@gmail.com?subject=${encodeURIComponent(bookingSubject)}`;
  const visibleExperiences = t.experienceCards
    .map((card, cardIndex) => ({ card, cardIndex }))
    .filter(({ cardIndex }) => !cityFilter || (cityFilter === 'Chengdu' ? cardIndex < 2 : cardIndex >= 2));
  const experienceModal = experienceOpen ? createPortal(
    <div className="experience-modal">
      <button className="modal-backdrop" aria-label={t.close} onClick={() => setExperienceOpen(null)} />
      <article ref={modalRef} className="modal-card" role="dialog" aria-modal="true" aria-labelledby="experience-modal-title" aria-describedby="experience-modal-description" style={{ '--modal-image': `url(${experienceOpen.image})` }}>
        <button className="modal-close" aria-label={t.close} onClick={() => setExperienceOpen(null)}>×</button>
        <span className="modal-index">{experienceOpen.index}</span>
        <small>{experienceOpen.city}</small>
        <h3 id="experience-modal-title">{experienceOpen.title}</h3>
        <p id="experience-modal-description">{experienceOpen.detail}</p>
        <button className="modal-action" onClick={requestExperience}>{t.booking.action} <b>↗</b></button>
      </article>
    </div>,
    document.body,
  ) : null;

  if (aboutPage) {
    return <div ref={pageRef} id="top" className={`page about-page ${loaded ? 'is-loaded' : ''}`}>
      <a className="skip-link" href="#main-content">{t.skipToContent}</a>
      <SiteHeader t={t} language={language} setLanguage={setLanguage} languageOpen={languageOpen} setLanguageOpen={setLanguageOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} innerPage />
      <main id="main-content"><AboutPageContent t={t} /></main>
      <SiteFooter t={t} bookingHref={bookingHref} />
    </div>;
  }

  if (credentialsPage) {
    return <div ref={pageRef} id="top" className={`page credentials-page ${loaded ? 'is-loaded' : ''}`}>
      <a className="skip-link" href="#main-content">{t.skipToContent}</a>
      <SiteHeader t={t} language={language} setLanguage={setLanguage} languageOpen={languageOpen} setLanguageOpen={setLanguageOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} innerPage />
      <main id="main-content"><CredentialsPageContent t={t} /></main>
      <SiteFooter t={t} bookingHref={bookingHref} />
    </div>;
  }

  return (
    <>
      <div ref={pageRef} id="top" className={`${scrolled ? 'page is-scrolled' : 'page'} ${loaded ? 'is-loaded' : ''}`}>
        <a className="skip-link" href="#main-content">{t.skipToContent}</a>
        {!loaded && <div className="loader"><div className="loader-brand" role="img" aria-label="ZigZag China"><BrandLockup /></div><i /></div>}
        <section className="hero" aria-label={`${t.title[0]} ${t.title[1]}`}>
          <div ref={heroMediaRef} className="hero-media" style={{ backgroundImage: `url(${heroImageUrl})`, '--mx': '0px', '--my': '0px' }} />
          <div className="hero-split" />
          <div className="hero-shade" />
          <SiteHeader t={t} language={language} setLanguage={setLanguage} languageOpen={languageOpen} setLanguageOpen={setLanguageOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="hero-copy">
            <p className="kicker">{t.kicker}</p>
            <h1>{t.title[0]}<br /><em>{t.title[1]}</em></h1>
            <p className="intro">{t.intro}</p>
            <div className="hero-actions"><a className="hero-primary" href="#booking">{t.heroPrimary}</a><a className="hero-secondary" href="#experiences">{t.heroSecondary} <span>↓</span></a></div>
            <div className="city-actions">
              {cities.map((city) => (
                <button key={city.name} className={`city-card ${city.tone}`} onClick={() => exploreCity(city.name)}>
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

        <main id="main-content">
          <section className="teaser" id="destination-intro" style={{ '--section-image': `url(${teaLaneImageUrl})` }}>
            <div className="teaser-heading"><p className="kicker">{t.teaserKicker}</p><h2>{t.teaserTitle[0]}<br /><em>{t.teaserTitle[1]}</em></h2></div>
            <div className="teaser-copy"><p>{t.teaserBody}</p><a href="#destinations">{t.begin} <span>↗</span></a></div>
          </section>

          <section className="city-strip" id="destinations">
            <div className="section-label">{t.sectionLabel}</div>
            <div className="city-panel jade-panel" id="city-chengdu" style={{ '--panel-image': `url(${cityChengduImageUrl})` }}><span className="panel-index">01</span><h3>{t.city.Chengdu.title}</h3><p>{t.city.Chengdu.body}</p><button onClick={() => exploreCity('Chengdu')}>{t.city.Chengdu.action} <b>↗</b></button></div>
            <div className="city-panel ember-panel" id="city-chongqing" style={{ '--panel-image': `url(${cityChongqingImageUrl})` }}><span className="panel-index">02</span><h3>{t.city.Chongqing.title}</h3><p>{t.city.Chongqing.body}</p><button onClick={() => exploreCity('Chongqing')}>{t.city.Chongqing.action} <b>↗</b></button></div>
          </section>

          <section className="experience-section" id="experiences" style={{ '--section-image': `url(${chongqingHillsideImageUrl})` }}>
            <div className="experience-heading"><p className="kicker">{t.experienceKicker}</p><h2>{t.experienceTitle[0]}<br /><em>{t.experienceTitle[1]}</em></h2></div>
            <div className="experience-filters" aria-label={t.a11y.experiences}>{[[null, t.filterAll], ['Chengdu', t.city.Chengdu.title], ['Chongqing', t.city.Chongqing.title]].map(([value, label]) => <button key={value || 'all'} className={cityFilter === value ? 'is-active' : ''} aria-pressed={cityFilter === value} onClick={() => setCityFilter(value)}>{label}</button>)}</div>
            <div className="experience-grid">{visibleExperiences.map(({ card: [title, city, index], cardIndex }) => <button className={`experience-card experience-${cardIndex + 1}`} style={{ '--experience-image': `url(${experienceImages[cardIndex]})` }} key={title} onClick={() => openExperience(title, city, index, experienceImages[cardIndex], t.experienceDetails[cardIndex])}><span>{index}</span><strong>{title}</strong><small>{city}</small><i>↗</i></button>)}</div>
          </section>

          <section className="booking-section" id="booking" style={{ '--section-image': `url(${sichuanTableImageUrl})` }}><div><p className="kicker">{t.booking.kicker}</p><h2>{t.booking.title[0]}<br /><em>{t.booking.title[1]}</em></h2></div><div className="booking-copy"><p>{t.booking.body}</p>{selectedExperience && <div className="booking-selection"><span><small>{t.booking.selectedLabel}</small><strong>{selectedExperience}</strong></span><button onClick={() => setSelectedExperience(null)}>{t.booking.clearSelection}</button></div>}<a href={bookingHref} className="booking-action">{t.booking.action} <span>↗</span></a><div className="payment-placeholder"><small>{t.booking.paymentLabel}</small><strong>{t.booking.payment}</strong></div></div></section>
        </main>
        <SiteFooter t={t} bookingHref={bookingHref} />
      </div>
      {experienceModal}
    </>
  );
}

export default App;

if (typeof document !== 'undefined' && document.getElementById('root')) {
  const rootElement = document.getElementById('root');
  if (rootElement.hasAttribute('data-prerendered')) hydrateRoot(rootElement, <App />);
  else createRoot(rootElement).render(<App />);
}
