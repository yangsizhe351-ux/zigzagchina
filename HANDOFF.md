# ZigZag China 项目交接

更新时间：2026-08-30 19:28（Asia/Shanghai）

## 30 秒看懂当前状态

- 本地项目：`/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`
- GitHub：<https://github.com/yangsizhe351-ux/zigzagchina>
- 生产站：<https://zigzagchina.netlify.app/>
- 本地主分支：`main`
- 当前功能基线：`c99fd2f`（首页转化、资质页、无障碍、短屏修复与单一构建链路）
- 正式发布链路：GitHub `main` → Netlify 自动构建；不要上传本地构建产物。
- 发布状态：`c99fd2f` 仅在本地，尚未推送或部署；`origin/main` 仍为 `57dd73b`。
- 旅游产品的价格、时长、人数、包含项、政策和真人资料尚待业务负责人提供，不要自行补写。

源代码与 Git 提交是事实来源。本文件记录“本地集成基线、远端基线、线上状态”三者，不把脏工作区或预览站误写成正式发布。

## 已完成的当前修复

### 首页与跳转

- Hero 已明确为成都、重庆私人本地向导服务，加入主 CTA 和体验入口。
- 成都/重庆入口不再错误打开一个固定体验；现在会滚动到体验区并筛选对应城市。
- 体验 CTA 会把选择带到预约区，预约区可见、可移除已选体验。
- PayPal 改为“确认日期、行程与价格后才付款”的说明，不再造成当前可付款的误解。
- 语言选择从 `localStorage` 恢复，刷新后不会自动回到英文。

### 信任与页面

- 新增 `/business-credentials`，并从全站 Footer 提供入口。
- 资质页展示经营主体、许可证号、许可范围与法定代表人；不提供高清证件、二维码、投资人或完整注册地址下载。
- `/about`、资质页和首页均有正确的 `header` / `main` / `footer` 结构及跳转到正文链接。

公开前仍必须由业务负责人确认资质信息、英文/法文翻译和个人姓名的公开授权。代码中的当前数据：

- 经营主体：`重庆渝养恬年文化旅游有限公司`
- 许可证号：`L-CQ-101179`
- 许可范围：境内旅游业务、入境旅游业务
- 法定代表人：`阳书美`

### 无障碍与响应式

- 体验弹层具备可访问名称、初始焦点、焦点循环、Esc 关闭、背景 `inert`、滚动锁定和关闭后焦点恢复。
- ARIA 标签随英文、法文、中文切换。
- Hero 指针效果使用 `requestAnimationFrame + ref`，不再因鼠标移动反复重渲染整个 App。
- 320×568 短屏隐藏次要信息并保留清晰主 CTA；平板 Footer 与体验网格新增中间断点。

### 工程基线

- 正式链路收敛为 Vite 静态构建；删除未采用的 Vinext/RSC 配置、脚本与依赖。
- Node 版本固定为 22（`.nvmrc` 与 `package.json#engines`）。
- 构建工具移入 `devDependencies`。
- `dist-netlify/` 不再由 Git 跟踪，但本地构建仍会生成它；这消除了各 Worktree 最频繁的合并冲突。
- `npm install --package-lock-only --ignore-scripts --offline` 已更新锁文件，依赖审计结果为 0 个漏洞。

## 当前页面和产品范围

### 已保留

- `/`：Hero、双城入口、城市介绍、4 个体验、预约区。
- `/about`：品牌理念的三个版块。
- `/business-credentials`：经营资质信息。
- 英文、法文、中文三语切换。
- 邮件预约入口：`yangsizhe351@gmail.com`。
- 可选 Supabase 已发布内容读取；无环境变量时使用本地内容。

### 明确不恢复

- 搜索
- 复杂路线系统
- 行程收藏与分享
- 实用指南
- 候补名单
- 为了“显得完整”而添加的 CMS

## 并行开发方式

详细规则见：

- `AGENTS.md`
- `docs/WORKTREE_OPERATING_MODEL.md`

当前推荐不是六个窗口，而是：

1. 总控台（Local）：持有 `main`，负责拆任务、合并、回归、交接和发布。
2. 平台与 SEO（Worktree）：静态预渲染、真实 404、页面级 metadata。
3. 视觉与性能（Worktree）：只优化现有资产、加载、字号、触控和响应式，不生成新图。

