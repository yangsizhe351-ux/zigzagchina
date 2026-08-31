# ZigZag China 当前交接

更新时间：2026-08-31 11:35（Asia/Shanghai）

## 最短接管

1. 进入 `/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`，读 `AGENTS.md` 和本文件。
2. 运行 `git status --short --branch`、`git log -3 --oneline`。
3. 只从 `TASKS.yaml` 读取顶部策略和当前 issue 段；不要全文扫描历史任务。
4. 项目区只保留三个角色：唯一总控、一个当前专项、一个集成验收。

## 当前检查点

- 本轮接管基线：`51c8f4655dd3428f512273c9eb7652c3569a5999`；当前 `main` 以 `git rev-parse HEAD` 为准。
- `origin/main`：`57dd73b`；本地尚未 push。
- 当前专项分支：`codex/zc-008-workflow-validator`。
- 暂停交付：`90f62b5b03932631e48e54258ac1fa6ef192aafe`，未合并。
- 最小 QA：`BLOCK`；`check:workflow` 和完整构建通过，但校验器没有拒绝非法 `BACKLOG → IN_PROGRESS`。
- QA task：`01a05590-acd0-73b1-808e-04fc11b95db2`。

## 三个可见窗口

- `ZigZag 总控台（项目内唯一入口）`：接收需求、维护台账、集成。
- `ZigZag 当前专项`：只处理当前一个边界明确的实现。
- `ZigZag 集成验收`：只读检查精确 commit。

旧总控、诊断、自动启动调查、旧专项和一次性复审均已做可恢复归档。历史 Worktree 已在原路径恢复并保留，不在侧边栏继续显示或开发。

## 当前状态

- `ZC-006`：侧边栏收口完成，项目区最多三个窗口。
- `ZC-008`：`BLOCKED`，只剩合法状态转换边校验；租约已释放。
- `ZC-001`、`ZC-005`：继续等待 ZC-008，不开启新窗口。
- `ZC-002`：等待用户确认经营主体、许可/翻译/姓名授权、联系方式、政策、Supabase 数据与正式域名。
- 未获得 push、部署或发布授权。

## 明日唯一动作

1. 复用 `ZigZag 当前专项`，从 `90f62b5b03932631e48e54258ac1fa6ef192aafe` 开始，只修改 `scripts/check-workflow.rb`。
2. 增加明确的合法状态边映射，并加入 `BACKLOG → IN_PROGRESS` 必须失败的负向测试。
3. 运行 `npm run check:workflow`、该负向测试、`npm run check` 和 `git diff --check`。
4. 复用 `ZigZag 集成验收` 做一次两文件以内的最小复验；不创建新窗口，不展开全仓复审。

## 红线

- 不 push、部署、发布、删除分支/Worktree 或覆盖用户修改。
- 不从历史 detached Worktree 开发。
- 不编辑 `dist-netlify/`，不恢复已删除功能，不编造旅游、政策、资质或个人授权信息。
- `supabase/seed.sql` 的体验时长未确认，不得用于生产。
