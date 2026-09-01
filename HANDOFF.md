# ZigZag China 当前交接

更新时间：2026-09-01 18:11（Asia/Shanghai）

## 30 秒看懂当前状态

- 项目根目录：`/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`
- 权威来源：本地 `main`；当前精确提交始终以 `git rev-parse HEAD` 为准。
- ZC-009 收口基线：`fac3ef72e9d2264caa2991fadd53c9e22e226387`；本文件所在提交是其聚焦收口提交。
- 当前唯一总控：`01a05605-cf05-7722-b5e6-1efc32e20ab0`，状态 `ACTIVE`。
- 发布状态：仅本地，未 push、未部署、未发布。
- 最后验证：qa-gate `01a05590-acd0-73b1-808e-04fc11b95db2` 对 ZC-011 精确候选 `9fa225b0f559ec6ec4030f25c47959d1d8ed5f6e` 给出 `PASS`；主分支已快进到同一 SHA。

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

## 执行效率基线

- 每轮完整入口读取一次；之后只读当前 issue、目标段或 diff。
- 每个候选 SHA 只绑定一个最终 QA owner；没有新 SHA 或 AC 变化不重复验收。
- 最多一次即时状态快照，随后事件等待；不做 30–60 秒固定轮询。
- 跨窗口只传 issue、基线/候选 SHA、变更路径、失败 AC 或结果、下一动作。
- owner 先做最小机械检查，完整矩阵只在最终候选执行一次；不降低既定质量档位。

## 当前任务状态

- `ZC-011`：`DONE`；精确候选 `9fa225b0f559ec6ec4030f25c47959d1d8ed5f6e` 已由唯一 qa-gate `PASS` 并快进集成到 main，手机裁切风险已记录。
- `ZC-013`：`INTEGRATED`；右侧抽屉与内页根因修复已本地集成到 `f1735949f2bd49163464f51b4eccad0b37c7fdc9`，分支 qa-gate 已 PASS，main 构建、diff 和干净状态通过；正在等待对集成后精确 SHA 的最终独立验收。基线 `cd749bbdbc957de13b39e6905a0373f7aa7e3aac` 仍受本地 tag `refs/tags/qa-pass/ZC-012-20260901-01` 保护。
- `ZC-012`：`DONE`；最终 gate tag `refs/tags/qa-pass/ZC-012-20260901-01` 已精确指向 `cd749bbdbc957de13b39e6905a0373f7aa7e3aac`，P2 导航落点风险已接受。
- `ZC-010`：`DONE`；精确候选 `259848523074bcd023ef850b243557dd0d25735a` 已由唯一 qa-gate `PASS`，效率规则完成收口。
- `ZC-009`：`DONE`；六角色、模型路由、全局自动交接边界、两阶段核验及前任可恢复归档已收口。
- `ZC-008`：`BLOCKED`；唯一缺口仍是合法状态转换边校验，交付 `90f62b5b03932631e48e54258ac1fa6ef192aafe` 未合并。
- `ZC-001`、`ZC-005`：继续等待 ZC-008，不开启新窗口。
- `ZC-002`：等待用户确认经营主体、许可/翻译/姓名授权、联系方式、政策、Supabase 数据与正式域名。

本轮明确范围：将当前主导航的全宽展开层试行为右侧抽屉，仅修改 `src/main.jsx` 与 `src/styles.css`，保留现有四项导航、链接、文案、熊猫双城图及首页内容；菜单打开时消除桌面重复导航。不得恢复已删除功能，不 push 或部署。

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
