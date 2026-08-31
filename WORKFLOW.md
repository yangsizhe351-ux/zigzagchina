# ZigZag China 多智能体工作流

本文件是项目唯一的流程规范。任务实时状态只写入 `TASKS.yaml`；当前接管快照只写入 `HANDOFF.md`；专项交付使用 `DELIVERY_TEMPLATE.md`。`AGENTS.md` 只保存所有窗口必须遵守的硬约束。

## 1. 角色与并行上限

### 总控与集成（`control`）

- 位于保存项目 `Zigzag` 的本地项目根目录，持有 `main`。
- 接收需求、创建任务、分配 owner、维护 `TASKS.yaml`、处理集成与机械冲突、更新交接。
- 不在专项任务进行时抢做该任务的业务实现。
- 只有得到用户明确授权后才可以 push 或触发部署。

### 侧边栏预算

- 项目区最多显示 3 个窗口：`ZigZag 总控台（项目内唯一入口）`、`ZigZag 当前专项`、`ZigZag 集成验收`。
- 小修和复验复用当前专项或集成验收；不得为每次失败、诊断或模型升级另建常驻窗口。
- 一次性诊断、旧总控和已完成专项立即做可恢复归档。新专项只有在当前专项结束且确有独立 Worktree 需要时才创建。

### 专项负责人（按需创建）

- 一个任务只有一个 owner、一个任务分支和一个独立 Worktree。
- 一次只负责一个边界清楚的模块，默认在制品上限为 1。
- 只有文件租约不重叠且依赖已满足时，才允许并行两个专项；当前项目不设置常驻的空窗口。
- 必须提交聚焦 commit，并按 `DELIVERY_TEMPLATE.md` 直接交给 `qa-gate`，无需用户转发。

### 独立验收（`qa-gate`）

- 不参与被审核功能的实现，不替专项负责人修复问题，也不合并、不推送、不部署。
- 对专项提交和集成后的精确 SHA 分别给出 `BLOCK`、`WARN` 或 `PASS`。
- 新建的只读验收 Worktree 可以处于 detached HEAD；旧 detached Worktree 只能作为历史证据，禁止继续开发。
- 严格只读仓库；审核结论交给总控回写台账。验收者不修改业务文件、台账或交接。

### 发布职责

当前项目没有独立发布团队，不创建发布负责人。用户明确授权上线后，由 `control` 按发布检查清单执行 GitHub `main` → Netlify 流程；专项负责人和 `qa-gate` 永不发布。

## 2. 单一事实来源

| 文件 | 唯一职责 | 禁止内容 |
| --- | --- | --- |
| `WORKFLOW.md` | 稳定的角色、状态、调度与验收规则 | 实时任务状态 |
| `TASKS.yaml` | 唯一任务台账、状态、commit、证据、风险 | 长篇流程说明 |
| `HANDOFF.md` | 当前检查点、活跃任务、阻塞、风险和接管步骤 | 第二套完整任务列表 |
| `DELIVERY_TEMPLATE.md` | 专项交付消息格式 | 独立任务状态 |
| `AGENTS.md` | 所有新窗口的强制入口与红线 | 重复流程全文 |
| `docs/WORKTREE_OPERATING_MODEL.md` | Worktree 技术操作附录 | 另一套角色或状态定义 |
| `docs/LAUNCH_CHECKLIST.md` | 发布时的证据清单 | 替代 `TASKS.yaml` 宣布发布状态 |

若聊天、旧窗口或旧文档与上述来源冲突，以 Git、`TASKS.yaml` 和当前 `HANDOFF.md` 为准。专项交付模板只是输入；总控必须把有效结果回写台账。

## 3. 任务编号、分支与工作区

- 新任务使用不可复用的 `ZC-###`；旧 `ZZ-*` 仅作为历史证据引用。
- 开发分支使用 `codex/zc-<编号>-<简短主题>`，例如 `codex/zc-003-inquiry-policy`。
- `base_checkpoint` 必须在任务进入 `READY` 前写成完整 40 位 SHA，任务启动后不得随 `main` 前进而覆盖。
- 非代码或等待用户决定的任务可以把 `branch` 和 `workspace` 设为 `null`，并写明原因。
- 开发 Worktree 在首次编辑前必须确认已连接目标分支且不是 detached HEAD。
- 同一分支不能同时被两个 Worktree 检出；不得从旧 detached Worktree 恢复开发。
- 不删除旧 Worktree、分支或任务。需要清理时另建任务并取得用户授权。

