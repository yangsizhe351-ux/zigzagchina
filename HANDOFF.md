# ZigZag China 当前交接

更新时间：2026-08-31 11:57（Asia/Shanghai）

## 最短接管

1. 进入 `/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`，读 `AGENTS.md` 和本文件。
2. 运行 `git status --short --branch`、`git log -3 --oneline`。
3. 只从 `TASKS.yaml` 读取顶部策略和当前 issue 段；不要全文扫描历史任务。
4. 项目区只保留六个长期角色：总控、文本与翻译、政策与合规、网站结构与实现、图像生成、集成验收。

## 当前检查点

- 本轮接管基线：`51c8f4655dd3428f512273c9eb7652c3569a5999`；当前 `main` 以 `git rev-parse HEAD` 为准。
- `origin/main`：`57dd73b`；本地尚未 push。
- 当前专项分支：`codex/zc-008-workflow-validator`。
- 暂停交付：`90f62b5b03932631e48e54258ac1fa6ef192aafe`，未合并。
- 最小 QA：`BLOCK`；`check:workflow` 和完整构建通过，但校验器没有拒绝非法 `BACKLOG → IN_PROGRESS`。
- QA task：`01a05590-acd0-73b1-808e-04fc11b95db2`。

## 六个长期角色

| 窗口 | 默认执行配置 | 主要职责 |
| --- | --- | --- |
| `ZigZag 总控台（项目内唯一入口）` | `gpt-5.6-sol / high` | 需求、Fast/模型调度、台账、集成、交接 |
| `ZigZag 文本与翻译` | `gpt-5.6-terra / high` | 中英法文本、内容结构、翻译一致性 |
| `ZigZag 政策与合规` | `gpt-5.6-sol / xhigh` | 政策、资质、隐私、条款和公开授权核对 |
| `ZigZag 网站结构与实现` | `gpt-5.6-terra / high` | React/Vite、路由、组件、样式、性能和构建 |
| `ZigZag 图像生成` | `gpt-5.6-terra / medium` | 视觉方向、imagegen 生成与候选资产交付 |
| `ZigZag 集成验收` | `gpt-5.6-sol / xhigh` | 对精确 SHA 做独立只读验收 |

Fast 仅由总控按单次任务切到 `gpt-5.6-luna / medium`；政策结论、共享架构、最终图片选型、QA 和发布不得使用 Fast。

## 当前状态

- `ZC-006`：上一轮三窗口收口已完成；当前六角色新需求由 ZC-009 取代，不改写历史结论。
- `ZC-008`：`BLOCKED`，只剩合法状态转换边校验；租约已释放。
- `ZC-001`、`ZC-005`：继续等待 ZC-008，不开启新窗口。
- `ZC-002`：等待用户确认经营主体、许可/翻译/姓名授权、联系方式、政策、Supabase 数据与正式域名。
- `ZC-009`：`IN_PROGRESS`，正在创建六个长期角色、安装全局自动交接 Skill，并以新总控替换当前总控。
- 未获得 push、部署或发布授权。

## 当前交接动作

1. 完成项目角色台账和全局 `control-context-handoff` Skill 校验。
2. 创建或复用五个非总控角色窗口，记录实际 task ID 与模型参数。
3. 在保存项目的真实根目录创建 `gpt-5.6-sol / high` 新总控。
4. 新总控核验项目、`main`、HEAD、工作区和台账并回报 `READY` 后，更新 active control 并可恢复归档旧总控。
5. ZC-008 仍停在 `90f62b5b03932631e48e54258ac1fa6ef192aafe`；本任务不得顺手修复它。

## 红线

- 不 push、部署、发布、删除分支/Worktree 或覆盖用户修改。
- 不从历史 detached Worktree 开发。
- 不编辑 `dist-netlify/`，不恢复已删除功能，不编造旅游、政策、资质或个人授权信息。
- `supabase/seed.sql` 的体验时长未确认，不得用于生产。
