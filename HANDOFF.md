# ZigZag China 项目交接（下一窗口从这里开始）

更新时间：2026-08-26（Asia/Shanghai）

## 30 秒看懂当前状态

- 项目目录：`/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`
- 公开首页：<https://zigzagchina.netlify.app/>
- About 页面：<https://zigzagchina.netlify.app/about>
- GitHub：<https://github.com/yangsizhe351-ux/zigzagchina>
- 当前分支：`main`
- 最新功能提交：`3976489`（压缩 About 页面，使桌面端首屏显示三个版块）；交接文档更新以 `main` 当前 HEAD 为准。
- 部署方式：Netlify 自动部署 GitHub `main`，这是唯一正式发布链路。
- 当前状态：`main` 与 `origin/main` 同步，工作区在本交接文件更新前无代码改动。

当前版本是面向美国用户的成都、重庆私人向导品牌网站。它不是纯长单页：主页保留目的地、体验和预约内容，About Us 已拆成独立的 `/about` 页面。

## 当前页面结构

### 首页 `/`

- 英文、法文、中文三语切换
- Hero 主文案：`Explore Southwestern China`
- 副标语：`Chilli & Chill Journeys`
- 成都、重庆入口卡片
- Destinations 城市介绍
- 4 个 Experiences 体验卡片及详情弹层
- Booking 预约区和邮件入口
- 响应式导航及移动端菜单

首页导航顺序固定为：

1. About Us → `/about`
2. Destinations → `#destinations`
3. Experiences → `#experiences`
4. Book Your Trip → `#booking`

### About 页面 `/about`

- 独立路由，不再嵌在首页长页面中。
- 内容分为 `About Us`、`Why Choose Us?`、`What to Expect?` 三个版块。
- 桌面端采用左右布局：左侧品牌主张，右侧三个正文版块。
- 已缩小标题、正文、上下留白和版块间距；在 1280×720 视口中三个版块可同时出现在首屏。
- 正文使用自然左对齐和均衡换行，不要恢复强制两端对齐；强制对齐曾造成明显的单词间距拉伸。
- `ZigZag China` 在首段中加粗并略大于正文。
- 移动端自动改为上下排列，允许正常纵向滚动。

`public/_redirects` 提供 SPA 回退，因此直接打开 `/about` 也能正常加载。

## 英文与文案基线

网站面向美国用户，英文统一使用美式拼写，例如：

- `neighborhoods`
- `flavors`
- `travelers`
- `favorite`
- `handcrafted`

当前首页关键英文：

- `Uncover the hidden gems of an enchanting land…`
- `Explore Southwestern China`
- `Chilli & Chill Journeys`
- 成都：`Giant pandas · Tea houses · Sichuan flavors`
- 重庆：`Spicy hotpot · Vibrant nights · Rivers & bridges`

Hero 顶部说明后面原有的黄色圆点已经删除，不要恢复。

三语 About 内容都存放在 `src/content.js` 的 `aboutSections` 中。内容检查要求每种语言必须有三个完整版块。

## 品牌与图片基线

当前实际使用的新品牌标记：

- `assets/brand/zigzag-mark-new.png`
- 透明底 PNG，页面 Header 和加载状态均引用此文件。
- 旧的 `zigzag-mark-02.png` 不再是当前页面基线。

页面三个大区块的背景图：

| 文件 | 用途 |
| --- | --- |
| `assets/images/generated/cdqc-tea-lane.jpg` | Destinations 介绍区 |
| `assets/images/generated/cdqc-chongqing-hillside-night.jpg` | Experiences 区 |
| `assets/images/generated/cdqc-sichuan-table.jpg` | Booking 区 |

体验卡片和城市图片继续使用 `assets/images/webp/` 下的已有文件。不要随意重新生成、替换或混用这些图片。

## 当前产品范围

保留功能：

- 三语内容
- 首页和独立 About 页面
- 成都、重庆城市卡片
- 4 个体验详情弹层
- 城市卡片直接打开对应体验
- 弹层 CTA 回到预约区，并使用体验名称生成邮件主题
- 预订邮箱：`yangsizhe351@gmail.com`
- PayPal 仅作为支付方式说明文字，尚未接入在线付款

