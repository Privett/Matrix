/* i18n.js — язык сайта (RU / EN). Подключается на ВСЕХ страницах первым.

   Как выбирается язык (по порядку):
     1. Что пользователь выбрал сам (кнопки RU/EN в нижнем меню) — хранится в localStorage и в cookie "lang".
     2. Язык браузера (navigator.languages).
     3. Если ничего не подошло — английский.

   Как переводить текст на странице:
     <h2 data-i18n="mod.stalzone.t">Русский текст по умолчанию</h2>
     Ключ ищется в словаре D ниже. Русский текст в HTML остаётся запасным, если скрипт не загрузился.

   Страница команд свою часть текстов берёт из commands-data.js, но язык — отсюда:
     I18N.lang            — текущий язык
     событие "langchange" — срабатывает при переключении (event.detail = "ru" | "en")
*/
const I18N = (() => {
  const KEY = "lang";
  const SUPPORTED = ["ru", "en"];
  // Языки браузера, для которых показываем русский (бот на них понятнее, чем английский). Правится здесь.
  const RU_LIKE = ["ru", "uk", "be"];

  const D = {
    "title.home":   { ru: "Matrix — мультибот для Discord", en: "Matrix — multi-purpose Discord bot" },
    "title.cmds":   { ru: "Matrix — команды", en: "Matrix — commands" },
    "nav.home":     { ru: "Главная", en: "Home" },
    "nav.cmds":     { ru: "Команды", en: "Commands" },
    "nav.support":  { ru: "Поддержка", en: "Support" },
    "hero.lead":    { ru: "Раздачи игр, Stalzone, калькулятор сенсы, ASCII-арт и антибот. Один бот вместо пяти.",
                      en: "Game giveaways, Stalzone tools, a sensitivity calculator, ASCII art and an anti-bot trap. One bot instead of five." },
    "btn.invite":   { ru: "Добавить на сервер", en: "Add to server" },
    "btn.cmds":     { ru: "Все команды", en: "All commands" },
    "btn.vote":     { ru: "Проголосовать", en: "Vote" },
    "mod.giveaway.t": { ru: "Раздачи игр", en: "Game giveaways" },
    "mod.giveaway.d": { ru: "Присылает бесплатные раздачи в канал и пингует нужную роль.",
                        en: "Posts free giveaways to a channel and pings the role you choose." },
    "mod.stalzone.t": { ru: "Stalzone", en: "Stalzone" },
    "mod.stalzone.d": { ru: "Уведомления о выбросах, расчёт игр до уровня и монет, привязка аккаунта.",
                        en: "Emission alerts, level and coin calculators, account linking." },
    "mod.sens.t":   { ru: "Sens Calc", en: "Sens Calc" },
    "mod.sens.d":   { ru: "Чувствительность прицеливания по FOV и зумам, даже прямо в JSON-файле.",
                      en: "Aim-down-sights sensitivity from FOV and zooms, even inside a JSON file." },
    "mod.ascii.t":  { ru: "ASCII-арт", en: "ASCII art" },
    "mod.ascii.d":  { ru: "Превращает любую картинку в символы: текстом или в виде изображения.",
                      en: "Turns any image into characters, as text or as a picture." },
    "mod.protect.t": { ru: "Антибот", en: "Anti-bot" },
    "mod.protect.d": { ru: "Любое сообщение в канале-ловушке — кик или бан. Со счётчиком киков и режимами наказаний.",
                       en: "Any message in the trap channel means a kick or ban. With a kick counter and punishment modes." }
  };

  /* ---- хранение выбора ---- */
  const readSaved = () => {
    try { const v = localStorage.getItem(KEY); if (SUPPORTED.includes(v)) return v; } catch (e) {}
    const m = document.cookie.match(/(?:^|;\s*)lang=(ru|en)/);
    return m ? m[1] : null;
  };
  const save = l => {
    try { localStorage.setItem(KEY, l); } catch (e) {}
    document.cookie = `${KEY}=${l}; max-age=31536000; path=/; SameSite=Lax`;
  };

  /* ---- определение языка браузера ---- */
  const detect = () => {
    const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    for (const raw of list) {
      const code = raw.toLowerCase().slice(0, 2);
      if (RU_LIKE.includes(code)) return "ru";
      if (code === "en") return "en";
    }
    return "en";
  };

  const api = { lang: readSaved() || detect(), t: k => (D[k] ? D[k][api.lang] : k) };

  /* ---- применение к странице ---- */
  function apply() {
    document.documentElement.lang = api.lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = D[el.dataset.i18n];
      if (v) el.textContent = v[api.lang];
    });
    document.querySelectorAll(".dock-lang button").forEach(b =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === api.lang)));
  }

  api.set = l => {
    if (!SUPPORTED.includes(l) || l === api.lang) return;
    api.lang = l;
    save(l);
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: l }));
  };

  document.addEventListener("click", e => {
    const b = e.target.closest(".dock-lang button");
    if (b) api.set(b.dataset.lang);
  });

  apply();
  return api;
})();
