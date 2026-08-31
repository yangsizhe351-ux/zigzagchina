# ZigZag China 当前交接

更新时间：2026-08-31 12:19（Asia/Shanghai）

## 最短接管

1. 进入 `/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`，读 `AGENTS.md` 和本文件。
2. 运行 `git status --short --branch`、`git log -3 --oneline`。
3. 只从 `TASKS.yaml` 读取顶部策略和当前 issue 段；不要全文扫描历史任务。
4. 项目区只保留六个长期角色：总控、文本与翻译、政策与合规、网站结构与实现、图像生成、集成验收。

## 当前检查点

- 第一阶段交接检查点：`73eeaed07fb499552cf15f4dad455fabeb797898`；当前 `main` 以 `git rev-parse HEAD` 为准，尚未 push。
- `origin/main`：`57dd73b`；本地尚未 push。
- 当前专项分支：`codex/zc-008-workflow-validator`。
- 暂停交付：`90f62b5b03932631e48e54258ac1fa6ef192aafe`，未合并。
- 最小 QA：`BLOCK`；`check:workflow` 和完整构建通过，但校验器没有拒绝非法 `BACKLOG → IN_PROGRESS`。
- QA task：`01a05590-acd0-73b1-808e-04fc11b95db2`。

## 六个长期角色

| 窗口 | Task ID | 默认执行配置 | 当前状态 |
| --- | --- | --- | --- |
| `ZigZag 总控台（接管中）` | `01a05605-cf05-7722-b5e6-1efc32e20ab0` | `gpt-5.6-sol / high` | 第一阶段 READY，等待最终 SHA 核验 |
| `ZigZag 文本与翻译` | `01a05600-619c-7820-877a-82ca45e5e9cd` | `gpt-5.6-terra / high` | `IDLE_READ_ONLY` |
| `ZigZag 政策与合规` | `01a05600-76b4-7170-aea1-5c19ed47c909` | `gpt-5.6-sol / xhigh` | `IDLE_READ_ONLY` |
| `ZigZag 网站结构与实现` | `01a055cc-8022-7050-b6a6-3aa10486cc6f` | `gpt-5.6-terra / high` | `IDLE_WITH_BLOCKED_TASK` |
| `ZigZag 图像生成` | `01a05600-6c1c-7412-b091-063e90c9175d` | `gpt-5.6-terra / medium` | `IDLE_READ_ONLY` |
| `ZigZag 集成验收` | `01a05590-acd0-73b1-808e-04fc11b95db2` | `gpt-5.6-sol / xhigh` | `IDLE` |

Fast 仅由总控按单次任务切到 `gpt-5.6-luna / medium`；政策结论、共享架构、最终图片选型、QA 和发布不得使用 Fast。

## 当前状态

- `ZC-006`：上一轮三窗口收口已完成；当前六角色新需求由 ZC-009 取代，不改写历史结论。
- `ZC-008`：`BLOCKED`，只剩合法状态转换边校验；租约已释放。
- `ZC-001`、`ZC-005`：继续等待 ZC-008，不开启新窗口。
- `ZC-002`：等待用户确认经营主体、许可/翻译/姓名授权、联系方式、政策、Supabase 数据与正式域名。
- `ZC-009`：`IN_PROGRESS`；五个非总控角色已就位，全局自动交接 Skill 已校验，下一步只剩新总控核验与旧总控归档。
- 前任总控：`01a05304-9679-7ff3-9bc8-39e233cc722a`，在继任者完成最终 SHA 核验前继续保留。
- 未获得 push、部署或发布授权。

## 当前交接动作

1. 前任总控提交 active control 过渡状态，形成最终待核验 SHA。
2. 继任总控再次核验该精确 SHA、`main` 和干净工作区，并回报 `READY_FINAL`。
3. 独立 QA 对同一 SHA 给出结论；通过后归档前任并由继任总控收口 ZC-009。
4. ZC-008 仍停在 `90f62b5b03932631e48e54258ac1fa6ef192aafe`；本任务不得顺手修复它。

## 红线

- 不 push、部署、发布、删除分支/Worktree 或覆盖用户修改。
- 不从历史 detached Worktree 开发。
- 不编辑 `dist-netlify/`，不恢复已删除功能，不编造旅游、政策、资质或个人授权信息。
- `supabase/seed.sql` 的体验时长未确认，不得用于生产。
