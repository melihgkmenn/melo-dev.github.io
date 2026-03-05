document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-enabled');

  // --- i18next Localization ---
  const resources = {
    en: {
      translation: {
        nav: { about: 'About', apps: 'Apps', services: 'Services', connect: 'Connect', contact: 'Contact' },
        hero: {
          greeting: "Hi, I'm Melih Gökmen",
          subheadline: "Building world-class mobile experiences with precision and passion.",
          cta_contact: "Get in Touch",
          cta_work: "View Work"
        },
        about: {
          title: "About Me",
          p1: "I am a passionate software engineer specializing in <strong>iOS Development</strong> and <strong>React Native</strong>. With a deep understanding of the Apple ecosystem and cross-platform technologies, I craft applications that are not only functional but also visually stunning and intuitive.",
          p2: "Beyond mobile apps, I excel in <strong>Automation</strong>, optimizing workflows and building efficiency into every project. Whether it's native Swift or JavaScript-based ecosystems, I deliver robust, scalable solutions."
        },
        apps: {
          title: "App Showcase",
          view_app: "View on App Store",
          room: { title: "Room Vision AI: Design Home", desc: "AI-powered interior design assistant. Transform your living space with Text-to-Room and Style Transfer technology." },
          proflow: { title: "ProFlow: Habit & Task Tracker", desc: "ADHD-friendly planner designed for mental clarity. Build better routines and master your daily productivity." },
          sudoku: { title: "Sudoku Glass", desc: "A minimalist Sudoku experience with a stunning glass-morphic interface. Simple, elegant, and mentally stimulating." }
        },
        services: {
          header: "What I Do",
          learn_more: "Learn More",
          ios: { title: "iOS Development", desc: "Native iOS apps built with Swift and SwiftUI/UIKit. Focus on performance and human interface guidelines." },
          flutter: { title: "Flutter Development", desc: "High-performance cross-platform apps with Dart. Beautiful UIs and unified codebase for iOS & Android." },
          rn: { title: "React Native", desc: "Dual platform deployment with single codebase. Scalable and efficient cross-platform solutions." },
          automation: { title: "Automation & Tools", desc: "Custom scripts and CI/CD pipelines to streamline development and business processes." }
        },
        footer: {
          connect_title: "Let's Connect",
          all_links: "View All My Links",
          copy: "&copy; 2025 Melih Gökmen. Built with ☕ and Code.",
          privacy: "Privacy Policy / Gizlilik Politikası"
        },
        typewriter: ['iOS Developer', 'Flutter Specialist', 'React Native Expert', 'Mobile Architect']
      }
    },
    tr: {
      translation: {
        nav: { about: 'Hakkımda', apps: 'Uygulamalar', services: 'Hizmetler', connect: 'Bağlantılar', contact: 'İletişim' },
        hero: {
          greeting: "Selam, Ben Melih Gökmen",
          subheadline: "Üst düzey mobil deneyimleri hassasiyet ve tutkuyla inşa ediyorum.",
          cta_contact: "İletişime Geç",
          cta_work: "Çalışmalarımı Gör"
        },
        about: {
          title: "Hakkımda",
          p1: "<strong>iOS Geliştirme</strong> ve <strong>React Native</strong> konularında uzmanlaşmış tutkulu bir yazılım mühendisiyim. Apple ekosistemi ve çapraz platform teknolojilerine dair derin bir anlayışla, hem işlevsel hem de görsel olarak etkileyici ve sezgisel uygulamalar üretiyorum.",
          p2: "Mobil uygulamaların ötesinde, <strong>Otomasyon</strong> konusunda uzmanım; iş akışlarını optimize ediyor ve her projeye verimlilik katıyorum. İster yerel Swift ister JavaScript tabanlı ekosistemler olsun, sağlam ve ölçeklenebilir çözümler sunuyorum."
        },
        apps: {
          title: "Uygulama Vitrini",
          view_app: "App Store'da Gör",
          room: { title: "Room Vision AI: Ev Tasarımı", desc: "Yapay zeka destekli iç tasarım asistanı. Yaşam alanınızı Metinden Odaya ve Stil Transferi teknolojisiyle dönüştürün." },
          proflow: { title: "ProFlow: Alışkanlık Takibi", desc: "Zihinsel netlik için tasarlanmış DEHB dostu planlayıcı. Daha iyi rutinler oluşturun ve günlük verimliliğinizde ustalaşın." },
          sudoku: { title: "Sudoku Glass", desc: "Çarpıcı bir cam-morfik arayüze sahip minimalist bir Sudoku deneyimi. Basit, zarif ve zihinsel olarak uyarıcı." }
        },
        services: {
          header: "Neler Yapıyorum",
          learn_more: "Daha Fazla Bilgi",
          ios: { title: "iOS Geliştirme", desc: "Swift ve SwiftUI/UIKit ile geliştirilen yerel iOS uygulamaları. Performansa ve Apple tasarım kurallarına (HIG) odaklanılır." },
          flutter: { title: "Flutter Geliştirme", desc: "Dart ile yüksek performanslı çapraz platform uygulamalar. iOS ve Android için bütünleşik kod tabanı ve şık arayüzler." },
          rn: { title: "React Native", desc: "Tek bir kod tabanı ile çift platform yaygınlaştırma. Ölçeklenebilir ve verimli çapraz platform çözümleri." },
          automation: { title: "Otomasyon ve Araçlar", desc: "Geliştirme ve iş süreçlerini kolaylaştırmak için özel betikler ve CI/CD süreçleri." }
        },
        footer: {
          connect_title: "Bağlantıda Kalalım",
          all_links: "Tüm Bağlantılarımı Gör",
          copy: "&copy; 2025 Melih Gökmen. ☕ ve Kod ile inşa edildi.",
          privacy: "Gizlilik Politikası / Privacy Policy"
        },
        typewriter: ['iOS Geliştirici', 'Flutter Uzmanı', 'React Native Uzmanı', 'Mobil Mimar']
      }
    }
  };

  // Safe checks for i18next
  if (typeof i18next !== 'undefined') {
    const detector = typeof i18nextBrowserLanguageDetector !== 'undefined' ? i18nextBrowserLanguageDetector : null;
    let i18nInstance = i18next;

    if (detector) {
      i18nInstance = i18nInstance.use(detector);
    }

    i18nInstance.init({
      resources,
      fallbackLng: 'en',
      detection: {
        order: ['localStorage', 'navigator'],
        lookupLocalStorage: 'lng',
        caches: ['localStorage']
      },
      debug: false
    }, (err, t) => {
      if (err) return console.error(err);
      updateContent();
      updateActiveButton(i18next.language);
      startTypewriter(); // Start after init
    });
  } else {
    // If i18next fails, still try to run other features
    console.error('i18next not loaded');
    startTypewriter();
  }

  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18next.exists(key)) {
        el.innerHTML = i18next.t(key);
      }
    });

    // Update typewriter if it exists strings
    const strings = i18next.t('typewriter', { returnObjects: true });
    if (Array.isArray(strings)) {
      currentTypewriterStrings = strings;
      textIndex = 0;
      charIndex = 0;
      isDeleting = false;
    }
  }

  function updateActiveButton(lng) {
    const lang = lng ? lng.split('-')[0] : 'en'; // handle pt-BR etc
    const btnEn = document.getElementById('lang-en');
    const btnTr = document.getElementById('lang-tr');
    if (lang === 'tr') {
      btnTr?.classList.add('active');
      btnEn?.classList.remove('active');
    } else {
      btnEn?.classList.add('active');
      btnTr?.classList.remove('active');
    }
  }

  const btnEn = document.getElementById('lang-en');
  const btnTr = document.getElementById('lang-tr');

  btnEn?.addEventListener('click', () => {
    i18next.changeLanguage('en', () => {
      localStorage.setItem('lng', 'en');
      updateContent();
      updateActiveButton('en');
    });
  });

  btnTr?.addEventListener('click', () => {
    i18next.changeLanguage('tr', () => {
      localStorage.setItem('lng', 'tr');
      updateContent();
      updateActiveButton('tr');
    });
  });

  // --- Typewriter Effect ---
  const textElement = document.getElementById('typing-text');
  let currentTypewriterStrings = ['iOS Developer', 'Flutter Specialist', 'React Native Expert', 'Mobile Architect'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;
  let typewriterTimeout;

  function type() {
    if (!textElement) return;
    const currentText = currentTypewriterStrings[textIndex];
    if (isDeleting) {
      textElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      textElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % currentTypewriterStrings.length;
      typeSpeed = 500;
    }
    typewriterTimeout = setTimeout(type, typeSpeed);
  }

  function startTypewriter() {
    if (textElement && !typewriterTimeout) {
      if (typeof i18next !== 'undefined' && i18next.exists('typewriter')) {
        currentTypewriterStrings = i18next.t('typewriter', { returnObjects: true });
      }
      type();
    }
  }

  // --- Section Visibility ---
  // Ensure all sections are visible immediately
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('active');
  });

  // --- Smooth Scrolling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
