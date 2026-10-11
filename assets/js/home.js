// 首页：渲染作品目录、搜索与筛选、投稿表单
(function () {
  const STATUS = {
    live: { text: "已上线", cls: "status-live" },
    beta: { text: "公测中", cls: "status-beta" },
    dev: { text: "开发中", cls: "status-dev" },
  };

  const state = { type: "all", q: "" };
  const items = window.LNF_CATALOG || [];

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function cardHtml(it) {
    const st = STATUS[it.status];
    const playable = it.status !== "dev" && it.url;
    const label = it.type === "game" ? "开始游戏" : "打开应用";
    return `
      <article class="card ${playable ? "" : "disabled"}">
        <div class="card-cover" style="background:${it.color}">${it.emoji}</div>
        <div class="card-body">
          <h3 class="card-title">${escapeHtml(it.title)}
            <span class="status ${st.cls}">${st.text}</span></h3>
          <p class="card-desc">${escapeHtml(it.desc)}</p>
          <div class="tags">${it.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
          <div class="card-foot">
            <span>v${escapeHtml(it.version)}</span>
            ${playable
              ? `<a class="btn btn-primary btn-sm" href="${it.url}">${label} →</a>`
              : `<span class="btn btn-ghost btn-sm">敬请期待</span>`}
          </div>
        </div>
      </article>`;
  }

  function render() {
    const grid = document.getElementById("catalog");
    const q = state.q.trim().toLowerCase();
    const list = items.filter((it) => {
      if (state.type === "dev") {
        if (it.status !== "dev") return false;
      } else if (state.type !== "all" && it.type !== state.type) return false;
      if (!q) return true;
      return [it.title, it.desc, ...it.tags].join(" ").toLowerCase().includes(q);
    });
    grid.innerHTML = list.length
      ? list.map(cardHtml).join("")
      : `<div class="empty">没有找到匹配的作品，换个关键词试试 🔍</div>`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    // 统计数字
    const count = (fn) => items.filter(fn).length;
    document.getElementById("statGames").textContent = count((i) => i.type === "game");
    document.getElementById("statApps").textContent = count((i) => i.type === "app");
    document.getElementById("statDev").textContent = count((i) => i.status === "dev");

    document.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        state.type = chip.dataset.type;
        render();
      });
    });

    document.getElementById("search").addEventListener("input", (e) => {
      state.q = e.target.value;
      render();
    });

    render();

    // 投稿表单：纯前端演示，保存到本地并提示
    const form = document.getElementById("submitForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      let list = [];
      try { list = JSON.parse(LNF.store.get("lnf-submissions") || "[]"); } catch (err) { list = []; }
      list.push({ ...data, at: new Date().toISOString() });
      LNF.store.set("lnf-submissions", JSON.stringify(list));
      form.reset();
      LNF.toast("🎉 已收到你的投稿，我们会尽快联系你！");
    });
  });
})();