拿到真实旅游数据后再创建“产品与内容”窗口，并让已完成窗口退出，避免多个窗口同时修改 `src/main.jsx`、`src/content.js` 和 `src/styles.css`。

## 关键文件

- `src/main.jsx`：页面路由、Header/Footer、体验筛选、弹层和预约交互。
- `src/styles.css`：全站视觉、响应式和动效。
- `src/content.js`：三语文案、预约和资质内容。
- `src/lib/contentRepository.js`：可选 Supabase 读取和本地兜底。
- `scripts/check-content.mjs`：三语必填字段与结构检查。
- `index.html`：当前 SPA 共用元数据。
- `public/_redirects`：当前 Netlify SPA 回退。
- `vite.static.config.js`、`netlify.toml`：唯一正式构建链路。
- `assets/`：品牌、城市、体验和已选背景图片。

不要直接编辑 `dist-netlify/`；它已被 Git 忽略。

## 已验证结果

2026-08-30 本地验证：

- `npm run check`：通过。
- 内容检查：3 个语言、4 个导航项、4 个体验通过。
- Vite 生产构建：通过，28 个模块。
- 当前生产包：JS 228.81 kB（gzip 74.06 kB），CSS 26.30 kB（gzip 6.15 kB）。
- `git diff --check`：通过。
- 依赖审计：0 个漏洞。
- 浏览器 1280×720：首页、`/about`、`/business-credentials` 均正常，无控制台错误。
- 体验验证：成都筛选显示 2 个体验；弹层初始焦点、背景 `inert`、选择反馈和预填邮件主题正常。
- 浏览器 390×844：桌面导航隐藏、移动菜单可开关、无横向溢出。
- 浏览器 320×568：主 CTA 可见、无横向溢出、短屏 scroll note 隐藏、无控制台错误。

验证命令：

```bash
nvm use
npm install
npm run check
git diff --check
git status --short --branch
```

## 尚未处理与原因

### 必须在正式推广前处理

1. 确认资质信息、翻译与个人姓名公开授权。它是业务/合规确认，不能由代码推断。
2. 把 `mailto:` 升级为可靠站内询价。需要先确定隐私说明、接收流程、字段和回复承诺。
3. 补隐私、条款、取消/改期、服务范围等政策。政策内容必须由业务负责人提供。
4. 将 SPA 公开路由改为独立静态 HTML，并提供真实 404、页面级 title/description/canonical/OG。
5. 购买域名后配置品牌邮箱、canonical、sitemap 与 Netlify HTTPS。当前没有域名，因此不伪造最终 URL。

### 高价值但等待真实数据

1. 把 4 个体验升级为结构化对象：时长、人数、价格方式、包含/不包含、强度、语言、天气与政策。
2. 增加 Meet your local、真人照片、真实服务过程和经过授权的评价。
3. 增加 How it works、FAQ 和回复时限；内容确认后再实现。

### 可延后

- 清理 Supabase 和旧的死内容/死样式：先等产品范围与内容录入方式确定。
- 重做 Logo 或生成新 Hero：用户尚未选定新图，且图片生成链路此前不稳定；当前保留现有资产。
- 搜索、收藏、复杂路线、CMS 和更多动效：不能解决当前理解、信任和询价问题。

## 提交与发布规则

1. 工作窗口只提交自己的分支，不推送 `main`、不部署。
2. 总控逐个合并并在每次合并后运行目标检查。
3. 全部合并后运行完整构建与浏览器回归，更新本文件。
4. 只有用户明确要求上线，才推送 `main` 并等待 Netlify 自动发布。
5. 发布后检查 `/`、`/about`、`/business-credentials`、三语、移动端和构建 SHA。

源码异常使用 `git revert <commit>` 生成可追溯的反向提交；不要强推或改写历史。线上紧急回退可在 Netlify Deploys 中重新发布上一个成功构建。

## 下一窗口开场说明

```text
先阅读 /Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC/AGENTS.md、HANDOFF.md 和 docs/WORKTREE_OPERATING_MODEL.md。以 main 当前 HEAD 为唯一集成基线，先检查 git status 与最近提交。本任务只修改分配给你的文件范围，不部署、不提交 dist-netlify、不编造旅游或政策数据。完成后提交到当前 Worktree 分支，并报告提交 SHA、修改文件、验证结果、残余风险和需要总控协调的共享变更。
```