明确不在当前产品范围：搜索、路线详情、旅程收藏与分享、实用指南、候补名单表单。仓库中的旧字段或 Supabase 数据层不代表这些功能需要恢复。

## 关键文件

- `src/main.jsx`：主页、About 页面路由、导航、语言切换、弹层和预约交互
- `src/styles.css`：主页与 About 页面视觉、响应式和动效
- `src/content.js`：英文、法文、中文内容
- `scripts/check-content.mjs`：内容字段、版块数量和多语言基线检查
- `src/lib/contentRepository.js`：可选 Supabase 内容读取；未配置时使用本地内容
- `assets/brand/zigzag-mark-new.png`：当前 Logo
- `assets/images/generated/`：三个选定的大区块背景图
- `assets/images/webp/`：城市和体验卡片图片
- `public/_redirects`：Netlify SPA 路由回退
- `netlify.toml`、`vite.static.config.js`：Netlify 静态构建配置
- `dist-netlify/`：Netlify 发布目录，由构建生成，当前仓库会跟踪它

## 本地运行与验证

```bash
npm install
npm run dev
```

默认本地地址：`http://127.0.0.1:5173/`

提交前必须运行：

```bash
npm run check
git diff --check
git status --short --branch
```

`npm run check` 会执行三语内容检查，并重新生成 `dist-netlify` 静态生产构建。不要直接编辑压缩后的构建文件。

2026-08-26 已验证：

- 三种语言、4 个导航项、4 个体验和 3 个 About 版块通过内容检查。
- Netlify 静态生产构建成功。
- 首页和 `/about` 均返回 HTTP 200。
- About 页面在 1280×720 下三个版块都位于首屏，正文为自然左对齐，浏览器控制台无错误。
- 当前线上资源：JS `assets/index-_SuzXQ4k.js`，CSS `assets/index-CqRzrTk0.css`。

## 提交与部署

标准流程：

1. 修改 `src/`、`assets/`、`public/` 或 `index.html` 的源文件。
2. 运行 `npm run check`。
3. 检查差异和工作区状态。
4. 提交源文件及重新生成的 `dist-netlify`。
5. 推送 `main`，等待 Netlify 自动发布。
6. 打开首页和 `/about` 验证线上资源。

本机浏览器使用 macOS 系统代理，但终端不一定自动继承。若浏览器网络正常、GitHub 推送却连接 `github.com:443` 超时：

1. 先运行 `scutil --proxy` 确认当前代理地址和端口。
2. 只为本次推送指定代理，不要擅自写入全局 Git 配置。
3. 2026-08-26 使用过的临时命令为：

```bash
git -c http.proxy=http://127.0.0.1:1087 push origin main
```

端口可能变化，必须以当时 `scutil --proxy` 的结果为准。

## 最近关键提交

- `3976489`：压缩 About 页面，修复正文间距，桌面端首屏显示三个版块
- `756afa5`：首页大小写和关键词调整，删除 Hero 黄色圆点
- `7a1a0a7`：About 页面改为左右布局
- `777ac7e`：About 正文加大并突出 `ZigZag China`
- `de52337`：About Us 从首页拆成独立 `/about` 页面
- `eb80c2a`：加入三段 About 文案并统一美式英语
- `cb63944`：更新首页文案和新 Logo

## 后续仍需处理

1. 购买并绑定正式域名，配置 DNS 和 Netlify HTTPS。
2. 域名确定后补 canonical URL、站点地图及 OG / X 分享图。
3. 补充服务说明、取消与改期规则、隐私政策和正式联系方式。
4. 如未来确实需要后台编辑内容，再单独评估 Supabase；它不是当前上线前置条件。

## 下一窗口第一步

先读本文件，再查看 `src/main.jsx`、`src/styles.css`、`src/content.js`。随后运行：

```bash
git status --short --branch
git log -3 --oneline
npm run check
```

默认基线是 `main` 最新提交和当前 Netlify 线上版本。继续修改时保持小步调整，不做大规模重构，不恢复已明确删除的功能。
