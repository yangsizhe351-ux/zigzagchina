# ZigZag China 智能体规则

开始任务时只读取当前角色需要的最小上下文：

1. 所有窗口先读 `HANDOFF.md` 和本文件。
2. 专项只读 `TASKS.yaml` 顶部策略及自己的 issue 段；不扫描无关历史任务。
3. `control` 与 `qa-gate` 需要裁决流程时再读 `WORKFLOW.md` 的相关章节。
4. 只有执行 Worktree 操作前才读 `docs/WORKTREE_OPERATING_MODEL.md`。

然后运行：

```bash
git status --short --branch
git log -3 --oneline
```

若分支、HEAD、工作区、任务 owner 或文件租约与台账不一致，立即停止写入并交给总控查明归属。

## 强制协作规则

- `main` 是唯一集成基线；只有真实项目根目录中的 `control` 负责合并、台账、交接、push 和部署。
- `TASKS.yaml` 是唯一任务状态台账。聊天、交付模板和旧 `ZZ-*` 窗口不能替代台账记录。
- 一个任务只能有一个 owner、一个唯一分支和一个清楚的允许/禁止范围。没有完整 40 位 `base_checkpoint` 的开发任务不得开始。
- 专项负责人使用独立 Worktree；首次编辑前确认目标分支正确且不是 detached HEAD。旧 detached Worktree 只能只读参考。
- 默认最多一个专项在制；只有文件租约不重叠、依赖已满足时，总控才可增加到两个。
- 侧边栏最多保留 3 个 ZigZag 窗口：唯一总控、一个当前专项、一个集成验收；诊断和一次性复审完成后立即可恢复归档，不为每个小问题新建窗口。
- 模型和推理强度必须按 `TASKS.yaml#execution_profile` 执行，owner 不得静默降档。同一验收项连续失败时按 `WORKFLOW.md` 升级模型、复核范围或拆分任务。
- `qa-gate` 独立且只读，不参与被审实现、不替开发者修复、不更新台账、不合并、不推送、不部署。
- 分支 commit 和集成后的最终精确 SHA 都必须独立验收；没有证据的任务不能标记为 `DONE`。
- 专项交付必须使用 `DELIVERY_TEMPLATE.md`，直接交给指定 handoff target，不要求用户转发。
- 总控只解决机械集成冲突；语义冲突退回原 owner，并对新 commit 重新验收。

## 项目红线

- 未经用户明确授权，不 push、部署、发布、删除分支/Worktree、改写历史或覆盖用户修改。
- 不直接编辑或提交 `dist-netlify/`；它是构建产物。
- 不恢复已删除的搜索、路线收藏、分享、实用指南或候补名单功能。
- 未经用户或业务负责人确认，不编造或发布价格、时长、人数、政策、回复时效、导游履历、评价、旅行细节、资质翻译或个人信息授权。
- 未经用户选定，不重新生成或替换现有网站图片。
- 不在生产 Supabase 执行 `supabase/seed.sql`，直到 ZC-002 明确确认其中体验时长等数据。
- 发现来源不明的修改时立即停止；不得以“顺手清理”为由删除旧构建目录、分支或 Worktree。

## 文件边界与验证

任务的 `scope` 和 `file_lease` 优先于默认模块边界。默认边界与完整验证矩阵见 `WORKFLOW.md`；最低要求：

- 仅协作文档：解析 `TASKS.yaml`、检查引用、运行 `git diff --check`。
- 内容改动：至少运行 `npm run check:content`。
- 代码、样式、构建或配置：运行 `npm run check` 和 `git diff --check`。
- 交互、路由或响应式：另做相关路由、控制台、键盘/焦点和目标视口验证。
- 验收结论必须是 `BLOCK`、`WARN` 或 `PASS`，绑定精确 SHA，并逐项覆盖 acceptance criteria。

`PASS` 只允许进入下一道闸门。没有用户对明确候选 SHA 的上线授权，总控也不得 push 或部署。
