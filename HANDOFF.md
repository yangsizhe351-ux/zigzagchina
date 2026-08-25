# ZigZag China 项目交接

更新时间：2026-08-25（Asia/Shanghai）

## 项目定位

- 本地项目：`/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`
- GitHub：`https://github.com/yangsizhe351-ux/zigzagchina`
- 线上站点：`https://zigzagchina.netlify.app/`
- 当前分支：`main`
- 当前发布基线：本地 `main` 最新提交及其生成的 `dist-netlify` 资源
- 发布渠道：Netlify，GitHub `main` 为唯一源分支

## 当前产品状态

当前版本是 ZigZag China 的单页品牌展示与私人向导预订入口，覆盖成都和重庆。

已在页面中使用的功能：

- 英文、法文、中文三语切换
- 成都 / 重庆目的地展示
- 四个体验卡片及详情弹层
- 四个体验详情含中英法临时介绍
- 响应式导航和移动端菜单
- 邮件预订入口
- 可选 Supabase 已发布内容读取；未配置时使用本地内容
- 选定的 `zigzag-mark-02.png` 品牌标记

搜索、路线详情、旅程收藏/分享、实用指南和候补名单表单是为了保持页面精简而主动删除的功能。当前精简版是正式产品基线；仓库中残留的相关字段和数据层代码不代表待办需求，除非产品范围再次明确变更，否则不应恢复到页面。

## 关键文件

- `src/main.jsx`：当前单页产品和所有主要交互
- `src/styles.css`：页面视觉、响应式和动效样式
- `src/content.js`：三语内容及仍保留的扩展内容字段
- `src/lib/contentRepository.js`：可选 Supabase 读取与候补名单写入封装
- `assets/brand/zigzag-mark-02.png`：当前实际使用的品牌标记
- `assets/images/`：页面图片源文件
- `index.html`：Netlify 静态入口
- `netlify.toml`、`vite.static.config.js`：Netlify 静态构建配置
- `supabase/schema.sql`、`supabase/seed.sql`：可选内容后端结构和种子数据

## 本地运行与验证

安装并启动：

```bash
npm install
npm run dev
```

默认本地地址：`http://127.0.0.1:5173/`

内容检查和 Netlify 静态生产构建：

```bash
npm run check
```

Netlify 实际使用的静态构建：

```bash
npm exec vite -- build --config vite.static.config.js
```

2026-08-25 已验证内容检查、Netlify 静态构建，以及桌面端和 390px 移动端人工验收均成功。

## 部署现状

Netlify 发布目录是 `dist-netlify`，构建命令写在 `netlify.toml`。仓库跟踪该目录中的生成文件；每次修改源文件后必须重新运行 `npm run check`，再提交新的哈希资源。

## 可选 Supabase 后端

页面只在存在以下变量时读取 Supabase，否则安全回退到 `src/content.js`：

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

配置说明见 `docs/CONTENT_BACKEND.md`。当前 UI 会调用 `getPublishedContent()`，但没有调用 `submitWaitlist()`，因为候补名单表单已从展示页移除。不要把 service-role key 放到前端。

## 下一步建议

1. 保持当前精简的品牌展示与邮件预订结构，不主动重新引入已删除功能。
2. 选定正式域名后补 canonical URL、站点地图和社交分享图片。
3. 若启用 Supabase，只按当前页面需要验证已发布内容读取；不要默认恢复候补名单写入入口。
4. 后续维护时可逐步清理 `src/content.js`、检查脚本和 Supabase schema 中确定不再使用的字段，但应先确认不会影响三语内容读取。

## 接手注意事项

- 不要直接编辑 `dist-netlify` 里的压缩文件；修改源文件后重新构建。
- `dist-netlify` 当前被 Git 跟踪，静态构建会产生需要一并提交的哈希文件变化。
- 保留现有图片比例和品牌标记，不要凭记忆重画 Logo。
- 提交前至少运行一次 `npm run check` 和 Netlify 静态构建。
- 发布前应确认工作区只包含本次发布内容，并运行 `git diff --check`；仓库中没有发现凭据。
