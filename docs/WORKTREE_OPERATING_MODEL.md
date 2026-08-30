# ZigZag China Worktree 操作附录

角色、任务状态、模型调度和验收规则的唯一规范是根目录 `WORKFLOW.md`。本文件只说明 Worktree 的技术操作约束。

## 开始前检查

每个窗口先读取 `AGENTS.md`、`WORKFLOW.md`、`TASKS.yaml` 与 `HANDOFF.md`，再运行：

```bash
git status --short --branch
git log -3 --oneline
git rev-parse HEAD
```

将输出与任务的 `workspace`、`branch` 和完整 `base_checkpoint` 对照。任何一项不一致或出现来源不明的修改，都应停止写入并通知 `control`。

## 开发 Worktree

- 每个开发任务使用 `codex/zc-<编号>-<主题>` 唯一分支。
- 创建或打开 Worktree 后，先确认 `git symbolic-ref --short HEAD` 返回目标分支；detached 时禁止编辑。
- 一个 Git 分支只能被一个 Worktree 检出。
- 只修改 `scope.allowed_paths` 内且已获得 `file_lease` 的路径。
- 专项不修改 `TASKS.yaml`、`HANDOFF.md` 或其他总控文件；通过交付消息把证据直接交给总控和验收者。
- 完成后提交聚焦 commit，保持工作区干净。不得 push、部署或提交构建产物。

## 独立验收 Worktree

- 验收窗口应从待审精确 SHA 新建，允许 detached HEAD，因为它严格只读。
- 每次报告都包含 `git rev-parse HEAD` 的完整 SHA，以及 `BLOCK / WARN / PASS`、逐项 AC、命令结果和残余风险。
- 旧 detached Worktree 只作为历史证据，不得切分支继续开发。
- 验收发现问题时退回原 owner；不得在同一窗口顺手修复。

## 文件重叠与基线变化

- 总控在任务进入 `IN_PROGRESS` 前检查所有活动 `file_lease`。
- 路径相同或目录前缀重叠时，后续任务必须依赖前一任务并串行。
- `main` 前进不会自动改变已启动任务的 `base_checkpoint`。是否 rebase、重开任务或维持原基准由总控决定，并记录在台账。
- 合并或冲突解决产生新 SHA 后，旧验收结论不再覆盖新 SHA。

## 历史 Worktree

当前三个旧专项 Worktree 仅保留只读证据：

- `codex/platform-seo-static-routes`，历史 checkpoint `2a64a5c`；
- `codex/visual-performance`，历史 checkpoint `5d71970`；
- detached QA，历史 checkpoint `72dad7f`。

不要从这些位置继续开发，也不要把归档 Codex 任务当成删除 Worktree 的安全方式。删除、迁移或清理必须另建任务并取得用户授权。
