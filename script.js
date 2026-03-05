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
        services: {
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
        services: {
          learn_more: "Daha Fazla Bilgi",
          ios: {
            title: "iOS Geliştirme",
            desc: "Swift ve SwiftUI/UIKit ile geliştirilen yerel iOS uygulamaları. Performansa ve insan arayüzü kurallarına odaklanılır."
          },
          flutter: {
            title: "Flutter Geliştirme",
            desc: "Dart ile yüksek performanslı çok platformlu uygulamalar. iOS ve Android için güzel arayüzler ve tek kod tabanı."
          },
          rn: {
            title: "React Native",
            desc: "Tek kod tabanı ile çift platformda yaygınlaştırma. Ölçeklenebilir ve verimli çapraz platform çözümleri."
          },
          automation: {
            title: "Otomasyon ve Araçlar",
            desc: "Geliştirme ve iş süreçlerini kolaylaştırmak için özel betikler ve CI/CD süreçleri."
          }
        },
        typewriter: ['iOS Geliştirici', 'Flutter Uzmanı', 'React Native Uzmanı', 'Mobil Mimar']
      }
    }
  };

  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      resources,
      fallbackLng: 'en',
      debug: false
    }, (err, t) => {
      updateContent();
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

  const btnEn = document.getElementById('lang-en');
  const btnTr = document.getElementById('lang-tr');

  btnEn?.addEventListener('click', () => {
    i18next.changeLanguage('en', () => {
      updateContent();
      btnEn.classList.add('active');
      btnTr.classList.remove('active');
    });
  });

  btnTr?.addEventListener('click', () => {
    i18next.changeLanguage('tr', () => {
      updateContent();
      btnTr.classList.add('active');
      btnEn.classList.remove('active');
    });
  });

  // --- Typewriter Effect ---
  const textElement = document.getElementById('typing-text');
  let currentTypewriterStrings = ['iOS Developer', 'Flutter Specialist', 'React Native Expert', 'Mobile Architect'];
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