## 4. 完整任务分配包

总控把任务从 `BACKLOG` 提升到 `READY` 前，必须在 `TASKS.yaml` 写清：

- 问题与预期结果；
- 允许修改和禁止修改的路径；
- 完整基准 commit、目标分支与 Worktree 模式；
- 每条可验证的验收标准；
- 必须执行的自动化和人工测试；
- 唯一 owner、依赖与 handoff target；
- 是否允许修改公共接口及授权依据；
- 模型、推理强度、选择理由与升级条件；
- 当前文件租约。

若允许范围或文件租约与活动任务重叠，总控必须调整依赖并串行执行，不能靠合并冲突解决调度冲突。

## 5. 模型调度与升级

模型是任务配置，不是窗口的永久身份。创建任务时必须显式选择以下执行档位，并写入台账：

| 档位 | 默认模型与推理 | 适用任务 |
| --- | --- | --- |
| `fast_bounded` | `gpt-5.6-luna` / `medium` | 文件边界清楚、低风险、可机械验证的整理或小修 |
| `balanced_build` | `gpt-5.6-terra` / `high` | 常规前端、构建、样式或单模块实现 |
| `frontier_control` | `gpt-5.6-sol` / `high` | 跨模块总控、集成决策、含未知风险的实现 |
| `frontier_gate` | `gpt-5.6-sol` / `xhigh` | 独立验收、发布候选、安全/合规或复杂根因复核 |

`rework_count` 只统计同一验收项的真实失败，不统计用户改变需求或外部瞬时故障：

1. 第一次同类失败：记录根因和失败证据，模型不降级，推理强度提升一级后做根因修复。
2. 第二次同类失败，或第二次 `REVIEW → IN_PROGRESS`：强制提升一个模型档位；总控先重写范围/验收或拆任务，禁止继续同类补丁。
3. 第三次同类失败：停止实现，转为 `BLOCKED`；缺业务输入则转为 `PENDING_USER_ACTION`。由独立 `gpt-5.6-sol / xhigh`（根因仍不明的 P0 可用 `max`）复审后才能重开。

P0/P1、未知脏改、数据丢失、安全/隐私、公开授权、共享接口冲突、发布和回滚风险无需等待计数，立即使用 `frontier_gate`。重新调度时先复核问题、范围、基准和测试；确认不是规格或环境问题后再升级模型，并优先创建干净上下文的新专项任务。降档只用于范围缩小且风险已消除的新任务，不能在进行中的任务上静默更换。

## 6. 状态机

正常状态流：

`BACKLOG → READY → IN_PROGRESS → REVIEW → INTEGRATED → VERIFIED → DONE`

异常状态：`BLOCKED`、`DEFERRED`、`CANCELLED`、`PENDING_USER_ACTION`。

| 状态 | 进入条件 |
| --- | --- |
| `BACKLOG` | 已记录问题，可暂缺 owner、分支和基准；不持有文件租约 |
| `READY` | owner、范围、AC、依赖、完整基准 SHA、分支、测试、模型和 handoff 均完整 |
| `IN_PROGRESS` | 正确分支/Worktree 已核验，开发任务不是 detached，文件租约已取得 |
| `REVIEW` | 有聚焦 commit、工作区干净、测试和逐项 AC 证据已交付 |
| `INTEGRATED` | 分支验收已通过，总控完成集成并记录新的 `main` SHA |
| `VERIFIED` | 集成后的精确 SHA 已完成目标回归和独立最终验收 |
| `DONE` | 所有 AC 有证据，风险已解决或明确接受，租约释放，交接已同步 |
| `BLOCKED` | 技术或任务依赖阻塞；记录恢复条件和原状态 |
| `PENDING_USER_ACTION` | 等待业务事实、授权、域名、图片、政策或上线决定 |
| `DEFERRED` / `CANCELLED` | 仅总控可决定，必须保留原因 |

`BLOCK`、`WARN`、`PASS` 是审核结论，不是任务状态。`WARN` 只有在风险不影响验收标准且已明确记录 owner 时才能继续；业务事实或公开授权未确认必须 `BLOCK`。

