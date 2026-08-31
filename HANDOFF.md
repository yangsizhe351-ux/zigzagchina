# ZigZag China 当前交接

更新时间：2026-08-31 12:27（Asia/Shanghai）

## 30 秒看懂当前状态

- 项目根目录：`/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`
- 权威来源：本地 `main`；当前精确提交始终以 `git rev-parse HEAD` 为准。
- ZC-009 收口基线：`fac3ef72e9d2264caa2991fadd53c9e22e226387`；本文件所在提交是其聚焦收口提交。
- 当前唯一总控：`01a05605-cf05-7722-b5e6-1efc32e20ab0`，状态 `ACTIVE`。
- 发布状态：仅本地，未 push、未部署、未发布。
- 最后验证：继任总控 `READY_FINAL`；qa-gate `01a05590-acd0-73b1-808e-04fc11b95db2` 对 `fac3ef72…` 给出 `PASS_PRE_ARCHIVE`；前任已可恢复归档。

## 六个长期角色

| 窗口 | Task ID | 默认执行配置 | 当前状态 |
| --- | --- | --- | --- |
| `ZigZag 总控台（项目内唯一入口）` | `01a05605-cf05-7722-b5e6-1efc32e20ab0` | `gpt-5.6-sol / high` | `ACTIVE` |
| `ZigZag 文本与翻译` | `01a05600-619c-7820-877a-82ca45e5e9cd` | `gpt-5.6-terra / high` | `IDLE_READ_ONLY` |
| `ZigZag 政策与合规` | `01a05600-76b4-7170-aea1-5c19ed47c909` | `gpt-5.6-sol / xhigh` | `IDLE_READ_ONLY` |
| `ZigZag 网站结构与实现` | `01a055cc-8022-7050-b6a6-3aa10486cc6f` | `gpt-5.6-terra / high` | `IDLE_WITH_BLOCKED_TASK` |
| `ZigZag 图像生成` | `01a05600-6c1c-7412-b091-063e90c9175d` | `gpt-5.6-terra / medium` | `IDLE_READ_ONLY` |
| `ZigZag 集成验收` | `01a05590-acd0-73b1-808e-04fc11b95db2` | `gpt-5.6-sol / xhigh` | `IDLE` |

Fast 仅由总控按单次任务切到 `gpt-5.6-luna / medium`；政策结论、共享架构、最终图片选型、QA 和发布不得使用 Fast。

## 当前任务状态

- `ZC-009`：`DONE`；六角色、模型路由、全局自动交接边界、两阶段核验及前任可恢复归档已收口。
- `ZC-008`：`BLOCKED`；唯一缺口仍是合法状态转换边校验，交付 `90f62b5b03932631e48e54258ac1fa6ef192aafe` 未合并。
- `ZC-001`、`ZC-005`：继续等待 ZC-008，不开启新窗口。
- `ZC-002`：等待用户确认经营主体、许可/翻译/姓名授权、联系方式、政策、Supabase 数据与正式域名。

## 运行与验证

```bash
git status --short --branch
git log -3 --oneline
ruby -e "require 'yaml'; YAML.load_file('TASKS.yaml')"
git diff --check
```

ZC-009 收口提交由现有 qa-gate 对精确 closure SHA 做最终只读 `PASS/BLOCK`；结论直接记录在任务对话中，不再制造自引用提交。

## 红线

- 不 push、部署、发布、删除分支/Worktree、改写历史或覆盖用户修改。
- 不从历史 detached Worktree 开发，不编辑 `dist-netlify/`，不恢复已删除功能。
- 不编造旅游、政策、资质或个人授权信息。
- `supabase/seed.sql` 的体验时长未确认，不得用于生产。

## 下一窗口第一步

1. 进入项目根目录，读取 `AGENTS.md` 与本文件。
2. 核验 `main`、精确 HEAD 和干净工作区。
3. 只从 `TASKS.yaml` 读取顶部策略与当前 issue 段；按 role registry 复用现有六个长期角色。

## 新窗口可直接使用的开场说明

读取 `/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC/HANDOFF.md` 与 `AGENTS.md`，核验项目根目录、`main`、精确 HEAD 和工作区；只从 `TASKS.yaml` 读取顶部策略与当前 issue 段，并遵守六角色、文件租约、独立验收及禁止未经授权 push/deploy 的规则。
