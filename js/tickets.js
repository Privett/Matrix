/* tickets.js: логика страницы «Тикеты» (tickets.html).
   Данные берёт из tickets-data.js (константа TD), язык из i18n.js. Обычно тут ничего менять не нужно:
   тексты правятся в tickets-data.js, внешний вид в css/tickets.css. */
let lang = I18N.lang;                                   // язык берём из i18n.js
document.addEventListener("langchange", e => { lang = e.detail; render(); });
const $ = s => document.querySelector(s), u = k => TD.ui[lang][k];
const L = o => (o && (o[lang] ?? o.ru)) || "";           // выбрать текст нужного языка
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const settingName = key => { for (const p of TD.settings) for (const i of p.items) if (i.key === key) return L(i.name); return key; };

/* ---------- блоки ---------- */
const steps = list => `<ol class="steps">${list.map(s => `<li class="item"><div><b>${L(s.t)}</b><p>${L(s.d)}</p></div></li>`).join("")}</ol>`;
const flow = list => `<div class="flow">${list.map((s, i) => `<div class="item"><span class="n">${i + 1}</span><br><b>${L(s.t)}</b><p>${L(s.d)}</p></div>`).join("")}</div>`;
const notes = list => (list || []).map(n => `<p class="note item">${L(n)}</p>`).join("");
const ul = list => `<ul>${list.map(i => `<li>${L(i)}</li>`).join("")}</ul>`;
const blocks = list => list.map(b => `<div class="block item"><h3>${L(b.t)}</h3>${b.d ? `<p>${L(b.d)}</p>` : ""}${b.list ? ul(b.list) : ""}</div>`).join("");
const table = (cols, rows) => `<div class="wide"><table class="grid"><tr>${cols.map(c => `<th>${u(c)}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${typeof c === "string" ? `<code>${esc(c)}</code>` : L(c)}</td>`).join("")}</tr>`).join("")}</table></div>`;

/* ---------- справочник настроек ---------- */
function defText(it) {
  if (it.key in TD.defs) return L(TD.defs[it.key]);
  if (it.def === undefined) return u("none");
  if (typeof it.def === "boolean") return u(it.def ? "on" : "off");
  const o = (it.opts || []).find(o => o.v === String(it.def));
  if (o) return L(o);
  return `<code>${esc(it.def)}</code>`;
}
function setting(it) {
  const desc = L(it.desc), first = (desc.match(/^.*?[.!?](\s|$)/) || [desc])[0].trim();
  const tip = TD.tips[it.key], req = TD.required.includes(it.key);
  const rows = [[u("key"), `<code>${it.key}</code>`], [u("how"), L(it.kindLabel)], [u("def"), defText(it)]];
  if (it.max) rows.push([u("lim"), u("chars").replace("{n}", it.max)]);
  if (it.opts) rows.push([u("opts"), it.opts.map(o => `<span class="opt">${L(o)}${it.kind === "color" ? ` <code>${o.v}</code>` : ""}</span>`).join("")]);
  return `<details class="item" id="s-${it.key}"><summary><span class="sname">${L(it.name)}</span><span class="brief">${first}</span>`
    + `${req ? `<span class="tag">${u("req")}</span>` : ""}${it.cond ? `<span class="tag soft">${u("cond").replace("{x}", settingName(it.cond))}</span>` : ""}</summary>`
    + `<div class="body"><p class="tip">${desc}</p>${tip ? `<p class="tip">${L(tip)}</p>` : ""}`
    + `<table>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table></div></details>`;
}
const settings = () => TD.settings.map(p => `<div class="grp"><h3>${L(p.name)}<span class="count">${p.items.length}</span></h3>${p.items.map(setting).join("")}</div>`).join("");

/* ---------- команды (как на странице «Все команды») ---------- */
const commands = list => list.map(c => `<details class="item"><summary><code class="cmd" title="copy">${c.c}</code><span class="brief">${L(c.b)}</span>${c.a ? `<span class="tag">${u("admin")}</span>` : ""}</summary>`
  + `<div class="body">${c.o.length ? `<table><tr><td>${u("param")}</td><td>${u("desc")}</td></tr>${c.o.map(o => `<tr><td><code>${o[0]}</code></td><td>${L(o[1])}</td></tr>`).join("")}</table>` : `<p class="tip">${u("none")}</p>`}`
  + `${c.note ? `<p class="tip">${L(c.note)}</p>` : ""}</div></details>`).join("");

const faq = list => list.map(q => `<details class="item"><summary><span class="sname">${L(q.q)}</span></summary><div class="body"><p class="q-answer">${L(q.a)}</p></div></details>`).join("");

/* ---------- разделы ---------- */
const BODY = {
  start: s => steps(s.steps),
  how: s => flow(s.flow) + notes(s.notes),
  settings: () => settings(),
  queue: s => steps(s.steps) + `<h3>${L({ ru: "Кто что видит", en: "Who sees what" })}</h3><div class="block item">${table(s.who.cols, s.who.rows)}</div>` + blocks(s.blocks) + notes(s.notes),
  commands: s => commands(s.list),
  types: s => `<div class="block item">${ul(s.list)}</div>`,
  transcripts: s => blocks(s.blocks) + notes(s.notes),
  vars: s => `<div class="block item">${table(["var", "gives"], s.rows)}<div class="example"><div><small>${L({ ru: "Вы пишете", en: "You write" })}</small>${esc(L(s.example.in))}</div><div><small>${L({ ru: "Получится", en: "Result" })}</small>${esc(L(s.example.out))}</div></div></div>`,
  perms: s => `<div class="block item">${table(s.cols, s.rows)}</div>`,
  faq: s => faq(s.list),
};

function render() {
  const y = window.scrollY;                              // при смене языка список перерисовывается: запоминаем место на странице
  document.documentElement.lang = lang;
  $("#sub").textContent = u("sub"); $("#q").placeholder = u("search"); $("#foot").innerHTML = u("foot");
  $("#chips").innerHTML = TD.nav.map(([id, n]) => `<a href="#${id}">${L(n)}</a>`).join("");
  $("#list").innerHTML = TD.nav.map(([id]) => {
    const s = TD.sections[id];
    return `<section id="${id}"><h2>${L(s.t)}</h2>${L(s.d) ? `<p class="mod-desc">${L(s.d)}</p>` : ""}${BODY[id](s)}</section>`;
  }).join("");
  $("#empty").textContent = u("empty");
  filter(); watch();
  window.scrollTo(0, y);
}

/* ---------- поиск ---------- */
function filter() {
  const q = $("#q").value.trim().toLowerCase(); let shown = 0;
  document.querySelectorAll("#list > section").forEach(sec => {
    let hit = 0;
    sec.querySelectorAll(".item").forEach(el => {
      const m = !q || el.textContent.toLowerCase().includes(q);
      el.hidden = !m; if (m) hit++;
      if (el.tagName === "DETAILS") {
        if (q && m) { el.open = true; el.dataset.auto = "1"; }
        else if (!q && el.dataset.auto) { el.open = false; delete el.dataset.auto; }
      }
    });
    sec.querySelectorAll(".grp").forEach(g => { g.hidden = !!q && !g.querySelector(".item:not([hidden])"); });
    sec.hidden = !!q && !hit; if (!sec.hidden) shown++;
  });
  $("#empty").hidden = shown > 0;
}
$("#q").addEventListener("input", filter);

/* ---------- чип текущего раздела подсвечивается при прокрутке ---------- */
let io;
function watch() {
  if (io) io.disconnect();
  if (!("IntersectionObserver" in window)) return;
  io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    document.querySelectorAll("#chips a").forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-160px 0px -65% 0px" });
  document.querySelectorAll("#list > section").forEach(s => io.observe(s));
}

/* ---------- переход по якорю: нужная карточка открывается сама ---------- */
function go() {
  const id = decodeURIComponent(location.hash.slice(1)); if (!id) return;
  const el = document.getElementById(id); if (!el) return;
  if (el.tagName === "DETAILS") el.open = true;
  el.scrollIntoView({ block: "start" });
}
window.addEventListener("hashchange", go);

/* ---------- копирование команды по клику ---------- */
document.addEventListener("click", e => {
  const k = e.target.closest(".cmd"); if (!k) return;
  e.preventDefault(); const s = k.textContent;
  (navigator.clipboard ? navigator.clipboard.writeText(s) : Promise.reject())
    .then(() => { k.classList.add("ok"); k.textContent = u("copied"); setTimeout(() => { k.classList.remove("ok"); k.textContent = s }, 900) }).catch(() => {});
});

render(); go();
