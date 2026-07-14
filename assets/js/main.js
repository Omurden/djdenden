// Denden — demo interactions: sticky header, mobile nav, reveal-on-scroll,
// gallery lightbox, footer year, language switching.

const TRANSLATIONS = {
  'nav.about': { en: 'About', tr: 'Hakkında', nl: 'Over' },
  'nav.events': { en: 'Events', tr: 'Etkinlikler', nl: 'Agenda' },
  'nav.gallery': { en: 'Gallery', tr: 'Galeri', nl: 'Galerij' },
  'nav.book': { en: 'Book Dj Denden', tr: 'Booking Yap', nl: 'Boek Dj Denden' },
  'hero.eyebrow': { en: 'Turkish Nights — Across Europe', tr: 'Türk Geceleri — Avrupa Genelinde', nl: 'Turkse Nachten — Heel Europa' },
  'hero.tagline': {
    en: '90s throwbacks meet Turkish pop energy. On the decks across Europe & Turkey — clubs, weddings & private events.',
    tr: '90’lar nostaljisi Türkçe pop enerjisiyle buluşuyor. Avrupa ve Türkiye’de sahnede — kulüpler, düğünler ve özel etkinlikler.',
    nl: '90’s throwbacks ontmoeten Turkse pop-energie. Op de decks door heel Europa & Turkije — clubs, bruiloften & privé-evenementen.',
  },
  'hero.cta1': { en: 'Upcoming Events', tr: 'Yaklaşan Etkinlikler', nl: 'Aankomende Shows' },
  'hero.cta2': { en: 'Book Dj Denden', tr: 'Booking Yap', nl: 'Boek Dj Denden' },
  'about.eyebrow': { en: 'About', tr: 'Hakkında', nl: 'Over' },
  'about.title.line1': { en: 'Turkish sound,', tr: 'Türk sound’u,', nl: 'Turkse sound,' },
  'about.title.line2': { en: 'Europe dance floors.', tr: 'Avrupa dans pistleri.', nl: 'Europese dansvloeren.' },
  'about.body': {
    en: 'Denden is a Turkish DJ based in the Netherlands, known for turning any room into a 90s-fuelled dance floor. From intimate club nights in Amsterdam to full-scale Turkish pop parties across Europe and Turkey, Denden blends nostalgic hits with today’s energy — every set is built live, for the room that’s in front of him.',
    tr: 'Denden, Hollanda merkezli bir Türk DJ — her mekanı 90’lar esintili bir dans pistine dönüştürmesiyle tanınıyor. Amsterdam’daki samimi kulüp gecelerinden Avrupa ve Türkiye genelindeki büyük ölçekli Türkçe pop partilerine, Denden nostaljik hitleri günümüz enerjisiyle harmanlıyor — her set, karşısındaki kalabalık için anında, canlı olarak kuruluyor.',
    nl: 'Denden is een Turkse dj gevestigd in Nederland, bekend om elke ruimte om te toveren tot een dansvloer vol 90’s energie. Van intieme clubavonden in Amsterdam tot grootschalige Turkse pop-feesten door heel Europa en Turkije — Denden mixt nostalgische hits met de energie van nu, elke set live opgebouwd voor het publiek dat voor hem staat.',
  },
  'about.placeholder': {
    en: '[Placeholder bio — full text to be swapped in once provided.]',
    tr: '[Yer tutucu biyografi — gerçek metin gönderildiğinde güncellenecek.]',
    nl: '[Tijdelijke bio — wordt vervangen zodra de definitieve tekst binnen is.]',
  },
  'about.stat1': { en: 'Years behind the decks', tr: 'Yıldır sahnede', nl: 'Jaar achter de draaitafels' },
  'about.stat2': { en: 'Shows played', tr: 'Performans', nl: 'Shows gespeeld' },
  'about.stat3': { en: 'Based & sound', tr: 'Merkez & sound', nl: 'Gevestigd & sound' },
  'events.eyebrow': { en: 'Where to catch Denden', tr: 'Denden’i nerede yakalarsın', nl: 'Waar je Denden kunt zien' },
  'events.title': { en: 'Upcoming Events', tr: 'Yaklaşan Etkinlikler', nl: 'Aankomende Shows' },
  'gallery.eyebrow': { en: 'On the night', tr: 'Sahneden kareler', nl: 'Die avond' },
  'gallery.title': { en: 'Photos & Videos', tr: 'Fotoğraflar & Videolar', nl: 'Foto’s & Video’s' },
  'gallery.videoEyebrow': { en: 'Straight from Instagram', tr: 'Instagram’dan', nl: 'Rechtstreeks van Instagram' },
  'gallery.videoTitle': { en: 'Videos', tr: 'Videolar', nl: 'Video’s' },
  'booking.eyebrow': { en: 'Get in touch', tr: 'İletişime geç', nl: 'Neem contact op' },
  'booking.title': { en: 'Book Dj Denden', tr: 'Booking', nl: 'Boek Dj Denden' },
  'booking.body': {
    en: 'Club night, wedding, corporate party or a private Turkish night — reach out by email or Instagram and Denden will get back to you.',
    tr: 'Kulüp gecesi, düğün, kurumsal etkinlik ya da özel bir Türk gecesi — e-posta ya da Instagram üzerinden ulaş, Denden sana dönüş yapsın.',
    nl: 'Clubavond, bruiloft, bedrijfsfeest of een privé Turkse avond — neem contact op via e-mail of Instagram, Denden reageert snel.',
  },
  'booking.email': { en: 'Email', tr: 'E-posta', nl: 'E-mail' },
  'footer.rights': { en: 'All rights reserved.', tr: 'Tüm hakları saklıdır.', nl: 'Alle rechten voorbehouden.' },
  'meta.title': {
    en: 'DJ DENDEN — DJ & Turkish Nights, Europe',
    tr: 'DJ DENDEN — Türk Gecelerinin DJ’i, Avrupa',
    nl: 'DJ DENDEN — Turkse Nachten DJ, Europa',
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
  localStorage.setItem('djdenden-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {

  // Language switch
  const savedLang = localStorage.getItem('djdenden-lang');
  setLanguage(savedLang && TRANSLATIONS['nav.about'][savedLang] ? savedLang : 'en');
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
