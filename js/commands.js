/* commands.js — логика страницы команд: поиск, фильтры, копирование.
   Данные берёт из commands-data.js (T и M). Обычно тут ничего менять не нужно. */
let lang=I18N.lang;                                   // язык берём из i18n.js
document.addEventListener("langchange",e=>{lang=e.detail;render()});
let mod="all";
const $=s=>document.querySelector(s), t=k=>T[lang][k];

function render(){
  $("#sub").textContent=t("sub"); $("#q").placeholder=t("search"); $("#foot").innerHTML=t("foot");
  $("#chips").innerHTML=[["all",t("all")],...M.map(m=>[m.id,m.n[lang]])].map(([i,n])=>`<button data-m="${i}" aria-pressed="${i===mod}">${n}</button>`).join("");
  const q=$("#q").value.trim().toLowerCase(); let shown=0;
  $("#list").innerHTML=M.filter(m=>mod==="all"||m.id===mod).map(m=>{
    const cs=m.c.filter(c=>!q||(c.c+" "+c.b[lang]+" "+c.o.map(o=>o[0]+" "+o[1][lang]).join(" ")).toLowerCase().includes(q));
    if(!cs.length)return ""; shown+=cs.length;
    return `<section data-m="${m.id}" id="${m.id}"><h2>${m.n[lang]}</h2>${m.d[lang]?`<p class="mod-desc">${m.d[lang]}</p>`:""}`+cs.map(c=>`
      <details${q?" open":""}><summary><code class="cmd" title="copy">${c.c}</code><span class="brief">${c.b[lang]}</span>${c.a?`<span class="tag">${t("admin")}</span>`:""}</summary>
      <div class="body">${c.o.length?`<table><tr><td>${t("param")}</td><td>${t("desc")}</td></tr>${c.o.map(o=>`<tr><td><code>${o[0]}</code>${o[2]?` <span class="brief">(${t("opt")})</span>`:""}</td><td>${o[1][lang]}</td></tr>`).join("")}</table>`:`<p class="none">${t("none")}</p>`}${c.note?`<p class="none">${c.note[lang]}</p>`:""}</div></details>`).join("")+`</section>`;
  }).join("");
  $("#empty").hidden=shown>0; $("#empty").textContent=t("empty");
}
document.addEventListener("click",e=>{
  const c=e.target.closest(".chips button"); if(c){mod=c.dataset.m;render();return}
  const k=e.target.closest(".cmd"); if(k){e.preventDefault();const s=k.textContent;
    (navigator.clipboard?navigator.clipboard.writeText(s):Promise.reject()).then(()=>{k.classList.add("ok");k.textContent=t("copied");setTimeout(()=>{k.classList.remove("ok");k.textContent=s},900)}).catch(()=>{})}
});
$("#q").addEventListener("input",render);
render();
