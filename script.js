const languageButton = document.getElementById('languageButton');
const languageMenu = document.getElementById('languageMenu');
const languageSearchInput = document.getElementById('languageSearchInput');
const languageList = document.getElementById('languageList');

// Store active language in localStorage
let activeLanguage = localStorage.getItem('activeLanguage') || 'English';

const languages = [
  "Sanskrit",
  "Abkhaz",
  "Acehnese",
  "Acholi",
  "Afar",
  "Afrikaans",
  "Albanian",
  "Alur",
  "Amharic",
  "Arabic",
  "Armenian",
  "Assamese",
  "Avar",
  "Awadhi",
  "Aymara",
  "Azerbaijani",
  "Balinese",
  "Baluchi",
  "Bambara",
  "Baoulé",
  "Bashkir",
  "Basque",
  "Batak Karo",
  "Batak Simalungun",
  "Batak Toba",
  "Belarusian",
  "Bemba",
  "Bengali",
  "Betawi",
  "Bhojpuri",
  "Bikol",
  "Bosnian",
  "Breton",
  "Bulgarian",
  "Buryat",
  "Cantonese",
  "Catalan",
  "Cebuano",
  "Chamorro",
  "Chechen",
  "Chichewa",
  "Chinese (Simplified)",
  "Chinese (Traditional)",
  "Chuukese",
  "Chuvash",
  "Corsican",
  "Crimean Tatar (Cyrillic)",
  "Crimean Tatar (Latin)",
  "Croatian",
  "Czech",
  "Danish",
  "Dari",
  "Dhivehi",
  "Dinka",
  "Dogri",
  "Dombe",
  "Dutch",
  "Dyula",
  "Dzongkha",
  "English",
  "Esperanto",
  "Estonian",
  "Ewe",
  "Faroese",
  "Fijian",
  "Filipino",
  "Finnish",
  "Fon",
  "French",
  "French (Canada)",
  "Frisian",
  "Friulian",
  "Fulani",
  "Ga",
  "Galician",
  "Georgian",
  "German",
  "Greek",
  "Guarani",
  "Gujarati",
  "Haitian Creole",
  "Hakha Chin",
  "Hausa",
  "Hawaiian",
  "Hebrew",
  "Hiligaynon",
  "Hindi",
  "Hmong",
  "Hungarian",
  "Hunsrik",
  "Iban",
  "Icelandic",
  "Igbo",
  "Ilocano",
  "Indonesian",
  "Inuktut (Latin)",
  "Inuktut (Syllabics)",
  "Irish",
  "Italian",
  "Jamaican Patois",
  "Japanese",
  "Javanese",
  "Jingpo",
  "Kalaallisut",
  "Kannada",
  "Kanuri",
  "Kapampangan",
  "Kazakh",
  "Khasi",
  "Khmer",
  "Kiga",
  "Kikongo",
  "Kinyarwanda",
  "Kituba",
  "Kokborok",
  "Komi",
  "Konkani",
  "Korean",
  "Krio",
  "Kurdish (Kurmanji)",
  "Kurdish (Sorani)",
  "Kyrgyz",
  "Lao",
  "Latgalian",
  "Latin",
  "Latvian",
  "Ligurian",
  "Limburgish",
  "Lingala",
  "Lithuanian",
  "Lombard",
  "Luganda",
  "Luo",
  "Luxembourgish",
  "Macedonian",
  "Madurese",
  "Maithili",
  "Makassar",
  "Malagasy",
  "Malay",
  "Malay (Jawi)",
  "Malayalam",
  "Maltese",
  "Mam",
  "Manx",
  "Maori",
  "Marathi",
  "Marshallese",
  "Marwadi",
  "Mauritian Creole",
  "Meadow Mari",
  "Meiteilon (Manipuri)",
  "Minang",
  "Mizo",
  "Mongolian",
  "Myanmar (Burmese)",
  "Nahuatl (Eastern Huasteca)",
  "Ndau",
  "Ndebele (South)",
  "Nepalbhasa (Newari)",
  "Nepali",
  "NKo",
  "Norwegian (Bokmål)",
  "Nuer",
  "Occitan",
  "Odia (Oriya)",
  "Oromo",
  "Ossetian",
  "Pangasinan",
  "Papiamento",
  "Pashto",
  "Persian",
  "Polish",
  "Portuguese (Brazil)",
  "Portuguese (Portugal)",
  "Punjabi (Gurmukhi)",
  "Punjabi (Shahmukhi)",
  "Quechua",
  "Q'eqchi'",
  "Romani",
  "Romanian",
  "Rundi",
  "Russian",
  "Sami (North)",
  "Samoan",
  "Sango",
  "Santali (Latin)",
  "Santali (Ol Chiki)",
  "Scots Gaelic",
  "Sepedi",
  "Serbian",
  "Sesotho",
  "Seychellois Creole",
  "Shan",
  "Shona",
  "Sicilian",
  "Silesian",
  "Sindhi",
  "Sinhala",
  "Slovak",
  "Slovenian",
  "Somali",
  "Spanish",
  "Sundanese",
  "Susu",
  "Swahili",
  "Swati",
  "Swedish",
  "Tahitian",
  "Tajik",
  "Tamazight",
  "Tamazight (Tifinagh)",
  "Tamil",
  "Tatar",
  "Telugu",
  "Tetum",
  "Thai",
  "Tibetan",
  "Tigrinya",
  "Tiv",
  "Tok Pisin",
  "Tongan",
  "Tshiluba",
  "Tsonga",
  "Tswana",
  "Tulu",
  "Tumbuka",
  "Turkish",
  "Turkmen",
  "Tuvan",
  "Twi",
  "Udmurt",
  "Ukrainian",
  "Urdu",
  "Uyghur",
  "Uzbek",
  "Venda",
  "Venetian",
  "Vietnamese",
  "Waray",
  "Welsh",
  "Wolof",
  "Xhosa",
  "Yakut",
  "Yiddish",
  "Yoruba",
  "Yucatec Maya",
  "Zapotec",
  "Zulu"
];

