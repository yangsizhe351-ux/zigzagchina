# ZigZag China

ZigZag China 是面向国际游客的成都与重庆私人向导展示网站。

## 当前功能

- 成都 / 重庆单页品牌展示
- 英文、法文、中文三语切换
- 四个体验卡片与详情弹层
- 响应式导航和移动端菜单
- 邮件预订入口
- 可选 Supabase 已发布内容读取，本地内容自动兜底

路线、搜索、旅程保存/分享、实用指南和候补名单表单已为了保持页面精简而主动删除。当前单页版本是正式基线；仓库中残留的相关内容字段和后端封装不代表待恢复功能。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://127.0.0.1:5173/`。

## 提交前验证

```bash
npm run check
npm exec vite -- build --config vite.static.config.js
```

这条命令检查三种语言的数据并生成 Netlify 使用的 `dist-netlify` 静态版本。

## 可选 Supabase

复制 `.env.example` 为 `.env.local`，填写 Supabase URL 和匿名密钥，然后依次执行 `supabase/schema.sql` 与 `supabase/seed.sql`。不要在前端环境中使用 service-role key。

完整数据层说明见 `docs/CONTENT_BACKEND.md`，当前项目接手状态见 `HANDOFF.md`。
