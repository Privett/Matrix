(function () {
  // ---------- i18n ----------
  const dict = {
    ru: {
      "nav.title": "Matrix • discord бот",
      "nav.features": "Возможности",
      "nav.examples": "Примеры",
      "nav.guilds": "Для сервера",
      "nav.faq": "FAQ",
      "nav.support": "Поддержать",
      "nav.addbot": "Добавить бота",

      "hero.title": "Бот, который сам находит раздачи и шлёт их в твой Discord.",
      "hero.sub": "отслеживает раздачи игр и DLC (Epic Games, Steam; GOG — частично) и отправляет уведомления в Discord в формате embed.",
      "hero.invite": "Пригласить Matrix на сервер",
      "hero.see": "Смотреть, как выглядит выдача",
      "hero.meta.sourcesLabel": "Источники:",
      "hero.meta.sourcesValue": "Epic Games, Steam; GOG — частично",
      "hero.meta.setupLabel": "Настройка:",
      "hero.meta.setupValue": "по запросу под ваш сервер",
      "hero.cardTag": "БОТ • matrix#8445",
      "hero.chip": "бот",
      "hero.lastGiveaway": "последняя активная раздача",
      "hero.embedDesc": "100% скидка в магазине. Забери, пока не закончилось.",
      "hero.embedMeta1": "Цена: $0.00 (-100%)",
      "hero.embedMeta2": "Тип: Game",
      "hero.embedMeta3": "До: 11 декабря, 16:00 UTC",

      "features.title": "Что делает Matrix",
      "features.sub": "Matrix находит раздачи игр и DLC и отправляет уведомления в выбранный канал. Доп. настройки под сервер возможны по запросу.",
      "features.c1t": "Поиск раздач",
      "features.c1d": "Проверяет источники раздач: Epic Games и Steam, GOG — частично. Берёт только реально бесплатное.",
      "features.c2t": "Уведомления в канал",
      "features.c2d": "Уведомления идут в один выбранный канал на сервере. Формат — Discord embed.",
      "features.c3t": "Команды под сервер",
      "features.c3d": "Если надо — можно адаптировать команды/поведение под конкретный сервер. Панели настроек нет.",

      "examples.title": "Как выглядят уведомления",
      "examples.sub": "Примеры embed-сообщений как в Discord: заголовок, описание, цена, даты и обложка.",

      "guilds.title": "Под каждый сервер — свои правила",
      "guilds.sub": "По запросу можно адаптировать команды или поведение Matrix под конкретный сервер.",
      "guilds.cardTitle": "Как это работает",
      "guilds.li1": "Команды/поведение — по запросу. Если нужно, я могу подстроить Matrix под конкретный сервер.",
      "guilds.li2": "Один канал для уведомлений. Все раздачи игр и DLC отправляются в один выбранный канал.",
      "guilds.li3": "Фильтры — внутри бота. Пользовательских фильтров сейчас нет.",
      "guilds.li4": "Локализация — позже. Сейчас один формат дат/времени, позже добавлю локализацию.",

      "steps.s1l": "Шаг 1",
      "steps.s1t": "Пригласи Matrix",
      "steps.s1d": "Добавь бота по ссылке выше и выдай ему права на чтение и отправку сообщений в нужных каналах.",
      "steps.s2l": "Шаг 2",
      "steps.s2t": "Выбери канал для уведомлений",
      "steps.s2d1": "Открой текстовый канал на сервере и выполни команду",
      "steps.s2d2": "По умолчанию команда отправляет раздачи без упоминания ролей и не удаляет завершённые раздачи. При необходимости ты можешь выбрать роль для упоминаний и включить авто-удаление после окончания раздач.",

      "faq.title": "Ответы на частые вопросы",
      "faq.sub": "Если чего-то не хватает или нужна другая логика — можно обсудить и добавить по запросу.",
      "faq.q1": "Matrix бесплатный?",
      "faq.a1": "Да, сейчас Matrix бесплатный. Поддержка (Patreon/крипта) — добровольная.",
      "faq.q2": "Нужны ли права администратора?",
      "faq.a2": "Нет. Достаточно прав на чтение/отправку сообщений в выбранном канале.",
      "faq.q3": "Какие площадки поддерживаются?",
      "faq.a3": "Epic Games и Steam. GOG — частично.",
      "faq.q4": "Можно ли сделать настройки только для одного сервера?",
      "faq.a4": "Да. Если нужно особое поведение/команды — можно договориться и сделать под ваш сервер.",

      "footer.copy": "© 2025 Matrix Bot.",
      "footer.support": "Сервер поддержки",
      "footer.sitecode": "GitHub (код сайта)",

      "support.title": "Поддержать Matrix",
      "support.sub": "Matrix бесплатный. Поддержка добровольная — чтобы проект не замораживался.",
      "support.copy": "📋 Копировать",
      "support.tonHint": "Отправляй строго в сети TON",
      "support.trcHint": "Отправляй строго в сети TRC-20",
      "support.patreonTitle": "Подписка",
      "support.patreonSub": "Если хочешь поддерживать регулярно — можно через Patreon.",
      "support.patreonBtn": "Открыть Patreon",
      "support.close": "Закрыть"
    },

    en: {
      "nav.title": "Matrix • discord bot",
      "nav.features": "Features",
      "nav.examples": "Examples",
      "nav.guilds": "For servers",
      "nav.faq": "FAQ",
      "nav.support": "Support",
      "nav.addbot": "Add bot",

      "hero.title": "A bot that finds giveaways and posts them to your Discord.",
      "hero.sub": "Matrix tracks game/DLC giveaways (Epic Games, Steam; GOG — partial) and posts Discord embed notifications.",
      "hero.invite": "Invite Matrix to your server",
      "hero.see": "See how it looks",
      "hero.meta.sourcesLabel": "Sources:",
      "hero.meta.sourcesValue": "Epic Games, Steam; GOG — partial",
      "hero.meta.setupLabel": "Setup:",
      "hero.meta.setupValue": "on request for your server",
      "hero.cardTag": "BOT • matrix#8445",
      "hero.chip": "bot",
      "hero.lastGiveaway": "latest active giveaway",
      "hero.embedDesc": "100% discount in the store. Grab it before it ends.",
      "hero.embedMeta1": "Price: $0.00 (-100%)",
      "hero.embedMeta2": "Type: Game",
      "hero.embedMeta3": "Ends: Dec 11, 16:00 UTC",

      "features.title": "What Matrix does",
      "features.sub": "Matrix finds game/DLC giveaways and posts them to a selected channel. Extra per-server tweaks can be done on request.",
      "features.c1t": "Giveaway tracking",
      "features.c1d": "Checks sources: Epic Games and Steam, GOG — partial. Saves only truly free offers.",
      "features.c2t": "Channel notifications",
      "features.c2d": "Posts into one selected channel per server. Format — Discord embed.",
      "features.c3t": "Server-specific behavior",
      "features.c3d": "If needed, commands/behavior can be adjusted per server. No public dashboard yet.",

      "examples.title": "How notifications look",
      "examples.sub": "Embed examples like in Discord: title, description, price, dates and cover.",

      "guilds.title": "Rules per server",
      "guilds.sub": "On request, Matrix can be adjusted for your server.",
      "guilds.cardTitle": "How it works",
      "guilds.li1": "Commands/behavior — on request. If needed, Matrix can be tailored for a specific server.",
      "guilds.li2": "One notification channel. All game/DLC giveaways go to the selected channel.",
      "guilds.li3": "Filters are internal. No user-configurable filters yet.",
      "guilds.li4": "Localization later. One date/time format for now; localization planned.",

      "steps.s1l": "Step 1",
      "steps.s1t": "Invite Matrix",
      "steps.s1d": "Add the bot and grant read/send permissions in the needed channels.",
      "steps.s2l": "Step 2",
      "steps.s2t": "Pick a notification channel",
      "steps.s2d1": "Open a text channel on your server and run the command",
      "steps.s2d2": "By default, the command posts giveaways without role mentions and does not remove ended giveaways. You can optionally select a role to mention and enable automatic removal after giveaways end.",


      "faq.title": "FAQ",
      "faq.sub": "If something is missing or you want different logic — we can discuss and add it on request.",
      "faq.q1": "Is Matrix free?",
      "faq.a1": "Yes. Support (Patreon/crypto) is optional.",
      "faq.q2": "Do I need admin permissions?",
      "faq.a2": "No. Read/send permissions in the selected channel are enough.",
      "faq.q3": "Which sources are supported?",
      "faq.a3": "Epic Games and Steam. GOG — partial.",
      "faq.q4": "Can I get custom setup for one server?",
      "faq.a4": "Yes. If you need special behavior/commands, it can be arranged.",

      "footer.copy": "© 2025 Matrix Bot.",
      "footer.support": "Support server",
      "footer.sitecode": "GitHub (site code)",

      "support.title": "Support Matrix",
      "support.sub": "Matrix is free. Support is optional to keep the project going.",
      "support.copy": "📋 Copy",
      "support.tonHint": "Send only on TON network",
      "support.trcHint": "Send only on TRC-20 network",
      "support.patreonTitle": "Subscription",
      "support.patreonSub": "For recurring support — Patreon.",
      "support.patreonBtn": "Open Patreon",
      "support.close": "Close"
    }
  };

  function setLang(lang) {
    const pack = dict[lang] ? lang : "ru";
    document.documentElement.lang = pack;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[pack][key];
      if (typeof val === "string") el.textContent = val;
    });

    document.querySelectorAll(".lang-btn").forEach(b => {
      b.classList.toggle("is-active", b.dataset.lang === pack);
    });

    localStorage.setItem("lang", pack);
  }

  const saved = localStorage.getItem("lang");
  const initial = saved || (navigator.language || "ru").toLowerCase().startsWith("en") ? "en" : "ru";
  setLang(initial);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // ---------- modal ----------
  const modal = document.getElementById("support-modal");
  const openBtn = document.querySelector("[data-support-open]");
  const closeEls = modal.querySelectorAll("[data-support-close]");
  let lastFocus = null;

  function openModal() {
    lastFocus = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const focusTarget = modal.querySelector(".modal-x");
    if (focusTarget) focusTarget.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  if (openBtn) openBtn.addEventListener("click", openModal);
  closeEls.forEach((el) => el.addEventListener("click", closeModal));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  // Copy buttons inside modal
  modal.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy-btn]");
    if (!btn) return;

    const card = btn.closest(".support-card-mini");
    const box = card?.querySelector(".support-address");
    const text = box?.getAttribute("data-copy")?.trim();
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    const old = btn.textContent;
    btn.textContent = (document.documentElement.lang === "en") ? "✅ Copied" : "✅ Скопировано";
    setTimeout(() => (btn.textContent = old), 1200);
  });
})();
