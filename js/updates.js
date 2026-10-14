const UPDATE_TYPES = new Set(["added", "changed", "fixed"]);
const UPDATE_SCOPES = new Set(["global", "feature"]);
const UPDATE_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function localizedText(value, field, id) {
  if (!value || typeof value.ru !== "string" || typeof value.en !== "string") {
    throw new Error(`Update "${id}" has invalid ${field}; expected Russian and English text.`);
  }
  return value;
}

function validateUpdates(payload) {
  if (!payload || !Array.isArray(payload.updates)) {
    throw new Error('Expected updates.json to contain an "updates" array.');
  }

  const ids = new Set();
  for (const entry of payload.updates) {
    if (!entry || typeof entry !== "object" || !UPDATE_ID_PATTERN.test(entry.id || "")) {
      throw new Error("Every update must have a valid kebab-case id.");
    }
    if (ids.has(entry.id)) throw new Error(`Duplicate update id "${entry.id}".`);
    ids.add(entry.id);
    const parsedDate = new Date(`${entry.date}T00:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.date) || Number.isNaN(parsedDate.valueOf())
        || parsedDate.toISOString().slice(0, 10) !== entry.date) {
      throw new Error(`Update "${entry.id}" has an invalid date; expected YYYY-MM-DD.`);
    }
    if (!UPDATE_TYPES.has(entry.type) || !UPDATE_SCOPES.has(entry.scope)) {
      throw new Error(`Update "${entry.id}" has an unsupported type or scope.`);
    }
    if (typeof entry.featured !== "boolean") {
      throw new Error(`Update "${entry.id}" must set featured to true or false.`);
    }
    localizedText(entry.title, "title", entry.id);
    localizedText(entry.summary, "summary", entry.id);
    if (!entry.details || !Array.isArray(entry.details.ru) || !Array.isArray(entry.details.en)
        || !entry.details.ru.every(line => typeof line === "string")
        || !entry.details.en.every(line => typeof line === "string")) {
      throw new Error(`Update "${entry.id}" details must be arrays of localized paragraphs.`);
    }
  }
  return [...payload.updates].sort((a, b) => b.date.localeCompare(a.date));
}

function updateDate(date, lang) {
  return new Intl.DateTimeFormat(lang, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })
    .format(new Date(`${date}T00:00:00Z`));
}

function badge(text, className) {
  const element = document.createElement("span");
  element.className = className;
  element.textContent = text;
  return element;
}

function makeUpdateSummary(entry, lang, expanded) {
  const wrapper = document.createElement("div");
  wrapper.className = "update-summary";
  const date = document.createElement("time");
  date.dateTime = entry.date;
  date.textContent = updateDate(entry.date, lang);
  wrapper.append(date);

  const content = document.createElement("div");
  content.className = "update-summary-content";
  const title = document.createElement(expanded ? "h2" : "h3");
  title.textContent = entry.title[lang];
  const badges = document.createElement("div");
  badges.className = "update-badges";
  badges.append(badge(I18N.t(`updates.type.${entry.type}`), `update-type ${entry.type}`));
  if (entry.scope === "global") badges.append(badge(I18N.t("updates.scope.global"), "update-scope"));
  content.append(title, badges);
  const summary = document.createElement("p");
  summary.textContent = entry.summary[lang];
  content.append(summary);
  wrapper.append(content);
  return wrapper;
}

function renderHomeUpdates(updates) {
  const list = document.querySelector("#updates-preview-list");
  const featured = updates.filter(entry => entry.featured).slice(0, 3);
  list.replaceChildren();
  if (!featured.length) {
    const empty = document.createElement("p");
    empty.className = "updates-empty";
    empty.textContent = I18N.t("updates.empty");
    list.append(empty);
    return;
  }

  for (const entry of featured) {
    const link = document.createElement("a");
    link.className = "home-update";
    link.href = `updates.html#${entry.id}`;
    link.append(makeUpdateSummary(entry, I18N.lang, false));
    list.append(link);
  }
}

function renderArchive(updates) {
  const list = document.querySelector("#updates-list");
  list.replaceChildren();
  if (!updates.length) {
    const empty = document.createElement("p");
    empty.className = "updates-empty";
    empty.textContent = I18N.t("updates.empty");
    list.append(empty);
    return;
  }

  for (const entry of updates) {
    const details = document.createElement("details");
    details.className = "update-entry";
    details.id = entry.id;
    const summary = document.createElement("summary");
    summary.append(makeUpdateSummary(entry, I18N.lang, true));
    details.append(summary);

    const body = document.createElement("div");
    body.className = "update-details";
    for (const paragraph of entry.details[I18N.lang]) {
      const p = document.createElement("p");
      p.textContent = paragraph;
      body.append(p);
    }
    details.append(body);
    list.append(details);
  }

  openHashEntry();
}

function openHashEntry() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = id && document.getElementById(id);
  if (target && target.tagName === "DETAILS" && target.classList.contains("update-entry")) target.open = true;
}

async function loadUpdates() {
  const response = await fetch("updates.json", { cache: "no-cache" });
  if (!response.ok) throw new Error(`Could not load updates.json (${response.status}).`);
  return validateUpdates(await response.json());
}

async function initUpdates() {
  const host = document.querySelector("#updates-preview-list, #updates-list");
  if (!host) return;
  try {
    const updates = await loadUpdates();
    const render = () => {
      if (document.querySelector("#updates-list")) renderArchive(updates);
      else renderHomeUpdates(updates);
    };
    render();
    document.addEventListener("langchange", render);
    window.addEventListener("hashchange", openHashEntry);
  } catch (error) {
    console.error("Unable to render Matrix updates:", error);
    const message = document.createElement("p");
    message.className = "updates-error";
    message.setAttribute("role", "alert");
    message.textContent = I18N.t("updates.loadError");
    host.replaceChildren(message);
  }
}

initUpdates();
