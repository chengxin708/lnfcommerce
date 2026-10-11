// 全站通用：主题切换、移动端菜单、toast
(function () {
  const root = document.documentElement;
  const THEME_KEY = "lnf-theme";

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, val) {
    try { localStorage.setItem(key, val); } catch (e) { /* 忽略 */ }
  }

  const saved = safeGet(THEME_KEY);
  if (saved) root.setAttribute("data-theme", saved);

  document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
      const sync = () => {
        themeBtn.textContent = root.getAttribute("data-theme") === "light" ? "🌙" : "☀️";
      };
      sync();
      themeBtn.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        safeSet(THEME_KEY, next);
        sync();
      });
    }

    const menuBtn = document.getElementById("menuBtn");
    const links = document.querySelector(".nav-links");
    if (menuBtn && links) {
      menuBtn.addEventListener("click", () => links.classList.toggle("open"));
      links.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => links.classList.remove("open"))
      );
    }

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  });

  window.LNF = {
    store: { get: safeGet, set: safeSet },
    toast(msg) {
      let el = document.querySelector(".toast");
      if (!el) {
        el = document.createElement("div");
        el.className = "toast";
        document.body.appendChild(el);
      }
      el.textContent = msg;
      el.classList.add("show");
      clearTimeout(el._t);
      el._t = setTimeout(() => el.classList.remove("show"), 2400);
    },
  };
})();
