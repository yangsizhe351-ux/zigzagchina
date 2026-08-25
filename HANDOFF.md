# ZigZag China 项目交接（下一窗口从这里开始）

更新时间：2026-08-25（Asia/Shanghai）

## 30 秒看懂当前状态

- 项目目录：`/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`
- 公开网址：<https://zigzagchina.netlify.app/>
- GitHub：<https://github.com/yangsizhe351-ux/zigzagchina>
- 部署方式：Netlify 自动部署 GitHub `main`；这是当前唯一正式发布路径。
- 最新发布提交：`0311622`（替换重复的页面背景图）；文档更新后如有新提交，以 `main` 最新提交为准。
- 当前工作区：应保持 `main` 与 `origin/main` 同步、无未提交改动。

这是一个已经可以公开展示的成都 / 重庆私人向导品牌单页。当前代码、图片和 Netlify 线上资源均已更新；下一窗口不需要重新生成图片，也不需要恢复旧版功能。

## 当前产品范围

页面包含：

- 英文、法文、中文三语切换
- 成都 / 重庆目的地卡片与城市介绍
- 4 个体验卡片、详情弹层和预订 CTA
- 城市卡片会直接打开对应城市体验详情
- 弹层 CTA 会回到预订区，并使用体验名称生成邮件主题
- 预订邮箱：`yangsizhe351@gmail.com`
- PayPal 目前只是页面上的支付方式说明文字，没有接入在线收款
- 响应式导航、移动端菜单和 390px 移动端布局
- 当前品牌标记：`assets/brand/zigzag-mark-02.png`

为了保持页面精简，以下功能目前明确不在产品范围内：搜索、路线详情、旅程收藏 / 分享、实用指南、候补名单表单。仓库中残留的字段、检查脚本或 Supabase 数据层代码不代表这些功能待恢复；除非产品范围重新确认，否则不要把它们加回页面。

## 图片基线（必须遵守）

页面实际使用的 3 张新背景图只有下面这些：

| 文件 | 页面用途 |
| --- | --- |
| `assets/images/generated/cdqc-tea-lane.jpg` | Destinations 介绍区背景 |
| `assets/images/generated/cdqc-chongqing-hillside-night.jpg` | Experiences 区背景 |
| `assets/images/generated/cdqc-sichuan-table.jpg` | Booking 预订区背景 |

项目 `assets/images/generated/` 目录目前只保留这 3 张 JPG。之前未选中的两张 AI 中间稿已经删除，禁止重新引用或误用。体验卡片本身继续使用 `assets/images/webp/` 下已有的卡片图片；不要用新背景图替换卡片图，也不要凭记忆重画 Logo。

对应代码引用在 `src/main.jsx` 的顶部 imports 和三个 section 的 `--section-image`：

- `teaLaneImage` → `#destinations` teaser
- `chongqingHillsideImage` → `.experience-section`
- `sichuanTableImage` → `.booking-section`

## 关键文件

- `src/main.jsx`：页面结构、三语切换、城市 / 体验弹层、预订邮件链接
- `src/styles.css`：视觉样式、响应式布局、移动端菜单和背景图处理
- `src/content.js`：英文 / 法文 / 中文内容
- `assets/images/generated/`：当前 3 张选定背景图
- `assets/images/webp/`：现有体验卡片和城市图片
- `assets/brand/zigzag-mark-02.png`：品牌标记
- `index.html`：静态入口、基础 SEO 元数据
- `netlify.toml`、`vite.static.config.js`：Netlify 静态构建配置
- `src/lib/contentRepository.js`、`supabase/schema.sql`、`supabase/seed.sql`：可选内容后端；不是当前上线阻塞项

## 已完成并验证

- `npm run check` 已通过：三语内容检查 + Netlify 静态生产构建。
- 已人工检查桌面端与 390px 移动端：导航、语言切换、城市卡片、体验弹层、预订跳转和响应式布局正常。
- 浏览器控制台无错误，移动端无横向溢出。
- 线上根地址 HTTP 200。
- 当前线上资源：JS `assets/index-BRflrGq7.js`、CSS `assets/index-NX8TKFKF.css`。
- 三张新 JPG 的线上资源均返回 200，线上 JS / CSS 与本地构建哈希一致。

## 真正还剩的上线事项

代码端和当前 Netlify 预览发布已完成。正式对外推广前主要是运营 / SEO 工作：

1. 购买并绑定正式域名，配置 DNS 与 Netlify HTTPS。
2. 域名确定后，把 `index.html` 的 canonical URL、站点地图和社交分享（OG / X）图片补齐；当前站点地图尚未完成（旧地址检查为 404）。
3. 补齐业务需要的服务说明、取消 / 改期规则、隐私政策和联系方式文案。
4. 如果未来需要可编辑内容，再单独评估 Supabase；它不是当前静态网站上线的前置条件。

## 后续维护流程（小白也按这个做）

1. 只修改 `src/`、`assets/` 或 `index.html` 源文件，不直接编辑 `dist-netlify` 压缩文件。
2. 在项目目录运行 `npm run check`。
3. 检查 `git diff --check` 和 `git status`，确认没有凭据或无关文件。
4. 提交并推送到 `main`；Netlify 会自动重新部署。
5. 打开公开网址检查桌面端和手机端。不要把密钥提交到仓库，尤其不要把 Supabase service-role key 放到前端。

## 下一窗口第一步

先读本文件，再看 `src/main.jsx`、`src/styles.css`、`src/content.js`，然后运行 `git status --short --branch` 和 `npm run check`。默认基线是最新 `main` 提交和上面列出的 3 张 JPG；除非用户明确选择替换，否则不要重新生成、删除或重新引用图片。
