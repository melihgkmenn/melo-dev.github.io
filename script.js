document.addEventListener('DOMContentLoaded', () => {
  // --- i18next Localization ---
  const resources = {
    en: {
      translation: {
        nav: {
          about: 'About',
          apps: 'Apps',
          services: 'Services',
          connect: 'Connect',
          contact: 'Contact'
        },
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
          room: {
            title: "Room Vision AI: Design Home",
            desc: "AI-powered interior design assistant. Transform your living space with Text-to-Room and Style Transfer technology."
          },
          proflow: {
            title: "ProFlow: Habit & Task Tracker",
            desc: "ADHD-friendly planner designed for mental clarity. Build better routines and master your daily productivity."
          },
          sudoku: {
            title: "Sudoku Glass",
            desc: "A minimalist Sudoku experience with a stunning glass-morphic interface. Simple, elegant, and mentally stimulating."
          }
        },
        services: {
          header: "What I Do",
          learn_more: "Learn More",
          ios: {
            title: "iOS Development",
            desc: "Native iOS apps built with Swift and SwiftUI/UIKit. Focus on performance and human interface guidelines."
          },
          flutter: {
            title: "Flutter Development",
            desc: "High-performance cross-platform apps with Dart. Beautiful UIs and unified codebase for iOS & Android."
          },
          rn: {
            title: "React Native",
            desc: "Dual platform deployment with single codebase. Scalable and efficient cross-platform solutions."
          },
          automation: {
            title: "Automation & Tools",
            desc: "Custom scripts and CI/CD pipelines to streamline development and business processes."
          }
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
        nav: {
          about: 'Hakkımda',
          apps: 'Uygulamalar',
          services: 'Hizmetler',
          connect: 'Bağlantılar',
          contact: 'İletişim'
        },
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
          room: {
            title: "Room Vision AI: Ev Tasarımı",
            desc: "Yapay zeka destekli iç tasarım asistanı. Yaşam alanınızı Metinden Odaya ve Stil Transferi teknolojisiyle dönüştürün."
          },
          proflow: {
            title: "ProFlow: Alışkanlık Takibi",
            desc: "Zihinsel netlik için tasarlanmış DEHB dostu planlayıcı. Daha iyi rutinler oluşturun ve günlük verimliliğinizde ustalaşın."
          },
          sudoku: {
            title: "Sudoku Glass",
            desc: "Çarpıcı bir cam-morfik arayüze sahip minimalist bir Sudoku deneyimi. Basit, zarif ve zihinsel olarak uyarıcı."
          }
        },
        services: {
          header: "Neler Yapıyorum",
          learn_more: "Daha Fazla Bilgi",
          ios: {
            title: "iOS Geliştirme",
            desc: "Swift ve SwiftUI/UIKit ile geliştirilen yerel iOS uygulamaları. Performansa ve Apple tasarım kurallarına (HIG) odaklanılır."
          },
          flutter: {
            title: "Flutter Geliştirme",
            desc: "Dart ile yüksek performanslı çapraz platform uygulamalar. iOS ve Android için bütünleşik kod tabanı ve şık arayüzler."
          },
          rn: {
            title: "React Native",
            desc: "Tek bir kod tabanı ile çift platform yaygınlaştırma. Ölçeklenebilir ve verimli çapraz platform çözümleri."
          },
          automation: {
            title: "Otomasyon ve Araçlar",
            desc: "Geliştirme ve iş süreçlerini kolaylaştırmak için özel betikler ve CI/CD süreçleri."
          }
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

  i18next
    .init({
      resources,
      lng: localStorage.getItem('lng') || 'en',
      fallbackLng: 'en',
      debug: false
    }, (err, t) => {
      updateContent();
      updateActiveButton(i18next.language);
    });

  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = i18next.t(key);
    });

    // Refresh typewriter strings
    currentTypewriterStrings = i18next.t('typewriter', { returnObjects: true });
    textIndex = 0;
    charIndex = 0;
  }

  function updateActiveButton(lng) {
    if (lng === 'tr') {
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
  let currentTypewriterStrings = i18next.exists('typewriter') ? i18next.t('typewriter', { returnObjects: true }) : ['iOS Developer', 'Flutter Specialist', 'React Native Expert', 'Mobile Architect'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
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
    setTimeout(type, typeSpeed);
  }

  if (textElement) type();

  // --- Scroll Reveal ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };
  const observer = new IntersectionObserver(revealCallback, { threshold: 0.15 });
  revealElements.forEach(el => observer.observe(el));

  // --- Smooth Scrolling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