// Language names in multiple languages
const languageNames = {
  "English": { "English": "English", "Russian": "Английский", "Spanish": "Inglés", "French": "Anglais", "German": "Englisch", "Chinese (Simplified)": "英语", "Hindi": "अंग्रेज़ी", "Portuguese (Brazil)": "Inglês", "Ukrainian": "Англійська", "Polish": "Angielski" },
  "Russian": { "English": "Russian", "Russian": "Русский", "Spanish": "Ruso", "French": "Russe", "German": "Russisch", "Chinese (Simplified)": "俄语", "Hindi": "रूसी", "Portuguese (Brazil)": "Russo", "Ukrainian": "Російська", "Polish": "Rosyjski" },
  "Spanish": { "English": "Spanish", "Russian": "Испанский", "Spanish": "Español", "French": "Espagnol", "German": "Spanisch", "Chinese (Simplified)": "西班牙语", "Hindi": "स्पेनिश", "Portuguese (Brazil)": "Espanhol", "Ukrainian": "Іспанська", "Polish": "Hiszpański" },
  "French": { "English": "French", "Russian": "Французский", "Spanish": "Francés", "French": "Français", "German": "Französisch", "Chinese (Simplified)": "法语", "Hindi": "फ्रेंच", "Portuguese (Brazil)": "Francês", "Ukrainian": "Французька", "Polish": "Francuski" },
  "German": { "English": "German", "Russian": "Немецкий", "Spanish": "Alemán", "French": "Allemand", "German": "Deutsch", "Chinese (Simplified)": "德语", "Hindi": "जर्मन", "Portuguese (Brazil)": "Alemão", "Ukrainian": "Німецька", "Polish": "Niemiecki" },
  "Chinese (Simplified)": { "English": "Chinese (Simplified)", "Russian": "Китайский (упрощенный)", "Spanish": "Chino (simplificado)", "French": "Chinois (simplifié)", "German": "Chinesisch (vereinfacht)", "Chinese (Simplified)": "简体中文", "Hindi": "चीनी (सरलीकृत)", "Portuguese (Brazil)": "Chinês (simplificado)", "Ukrainian": "Китайська (спрощена)", "Polish": "Chiński (uproszczony)" },
  "Chinese (Traditional)": { "English": "Chinese (Traditional)", "Russian": "Китайский (традиционный)", "Spanish": "Chino (tradicional)", "French": "Chinois (traditionnel)", "German": "Chinesisch (traditionell)", "Chinese (Simplified)": "繁體中文", "Hindi": "चीनी (पारंपरिक)", "Portuguese (Brazil)": "Chinês (tradicional)", "Ukrainian": "Китайська (традиційна)", "Polish": "Chiński (tradycyjny)" },
  "Japanese": { "English": "Japanese", "Russian": "Японский", "Spanish": "Japonés", "French": "Japonais", "German": "Japanisch", "Chinese (Simplified)": "日语", "Hindi": "जापानी", "Portuguese (Brazil)": "Japonês", "Ukrainian": "Японська", "Polish": "Japoński" },
  "Arabic": { "English": "Arabic", "Russian": "Арабский", "Spanish": "Árabe", "French": "Arabe", "German": "Arabisch", "Chinese (Simplified)": "阿拉伯语", "Hindi": "अरबी", "Portuguese (Brazil)": "Árabe", "Ukrainian": "Арабська", "Polish": "Arabski" },
  "Hindi": { "English": "Hindi", "Russian": "Хинди", "Spanish": "Hindi", "French": "Hindi", "German": "Hindi", "Chinese (Simplified)": "印地语", "Hindi": "हिंदी", "Portuguese (Brazil)": "Hindi", "Ukrainian": "Гінді", "Polish": "Hindi" },
  "Portuguese (Brazil)": { "English": "Portuguese (Brazil)", "Russian": "Португальский (Бразилия)", "Spanish": "Portugués (Brasil)", "French": "Portugais (Brésil)", "German": "Portugiesisch (Brasilien)", "Chinese (Simplified)": "葡萄牙语(巴西)", "Hindi": "पुर्तगाली (ब्राज़ील)", "Portuguese (Brazil)": "Português (Brasil)", "Ukrainian": "Португальська (Бразилія)", "Polish": "Portugalski (Brazylia)" },
  "Portuguese (Portugal)": { "English": "Portuguese (Portugal)", "Russian": "Португальский (Португалия)", "Spanish": "Portugués (Portugal)", "French": "Portugais (Portugal)", "German": "Portugiesisch (Portugal)", "Chinese (Simplified)": "葡萄牙语(葡萄牙)", "Hindi": "पुर्तगाली (पुर्तगाल)", "Portuguese (Brazil)": "Português (Portugal)", "Ukrainian": "Португальська (Португалія)", "Polish": "Portugalski (Portugalia)" },
  "Italian": { "English": "Italian", "Russian": "Итальянский", "Spanish": "Italiano", "French": "Italien", "German": "Italienisch", "Chinese (Simplified)": "意大利语", "Hindi": "इतालवी", "Portuguese (Brazil)": "Italiano", "Ukrainian": "Італійська", "Polish": "Włoski" },
  "Dutch": { "English": "Dutch", "Russian": "Нидерландский", "Spanish": "Holandés", "French": "Néerlandais", "German": "Niederländisch", "Chinese (Simplified)": "荷兰语", "Hindi": "डच", "Portuguese (Brazil)": "Holandês", "Ukrainian": "Нідерландська", "Polish": "Holenderski" },
  "Swedish": { "English": "Swedish", "Russian": "Шведский", "Spanish": "Sueco", "French": "Suédois", "German": "Schwedisch", "Chinese (Simplified)": "瑞典语", "Hindi": "स्वीडिश", "Portuguese (Brazil)": "Sueco", "Ukrainian": "Шведська", "Polish": "Szwedzki" },
  "Norwegian (Bokmål)": { "English": "Norwegian (Bokmål)", "Russian": "Норвежский (Букмол)", "Spanish": "Noruego (Bokmål)", "French": "Norvégien (Bokmål)", "German": "Norwegisch (Bokmål)", "Chinese (Simplified)": "挪威语(书面体)", "Hindi": "नॉर्वेजियन (बोकमाल)", "Portuguese (Brazil)": "Norueguês (Bokmål)", "Ukrainian": "Норвезька (Букмол)", "Polish": "Norweski (Bokmål)" },
  "Danish": { "English": "Danish", "Russian": "Датский", "Spanish": "Danés", "French": "Danois", "German": "Dänisch", "Chinese (Simplified)": "丹麦语", "Hindi": "डेनिश", "Portuguese (Brazil)": "Dinamarquês", "Ukrainian": "Данська", "Polish": "Duński" },
  "Finnish": { "English": "Finnish", "Russian": "Финский", "Spanish": "Finlandés", "French": "Finnois", "German": "Finnisch", "Chinese (Simplified)": "芬兰语", "Hindi": "फिनिश", "Portuguese (Brazil)": "Finlandês", "Ukrainian": "Фінська", "Polish": "Fiński" },
  "Polish": { "English": "Polish", "Russian": "Польский", "Spanish": "Polaco", "French": "Polonais", "German": "Polnisch", "Chinese (Simplified)": "波兰语", "Hindi": "पोलिश", "Portuguese (Brazil)": "Polonês", "Ukrainian": "Польська", "Polish": "Polski" },
  "Ukrainian": { "English": "Ukrainian", "Russian": "Украинский", "Spanish": "Ucraniano", "French": "Ukrainien", "German": "Ukrainisch", "Chinese (Simplified)": "乌克兰语", "Hindi": "यूक्रेनी", "Portuguese (Brazil)": "Ucraniano", "Ukrainian": "Українська", "Polish": "Ukraiński" },
  "Czech": { "English": "Czech", "Russian": "Чешский", "Spanish": "Checo", "French": "Tchèque", "German": "Tschechisch", "Chinese (Simplified)": "捷克语", "Hindi": "चेक", "Portuguese (Brazil)": "Tcheco", "Ukrainian": "Чеська", "Polish": "Czeski" },
  "Greek": { "English": "Greek", "Russian": "Греческий", "Spanish": "Griego", "French": "Grec", "German": "Griechisch", "Chinese (Simplified)": "希腊语", "Hindi": "ग्रीक", "Portuguese (Brazil)": "Grego", "Ukrainian": "Грецька", "Polish": "Grecki" },
  "Turkish": { "English": "Turkish", "Russian": "Турецкий", "Spanish": "Turco", "French": "Turc", "German": "Türkisch", "Chinese (Simplified)": "土耳其语", "Hindi": "तुर्की", "Portuguese (Brazil)": "Turco", "Ukrainian": "Турецька", "Polish": "Turecki" },
  "Korean": { "English": "Korean", "Russian": "Корейский", "Spanish": "Coreano", "French": "Coréen", "German": "Koreanisch", "Chinese (Simplified)": "韩语", "Hindi": "कोरियाई", "Portuguese (Brazil)": "Coreano", "Ukrainian": "Корейська", "Polish": "Koreański" },
  "Vietnamese": { "English": "Vietnamese", "Russian": "Вьетнамский", "Spanish": "Vietnamita", "French": "Vietnamien", "German": "Vietnamesisch", "Chinese (Simplified)": "越南语", "Hindi": "वियतनामी", "Portuguese (Brazil)": "Vietnamita", "Ukrainian": "В'єтнамська", "Polish": "Wietnamski" },
  "Thai": { "English": "Thai", "Russian": "Тайский", "Spanish": "Tailandés", "French": "Thaï", "German": "Thailändisch", "Chinese (Simplified)": "泰语", "Hindi": "थाई", "Portuguese (Brazil)": "Tailandês", "Ukrainian": "Тайландська", "Polish": "Tajski" },
  "Bengali": { "English": "Bengali", "Russian": "Бенгальский", "Spanish": "Bengalí", "French": "Bengali", "German": "Bengalisch", "Chinese (Simplified)": "孟加拉语", "Hindi": "बंगाली", "Portuguese (Brazil)": "Bengali", "Ukrainian": "Бенгальська", "Polish": "Bengalski" },
  "Indonesian": { "English": "Indonesian", "Russian": "Индонезийский", "Spanish": "Indonesio", "French": "Indonésien", "German": "Indonesisch", "Chinese (Simplified)": "印度尼西亚语", "Hindi": "इंडोनेशियाई", "Portuguese (Brazil)": "Indonésio", "Ukrainian": "Індонезійська", "Polish": "Indonezyjski" },
  "Malay": { "English": "Malay", "Russian": "Малайский", "Spanish": "Malayo", "French": "Malais", "German": "Malaiisch", "Chinese (Simplified)": "马来语", "Hindi": "मलय", "Portuguese (Brazil)": "Malaio", "Ukrainian": "Малайська", "Polish": "Malajski" },
  "Filipino": { "English": "Filipino", "Russian": "Филиппинский", "Spanish": "Filipino", "French": "Philippin", "German": "Philippinisch", "Chinese (Simplified)": "菲律宾语", "Hindi": "फिलिपिनो", "Portuguese (Brazil)": "Filipino", "Ukrainian": "Філіппінська", "Polish": "Filipiński" },
  "Swahili": { "English": "Swahili", "Russian": "Суахили", "Spanish": "Suajili", "French": "Swahili", "German": "Suaheli", "Chinese (Simplified)": "斯瓦希里语", "Hindi": "स्वाहिली", "Portuguese (Brazil)": "Suaíli", "Ukrainian": "Суахілі", "Polish": "Suahili" },
  "Afrikaans": { "English": "Afrikaans", "Russian": "Африкаанс", "Spanish": "Afrikáans", "French": "Afrikaans", "German": "Afrikaans", "Chinese (Simplified)": "南非荷兰语", "Hindi": "अफ्रीकांस", "Portuguese (Brazil)": "Africâner", "Ukrainian": "Африкаанс", "Polish": "Afrikaans" },
  "Hebrew": { "English": "Hebrew", "Russian": "Иврит", "Spanish": "Hebreo", "French": "Hébreu", "German": "Hebräisch", "Chinese (Simplified)": "希伯来语", "Hindi": "हिब्रू", "Portuguese (Brazil)": "Hebraico", "Ukrainian": "Іврит", "Polish": "Hebrajski" },
  "Persian": { "English": "Persian", "Russian": "Персидский", "Spanish": "Persa", "French": "Persan", "German": "Persisch", "Chinese (Simplified)": "波斯语", "Hindi": "फारसी", "Portuguese (Brazil)": "Persa", "Ukrainian": "Перська", "Polish": "Perski" },
  "Urdu": { "English": "Urdu", "Russian": "Урду", "Spanish": "Urdu", "French": "Ourdou", "German": "Urdu", "Chinese (Simplified)": "乌尔都语", "Hindi": "उर्दू", "Portuguese (Brazil)": "Urdu", "Ukrainian": "Урду", "Polish": "Urdu" },
  "Gujarati": { "English": "Gujarati", "Russian": "Гуджарати", "Spanish": "Gujarati", "French": "Gujarati", "German": "Gujarati", "Chinese (Simplified)": "古吉拉特语", "Hindi": "गुजराती", "Portuguese (Brazil)": "Gujarati", "Ukrainian": "Гуджараті", "Polish": "Gujarati" },
  "Marathi": { "English": "Marathi", "Russian": "Маратхи", "Spanish": "Maratí", "French": "Marathi", "German": "Marathi", "Chinese (Simplified)": "马拉地语", "Hindi": "मराठी", "Portuguese (Brazil)": "Marathi", "Ukrainian": "Маратхі", "Polish": "Marathi" },
  "Tamil": { "English": "Tamil", "Russian": "Тамильский", "Spanish": "Tamil", "French": "Tamoul", "German": "Tamil", "Chinese (Simplified)": "泰米尔语", "Hindi": "तमिल", "Portuguese (Brazil)": "Tâmil", "Ukrainian": "Тамільська", "Polish": "Tamil" },
  "Telugu": { "English": "Telugu", "Russian": "Телугу", "Spanish": "Telugú", "French": "Télougou", "German": "Telugu", "Chinese (Simplified)": "泰卢固语", "Hindi": "तेलुगु", "Portuguese (Brazil)": "Telugu", "Ukrainian": "Телугу", "Polish": "Telugu" },
  "Kannada": { "English": "Kannada", "Russian": "Каннада", "Spanish": "Kannada", "French": "Kannada", "German": "Kannada", "Chinese (Simplified)": "卡纳达语", "Hindi": "कन्नड़", "Portuguese (Brazil)": "Canarim", "Ukrainian": "Канада", "Polish": "Kannada" },
  "Malayalam": { "English": "Malayalam", "Russian": "Малаялам", "Spanish": "Malayalam", "French": "Malayalam", "German": "Malayalam", "Chinese (Simplified)": "马拉雅拉姆语", "Hindi": "मलयालम", "Portuguese (Brazil)": "Malaiala", "Ukrainian": "Малаялам", "Polish": "Malayalam" },
  "Nepali": { "English": "Nepali", "Russian": "Непальский", "Spanish": "Nepalí", "French": "Népalais", "German": "Nepalesisch", "Chinese (Simplified)": "尼泊尔语", "Hindi": "नेपाली", "Portuguese (Brazil)": "Nepalês", "Ukrainian": "Непальська", "Polish": "Nepalski" },
  "Sinhala": { "English": "Sinhala", "Russian": "Сингальский", "Spanish": "Cingalés", "French": "Cinghalais", "German": "Singhalesisch", "Chinese (Simplified)": "僧伽罗语", "Hindi": "सिंहली", "Portuguese (Brazil)": "Cingalês", "Ukrainian": "Сингальська", "Polish": "Syngaleski" },
  "Burmese": { "English": "Myanmar (Burmese)", "Russian": "Бирманский", "Spanish": "Birmano", "French": "Birman", "German": "Birmanisch", "Chinese (Simplified)": "缅甸语", "Hindi": "बर्मी", "Portuguese (Brazil)": "Birmanês", "Ukrainian": "Бірманська", "Polish": "Birmański" },
};

