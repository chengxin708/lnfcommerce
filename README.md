# LNF Commerce · 小游戏与轻应用实验室

一个专门上线各类网页小游戏和轻应用的站点。纯静态（HTML + CSS + 原生 JS），无需构建，可直接部署到 GitHub Pages / Vercel / Netlify / 任意静态服务器。

## 已有内容

| 类型 | 名称 | 路径 | 状态 |
| --- | --- | --- | --- |
| 小游戏 | 贪吃蛇 Neo | `games/snake.html` | 已上线 |
| 小游戏 | 2048 | `games/2048.html` | 已上线 |
| 小游戏 | 记忆翻牌 | `games/memory.html` | 已上线 |
| 应用 | 番茄钟 | `apps/pomodoro.html` | 已上线 |
| 应用 | 今天吃什么（转盘） | `apps/picker.html` | 公测中 |
| 小游戏 | 方块消除 / 像素小鸟 | — | 开发中 |
| 应用 | 极简记账 | — | 开发中 |

首页包含：作品库（搜索 + 分类筛选）、开发流程、路线图、开发日志、投稿表单，支持深浅色主题和手机端。

## 目录结构

```
index.html            首页
404.html              404 页面
assets/css/style.css  全站样式（含游戏页通用样式）
assets/js/main.js     主题切换、菜单、toast、本地存储封装
assets/js/catalog.js  作品目录数据（新增作品改这里）
assets/js/home.js     首页渲染逻辑
games/                小游戏页面
apps/                 应用页面
```

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 如何上架一个新作品

1. 在 `games/` 或 `apps/` 下新建一个 HTML 页面（可复制现有页面作为模板，保留顶部导航和 `../assets/` 引用）。
2. 在 `assets/js/catalog.js` 里加一条记录：

```js
{
  id: "my-game",
  type: "game",            // game | app
  title: "我的游戏",
  desc: "一句话介绍",
  emoji: "🎯",
  color: "linear-gradient(135deg,#7c5cff,#20d3c2)",
  tags: ["休闲"],
  status: "beta",          // live | beta | dev（dev 不可点击）
  version: "0.1.0",
  url: "games/my-game.html",
}
```

3. 首页会自动显示该作品，统计数字也会同步更新。

## 部署到 GitHub Pages

仓库 Settings → Pages → Source 选择对应分支和根目录即可。已包含 `.nojekyll`。

## 后续可做

- 投稿表单接入后端（目前保存在浏览器 localStorage，仅作演示）
- 账号系统与排行榜
- PWA 离线安装
