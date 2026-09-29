/* home.js — главная: при наведении на карточку модуля меняется цвет фона.
   Цвет карточки берётся из data-t="R,G,B" в index.html. */
const root = document.documentElement.style;
const DEFAULT_TINT = "255,201,51";
document.querySelectorAll(".mod").forEach(card => {
  const on  = () => root.setProperty("--tint", card.dataset.t);
  const off = () => root.setProperty("--tint", DEFAULT_TINT);
  card.addEventListener("mouseenter", on);  card.addEventListener("focus", on);
  card.addEventListener("mouseleave", off); card.addEventListener("blur", off);
});