// Helper function to get language name in active language
function getLanguageName(langCode, inLanguage = activeLanguage) {
  if (languageNames[langCode] && languageNames[langCode][inLanguage]) {
    return languageNames[langCode][inLanguage];
  }
  if (languageNames[langCode] && languageNames[langCode]['English']) {
    return languageNames[langCode]['English'];
  }
  return langCode;
}

function renderLanguageList(filter = '') {
  languageList.innerHTML = '';
  const q = filter.trim().toLowerCase();
  const fragment = document.createDocumentFragment();
  languages.forEach(lang => {
    if (!q || lang.toLowerCase().includes(q) || getLanguageName(lang, activeLanguage).toLowerCase().includes(q)) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'language-item';
      btn.textContent = getLanguageName(lang, activeLanguage);
      btn.addEventListener('click', () => {
        activeLanguage = lang;
        localStorage.setItem('activeLanguage', lang);
        languageButton.innerHTML = `<span style="color: #FFD700; font-weight: 700;">${getLanguageName(lang, lang)}</span> <span class="arrow">▾</span>`;
        renderLanguageList(languageSearchInput.value);
        languageMenu.classList.remove('open');
        languageButton.setAttribute('aria-expanded', 'false');
      });
      fragment.appendChild(btn);
    }
  });
  languageList.appendChild(fragment);
}

