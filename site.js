const $ = (s, r = document) => r.querySelector(s);
const img = s => `assets/drinks/${s}.png`;
const money = n => `$${n.toFixed(2)}`;
const priceOf = (slug, g) => PRICE_FIX[slug] ?? g.price;
const groupOf = slug => MENU.find(g => g.items.includes(slug));
const chip = (s, checked) => `<label><input type="radio" name="base" value="${s}"${checked ? " checked" : ""}><span><img src="${img(s)}" alt="">${drinkName(s)}</span></label>`;

// marquee: every icon, doubled so the loop is seamless
const all = MENU.flatMap(g => g.items);
$("#marquee").innerHTML = [...all, ...all].map(s => `<img src="${img(s)}" alt="" loading="lazy">`).join("");

// featured
$("#featured-grid").innerHTML = FEATURED.map((s, i) => {
  const g = groupOf(s);
  return `<a class="feat" href="#build" data-pick="${s}" style="--i:${i}"><img src="${img(s)}" alt=""><strong>${drinkName(s)}</strong><span>${money(priceOf(s, g))} · ${g.name}</span></a>`;
}).join("");

// menu
$("#pills").innerHTML = MENU.map(g => `<a href="#g-${g.id}" data-id="${g.id}">${g.name}</a>`).join("");
$("#menu-groups").innerHTML = MENU.map(g => `
  <div class="group" id="g-${g.id}">
    <div class="group-head"><h3>${g.name}</h3><small>${g.tag}</small><span class="from">from ${money(g.price)}</span></div>
    <div class="grid">${g.items.map(s => `
      <button type="button" class="card" data-pick="${s}" data-name="${drinkName(s).toLowerCase()}">
        <img src="${img(s)}" alt="" loading="lazy"><b>${drinkName(s)}</b><span>${money(priceOf(s, g))}</span>
      </button>`).join("")}</div>
  </div>`).join("") + `<p class="empty hide" id="empty">Nothing matches. Try "mango" or "oolong".</p>`;

$("#search").addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  let shown = 0;
  document.querySelectorAll(".group").forEach(g => {
    let n = 0;
    g.querySelectorAll(".card").forEach(c => { const ok = !q || c.dataset.name.includes(q); c.classList.toggle("hide", !ok); n += ok; });
    g.classList.toggle("hide", !n); shown += n;
  });
  $("#empty").classList.toggle("hide", shown > 0);
});

// highlight the pill for whichever group is on screen
const pills = [...document.querySelectorAll(".pills a")];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) pills.forEach(p => p.classList.toggle("on", p.dataset.id === e.target.id.slice(2)));
}), { rootMargin: "-30% 0px -60% 0px" });
document.querySelectorAll(".group").forEach(g => io.observe(g));

// builder
const BASES = ["pearl-milk-tea","thai-milk-tea","taro-pearl-milk-tea","brown-sugar-latte","jasmine-green-tea","mango-royal-tea","lychee-green-tea","matcha-fresh-milk","milk-vietnamese-coffee","strawberry-smoothie"];
$("#base-chips").innerHTML = BASES.map((s, i) => chip(s, !i)).join("");

const form = $("#build-form");
function render() {
  const f = new FormData(form);
  const base = f.get("base");
  const tops = f.getAll("top");
  const total = priceOf(base, groupOf(base)) + tops.length * 0.75;
  $("#t-img").src = img(base);
  $("#t-name").textContent = drinkName(base);
  $("#t-opts").textContent = `${f.get("sweet")} sweet · ${f.get("ice")}`;
  $("#t-tops").innerHTML = tops.length ? tops.map(t => `<li>${t}<span>+$0.75</span></li>`).join("") : `<li class="muted">no extra toppings</li>`;
  $("#t-total").textContent = money(total);
}
form.addEventListener("change", render);
render();

// clicking any drink sends it to the builder (adds it as a base if it isn't one yet)
document.addEventListener("click", e => {
  const el = e.target.closest("[data-pick]");
  if (!el) return;
  const s = el.dataset.pick;
  if (!form.querySelector(`input[name=base][value="${s}"]`)) $("#base-chips").insertAdjacentHTML("afterbegin", chip(s));
  form.querySelector(`input[name=base][value="${s}"]`).checked = true;
  render();
  if (el.tagName === "BUTTON") $("#build").scrollIntoView({ behavior: "smooth" });
});
