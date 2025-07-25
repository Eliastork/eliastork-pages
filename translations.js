const translations = {
  en: {
    about: ["We are an engineering and supply company with expertise in pharma and industry.",
            "Based in Israel, serving clients worldwide."],
    offerings: ["Custom equipment sourcing and engineering support.",
                "Global logistics and MOD-certified procurement."],
    why: "Clients choose us for quality, transparency, and reliability.",
    address: "Emil Zola 28, Rishon LeZion, 7528251, Israel",
    phones: "+972-52-5444823 / +972-52-7204290",
    emails: "maximchuchnov@eliastork.com / vladimirpogost@eliastork.com",
    mod: "11028835",
    reg: "516415296",
    duns: "600831505",
    contact: "📢 Contact Us",
    footer: "Trusted engineering. Reliable solutions. © 2025 ELIASTORK LTD",
    services: ["Installation and commissioning of industrial equipment",
               "Development of CNC machining programs",
               "Engineering calculations and technical documentation",
               "On-site setup and operational training",
               "Integration into existing production systems",
               "Technical support and maintenance services"]
  },
  ru: {
    about: ["Мы — инженерно-снабженческая компания с опытом в фармацевтике и промышленности.",
            "Находимся в Израиле, работаем по всему миру."],
    offerings: ["Поиск специализированного оборудования и техническая поддержка.",
                "Глобальная логистика и сертифицированные поставки для МО."],
    why: "Нас выбирают за качество, честность и надежность.",
    address: "Эмиль Золя 28, Ришон ле-Цион, 7528251, Израиль",
    phones: "+972-52-5444823 / +972-52-7204290",
    emails: "maximchuchnov@eliastork.com / vladimirpogost@eliastork.com",
    mod: "11028835",
    reg: "516415296",
    duns: "600831505",
    contact: "📢 Связаться с нами",
    footer: "Инженерные решения. Надежные поставки. © 2025 ELIASTORK LTD",
    services: ["Монтаж и установка промышленного оборудования",
               "Разработка управляющих программ для станков с ЧПУ",
               "Инженерные расчёты и проектная документация",
               "Пусконаладочные работы и технический инструктаж",
               "Интеграция в существующие производственные процессы",
               "Техническая поддержка и сервисное обслуживание"]
  },
  he: {
    about: ["חברת הנדסה ואספקה עם מומחיות בפרמצבטיקה ותעשייה.",
            "ממוקמים בישראל, מספקים שירותים עולמיים."],
    offerings: ["איתור ציוד ייחודי ותמיכה הנדסית.",
                "לוגיסטיקה גלובלית ואספקה מוסמכת למשרד הביטחון."],
    why: "לקוחות בוחרים בנו בזכות איכות, אמינות ושקיפות.",
    address: "אימיל זולא 28, ראשון לציון, 7528251, ישראל",
    phones: "+972-52-5444823 / +972-52-7204290",
    emails: "maximchuchnov@eliastork.com / vladimirpogost@eliastork.com",
    mod: "11028835",
    reg: "516415296",
    duns: "600831505",
    contact: "📢 צור קשר",
    footer: "הנדסה אמינה. פתרונות אמינים. © 2025 ELIASTORK LTD",
    services: ["התקנה והפעלה של ציוד תעשייתי",
               "פיתוח תוכנות לעיבוד CNC",
               "חישובים הנדסיים והפקת מסמכים טכניים",
               "הדרכה ותפעול באתר",
               "שילוב במערכות ייצור קיימות",
               "שירות ותחזוקה טכנית"]
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  const aboutList = document.getElementById('about-list');
  aboutList.innerHTML = '';
  t.about.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    aboutList.appendChild(li);
  });

  const offeringsList = document.getElementById('offerings-list');
  offeringsList.innerHTML = '';
  t.offerings.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    offeringsList.appendChild(li);
  });

  document.getElementById('why-text').textContent = t.why;
  document.getElementById('addr-value').textContent = t.address;
  document.getElementById('phone-value').textContent = t.phones;
  document.getElementById('email-value').textContent = t.emails;
  document.getElementById('mod-value').textContent = t.mod;
  document.getElementById('reg-value').textContent = t.reg;
  document.getElementById('duns-value').textContent = t.duns;

  document.getElementById('acc-about').textContent = t.contact;
  document.getElementById('acc-offer').textContent = t.offerings[0];
  document.getElementById('acc-why').textContent = t.why;
    document.getElementById('acc-services').textContent = t.services_title;
document.getElementById('acc-contact').textContent = t.contact;
  document.getElementById('contact-title').textContent = t.contact;
  document.getElementById('footer-text').textContent = t.footer;

  const servicesList = document.getElementById('services-list');
  servicesList.innerHTML = '';
  t.services.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    servicesList.appendChild(li);
  });

  document.body.setAttribute("dir", lang === 'he' ? 'rtl' : 'ltr');
}