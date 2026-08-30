# ZigZag China 专项交付模板

此模板用于专项负责人直接交付给 `qa-gate`，不是第二份任务台账。总控确认交付后，必须把 commit、测试、验收证据与风险回写 `TASKS.yaml`。

```markdown
# <issue ID> <标题> 交付

- Owner：<唯一 owner>
- 执行档位：<model profile / model / reasoning effort>
- Branch：<codex/zc-...>
- Base checkpoint：<完整 40 位 SHA>
- Delivery commit：<完整 40 位 SHA>
- Handoff target：qa-gate
- 请求状态：REVIEW

## 修改范围

- 修改文件：<逐项列出>
- 与 scope 的对应关系：<说明每个文件为什么在允许范围内>
- 公共接口：<未修改 / 已按 TASKS.yaml 中的授权修改>
- 禁止范围声明：未修改任务禁止范围，未编辑或提交 `dist-netlify/`，未 push，未部署。

## 验收标准证据

| AC | 结果 | 证据 |
| --- | --- | --- |
| AC-001 | PASS / FAIL | <命令、页面、截图或可复现说明> |

## 测试

| 命令或人工检查 | 结果 | 运行 checkpoint | 环境与摘要 |
| --- | --- | --- | --- |
| `<command>` | PASS / FAIL | `<完整 SHA>` | <Node、路由、视口、控制台等> |

## Git 状态

- `git status --short --branch`：<粘贴摘要；必须干净>
- 当前分支：<必须与任务分支一致且非 detached；纯只读验收除外>
- Commit 聚焦性：<说明仅包含本任务>

## 风险与集成

- 未解决风险：<无 / 列出严重度、owner、处置>
- 阻断或用户确认项：<无 / 列出>
- 依赖与推荐合并顺序：<说明>
- 潜在文件冲突：<无 / 路径>
- 回滚说明：<如何安全 revert 本提交>
- 需要总控处理的共享文件：<无 / 列出；专项不要自行修改>
```

验收者必须另外给出 `BLOCK`、`WARN` 或 `PASS`，并绑定精确提交 SHA。缺少任何验收标准证据、工作区不干净、越界修改或未确认公开信息时，不得给出 `PASS`。