## 7. 文件租约与交付

- `src/main.jsx`、`src/content.js`、`src/styles.css` 是高冲突核心文件，任何时刻各自只能属于一个活动租约。
- `TASKS.yaml`、`HANDOFF.md`、`WORKFLOW.md`、`AGENTS.md` 和共享依赖默认由总控持有。
- 专项在 `REVIEW` 期间继续持有业务文件租约，以便原 owner 修复；合并后释放。
- 总控只处理明确可判定的机械集成冲突。语义冲突退回专项，并对新 commit 重新验收。
- 交付必须包含 commit、基准、修改路径、测试命令与结果、逐项 AC 证据、干净工作区、风险和接收人。

## 8. 双闸门与精确 SHA

1. 专项提交聚焦 commit，并把结构化交付直接发送给 `qa-gate`。
2. `qa-gate` 审核分支精确 SHA；`BLOCK` 退回原 owner，`PASS` 才允许总控集成。
3. 总控集成、运行检查并回写任务 commit、测试、风险和预声明的唯一 `gate_ref`，形成候选 SHA `C`；从此冻结 `main`。
4. 新的独立验收 Worktree 对精确 `C` 做最终检查，并输出 `BLOCK / WARN / PASS + C + 命令结果 + 风险 + Codex task ID`。验收者不改仓库。
5. 首轮 `PASS` 后，总控可以做且只能做一次台账收口提交：回写审核证据、完成符合条件的状态流转并同步交接。该提交是新的封板候选 `S`，不继承 `C` 的 `PASS`。
6. 同一独立验收任务再次只读检查精确 `S`。最终 `PASS` 后，总控创建预声明名称的本地 annotated tag，使 `gate_ref` 精确指向 `S`；tag message 保存 reviewer、时间、命令证据、残余风险和 QA task ID。创建 tag 不改变 HEAD。
7. tag 创建后禁止 commit、amend、merge 或 rebase。发布前必须同时满足：工作区干净、`HEAD == gate_ref^{commit}`、没有 P0/P1 或未确认公开事实、用户对该 SHA 有明确授权。
8. 候选提交不可能在 tracked 文件中写入自己的最终 SHA。最终 gate verdict 因此必须作为提交外、精确指向该提交且不可移动/复用/删除的 tag 保存；`TASKS.yaml` 预先保存其稳定 `gate_ref`。
9. 没有精确 SHA 的 `PASS`、只有“测试通过”的口头声明或脏工作区都不能进入下一道闸门。

## 9. 项目验证矩阵

| 变更类型 | 最低验证 |
| --- | --- |
| 仅协作文档 | YAML 解析、引用路径检查、`git diff --check`、最终 `git status --short --branch` |
| 内容模型或 `src/content.js` | `npm run check:content`、`git diff --check`；公开文案加三语浏览器检查 |
| JSX、CSS、资产、构建或配置 | `npm run check`、`git diff --check`、目标路由、浏览器控制台和相关视口 |
| 交互或无障碍 | 上述检查，加键盘、焦点、Esc、菜单、筛选和询价链路实际证据 |
| 静态路由、SEO、预渲染 | 三条公开路由、未知路径真实 404、页面 metadata、保存语言后的 hydration |
| Supabase 或数据层 | 本地兜底、远程映射、RLS/密钥边界、失败回退；不得恢复已删除 UI |
| 公开资质、政策、真人资料 | 用户或业务负责人确认引用；构建成功不能替代授权 |
| 发布候选 | 精确 `main` SHA、完整构建、浏览器矩阵、干净工作区、独立最终 `PASS` |
| 部署 | 用户明确授权后执行；上线后验证路由、资源、控制台和部署 SHA |

## 10. 项目红线

- 不擅自 push、部署、发布、删除分支/Worktree、改写历史或覆盖用户修改。
- 不直接编辑或提交 `dist-netlify/`。
- 不恢复搜索、路线收藏、分享、实用指南或候补名单。
- 不编造价格、时长、人数、政策、回复时效、导游履历、评价或旅行细节。
- 不在用户未选定时重新生成或替换网站图片。
- 发现来源不明的工作区修改，立即停止写入，先查明归属并记录到台账。
- 测试通过不等于功能完成；每条验收标准都必须有对应证据。