languageButton.addEventListener('click', () => {
  const isOpen = languageMenu.classList.toggle('open');
  languageButton.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) languageSearchInput.focus();
});

languageSearchInput.addEventListener('input', (e) => renderLanguageList(e.target.value));

document.addEventListener('click', (e) => {
  if (!languageMenu.contains(e.target) && e.target !== languageButton) {
    languageMenu.classList.remove('open');
    languageButton.setAttribute('aria-expanded', 'false');
  }
});

// Initialize list
renderLanguageList();

// Set active language button on load
languageButton.innerHTML = `<span style="color: #FFD700; font-weight: 700;">${getLanguageName(activeLanguage, activeLanguage)}</span> <span class="arrow">▾</span>`;

// Close menu on Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    languageMenu.classList.remove('open');
    languageButton.setAttribute('aria-expanded', 'false');
    languageButton.focus();
  }
});

// Krishna animation and flute audio
const playButton = document.getElementById('playButton');
const fluteAudio = document.getElementById('fluteAudio');
const krishnaImage = document.getElementById('krishnaImage');

if (playButton && fluteAudio && krishnaImage) {
  let isPlaying = false;

  playButton.addEventListener('click', () => {
    if (!isPlaying) {
      // Start playing
      fluteAudio.play();
      krishnaImage.classList.add('playing');
      playButton.classList.add('playing');
      playButton.textContent = '🎵 Кришна играет на флейте...';
      isPlaying = true;

      // Auto stop after 15 seconds
      setTimeout(() => {
        stopFlute();
      }, 15000);
    } else {
      // Stop playing
      stopFlute();
    }
  });

  // Auto-stop when audio ends
  fluteAudio.addEventListener('ended', () => {
    stopFlute();
  });

  function stopFlute() {
    fluteAudio.pause();
    fluteAudio.currentTime = 0;
    krishnaImage.classList.remove('playing');
    playButton.classList.remove('playing');
    playButton.textContent = '🎵 Послушать флейту Кришны';
    isPlaying = false;
  }
}

// Ishvara button — play audio (path from .xlsx via API), then navigate
const ishvaraLink = document.getElementById('ishvaraLink');
if (ishvaraLink) {
  ishvaraLink.addEventListener('click', (e) => {
    e.preventDefault();
    const targetUrl = ishvaraLink.getAttribute('href');

    fetch('/api/audio/ishvara')
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => {
        const audio = new Audio(data.path);
        audio.play().catch((err) => console.error('Ошибка воспроизведения:', err));
      })
      .catch((err) => console.error('Ошибка получения пути к аудио:', err))
      .finally(() => {
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 2000);
      });
  });
}
