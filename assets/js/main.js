// DJ Denden — demo interactions: sticky header, mobile nav, reveal-on-scroll,
// gallery lightbox, footer year, language switching.

const TRANSLATIONS = {
  'nav.about': { en: 'About', tr: 'Hakkında', nl: 'Over' },
  'nav.events': { en: 'Events', tr: 'Etkinlikler', nl: 'Agenda' },
  'nav.gallery': { en: 'Gallery', tr: 'Galeri', nl: 'Galerij' },
  'nav.book': { en: 'Book Dj Denden', tr: 'Booking Yap', nl: 'Boek Dj Denden' },
  'hero.eyebrow': { en: 'Turkish Pop Nights — Across Europe', tr: 'Türkçe Pop Geceleri — Avrupa Genelinde', nl: 'Turkish Pop Nights — Heel Europa' },
  'hero.tagline': {
    en: 'Unforgettable 90s nights, Turkish Pop events and private events — all across Turkey and Europe.',
    tr: 'Unutulmaz 90’lar geceleri, Türkçe Pop etkinlikleri ve özel etkinlikler… Türkiye ve Avrupa’nın her yerinde.',
    nl: 'Onvergetelijke 90’s avonden, Turkish Pop feesten en privé-evenementen — door heel Turkije en Europa.',
  },
  'hero.cta1': { en: 'Upcoming Events', tr: 'Yaklaşan Etkinlikler', nl: 'Aankomende Shows' },
  'hero.cta2': { en: 'Book Dj Denden', tr: 'Booking Yap', nl: 'Boek Dj Denden' },
  'about.eyebrow': { en: 'About', tr: 'Hakkında', nl: 'Over' },
  'about.title.line1': { en: 'Turkish music,', tr: 'Türkçe müzik,', nl: 'Turkse muziek,' },
  'about.title.line2': { en: 'all across Europe.', tr: 'Avrupa’nın her yerinde.', nl: 'door heel Europa.' },
  'about.question': { en: 'Who is DJ Denden?', tr: 'DJ Denden kimdir?', nl: 'Wie is DJ Denden?' },
  'about.body': {
    en: 'DJ Denden is a Turkish DJ who has been performing in Istanbul for over 16 years, known for his energetic, nostalgic sets built around Turkish oldies. His signature 90’s Turkish Pop Party became one of Istanbul’s most popular nightlife events.',
    tr: 'DJ Denden, 16 yıldan uzun süredir İstanbul’da performans sergileyen bir Türk DJ — enerjik ve nostaljik, Türkçe eski şarkılar etrafında kurulu setleriyle tanınıyor. İmza etkinliği 90’lar Türkçe Pop Party, İstanbul’un en popüler gece hayatı etkinliklerinden biri haline geldi.',
    nl: 'DJ Denden is een Turkse dj die al meer dan 16 jaar optreedt in Istanbul, bekend om zijn energieke, nostalgische sets rond Turkse klassiekers. Zijn kenmerkende 90’s Turkish Pop Party groeide uit tot een van de populairste nachtleven-evenementen van Istanbul.',
  },
  'about.stat1': { en: 'Years behind the decks', tr: 'Yıldır sahnede', nl: 'Jaar achter de draaitafels' },
  'about.stat2': { en: 'Shows played', tr: 'Performans', nl: 'Shows gespeeld' },
  'about.stat3': { en: 'Based & sound', tr: 'Merkez & sound', nl: 'Gevestigd & sound' },
  'events.eyebrow': { en: 'Where to catch DJ Denden', tr: 'DJ Denden’i nerede yakalarsın', nl: 'Waar je DJ Denden kunt zien' },
  'events.title': { en: 'Upcoming Events', tr: 'Yaklaşan Etkinlikler', nl: 'Aankomende Shows' },
  'gallery.eyebrow': { en: 'On the night', tr: 'Sahneden kareler', nl: 'Die avond' },
  'gallery.title': { en: 'Photos & Videos', tr: 'Fotoğraflar & Videolar', nl: 'Foto’s & Video’s' },
  'gallery.videoEyebrow': { en: 'Straight from Instagram', tr: 'Instagram’dan', nl: 'Rechtstreeks van Instagram' },
  'gallery.videoTitle': { en: 'Videos', tr: 'Videolar', nl: 'Video’s' },
  'booking.eyebrow': { en: 'Get in touch', tr: 'İletişime geç', nl: 'Neem contact op' },
  'booking.title': { en: 'Book Dj Denden', tr: 'Booking', nl: 'Boek Dj Denden' },
  'booking.body': {
    en: 'For 90s nights, Turkish Pop Night, corporate events, weddings or private events — get in touch by email.',
    tr: '90’lar, Türkçe Pop Gecesi, şirket etkinlikleri, düğünler ya da özel etkinlikler için e-posta üzerinden iletişime geçebilirsiniz.',
    nl: 'Voor 90’s avonden, Turkish Pop Night, bedrijfsevenementen, bruiloften of privé-evenementen — neem contact op via e-mail.',
  },
  'booking.email': { en: 'Email', tr: 'E-posta', nl: 'E-mail' },
  'footer.rights': { en: 'All rights reserved.', tr: 'Tüm hakları saklıdır.', nl: 'Alle rechten voorbehouden.' },
  'meta.title': {
    en: 'DJ DENDEN — DJ & Turkish Pop Nights, Europe',
    tr: 'DJ DENDEN — Türkçe Pop Gecelerinin DJ’i, Avrupa',
    nl: 'DJ DENDEN — Turkish Pop Nights DJ, Europa',
  },
  'meta.description': {
    en: 'DJ DENDEN — Turkish DJ based in the Netherlands, playing across Europe & Turkey. 90s throwbacks, Turkish pop nights, weddings & private events.',
    tr: 'DJ DENDEN — Hollanda merkezli, Avrupa ve Türkiye’de sahne alan Türk DJ. 90’lar nostaljisi, Türkçe pop geceleri, düğünler ve özel etkinlikler.',
    nl: 'DJ DENDEN — Turkse dj gevestigd in Nederland, actief door heel Europa & Turkije. 90’s throwbacks, Turkse pop-avonden, bruiloften & privé-evenementen.',
  },
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const entry = TRANSLATIONS[el.dataset.i18n];
    if (entry && entry[lang]) el.textContent = entry[lang];
  });
  document.getElementById('pageTitle').textContent = TRANSLATIONS['meta.title'][lang];
  document.getElementById('pageDescription').setAttribute('content', TRANSLATIONS['meta.description'][lang]);
  document.querySelectorAll('.lang-pill').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {

  // Language switch — always starts in English
  setLanguage('en');
  document.querySelectorAll('.lang-pill').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Sticky header background
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Reveal-on-scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Gallery lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item').forEach(btn => {
    btn.addEventListener('click', () => {
      lightboxImg.src = btn.dataset.full;
      lightboxImg.alt = btn.querySelector('img').alt;
      lightbox.classList.add('is-open');
    });
  });
  const closeLightbox = () => lightbox.classList.remove('is-open');
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

});
