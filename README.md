# ZigZag China

ZigZag China 是面向国际游客的成都与重庆私人向导展示网站，使用 React 19、Vite 8 和 Node.js 22 构建为 Netlify 静态站点。

## 当前功能

- 首页、独立 `/about` 与 `/business-credentials` 页面
- 英文、法文、中文三语切换
- 城市筛选、四个体验卡片与无障碍详情弹层
- 已选体验反馈、付款时点说明与邮件预约备用入口
- 响应式导航、移动端菜单和短屏适配
- 可选 Supabase 已发布内容读取，本地内容自动兜底

搜索、复杂路线、旅程保存/分享、实用指南和候补名单已主动删除，不是默认待恢复功能。

## 本地运行与检查

```bash
nvm use
npm install
npm run dev
```

开发服务默认位于 `http://127.0.0.1:5173/`。提交前运行：

```bash
npm run check
git diff --check
```

`npm run check` 只覆盖三语内容结构和静态生产构建，不等于交互、路由、响应式或发布验收。构建生成的 `dist-netlify/` 已被 Git 忽略，不应直接编辑或提交。

## 多智能体协作

项目采用动态的“总控 + 按需专项负责人 + 独立验收”工作流，不固定窗口数量。新任务开始前按顺序阅读：

- `AGENTS.md`：所有窗口的强制规则
- `WORKFLOW.md`：唯一流程规范与模型升级策略
- `TASKS.yaml`：唯一任务状态台账
- `HANDOFF.md`：当前检查点与接管快照
- `docs/WORKTREE_OPERATING_MODEL.md`：Worktree 技术附录

专项交付统一使用 `DELIVERY_TEMPLATE.md`。当前发布状态和用户待确认事项以 `TASKS.yaml`、`HANDOFF.md` 为准。

## 可选 Supabase

生产环境暂时不得执行 `supabase/seed.sql`：其中含尚未由业务负责人确认的体验时长数据。先完成 `TASKS.yaml` 中 ZC-002 的确认，再按 `docs/CONTENT_BACKEND.md` 连接真实后端。前端环境只能使用公开匿名密钥，不能使用 service-role key。
