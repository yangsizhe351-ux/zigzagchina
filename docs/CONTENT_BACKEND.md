# ZigZag China 内容后端

> `PENDING_USER_ACTION`：生产环境不得执行 `supabase/seed.sql`。该文件包含尚未由业务负责人确认的体验时长等数据；先完成 `TASKS.yaml` 中 ZC-002 的真实数据确认或清理决定。

页面当前以 `src/content.js` 作为安全的本地兜底。当下列公开前端变量存在时，`src/lib/contentRepository.js` 会尝试读取 Supabase：

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

确认真实数据后，按以下顺序接入：

1. 创建 Supabase 项目。
2. 审查并执行 `supabase/schema.sql`。
3. 只在 ZC-002 已确认 seed 内容后执行 `supabase/seed.sql`。
4. 将 `.env.example` 复制为 `.env.local`，填写项目 URL 和 anon key。
5. 重启 Vite；`src/main.jsx` 会在语言变化时调用 `getPublishedContent()`。
6. 检查浏览器控制台。没有 `CDQC content fallback` 警告表示远端表可用；失败时页面应继续使用本地翻译。

数据边界：

- 公开站点只读取已发布行；前端绝不能暴露 service-role key。
- schema 中仍有历史 `waitlist_signups` 表和 `submitWaitlist()` 辅助函数，但当前页面没有候补名单 UI，也不会调用它。
- 不得以接入后端为由恢复候补名单或其他已删除功能。
- 管理编辑功能若以后确有需求，应另建带身份验证的专项任务，不能把私密写入凭据放在客户端。
