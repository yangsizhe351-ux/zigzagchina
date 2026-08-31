# ZigZag China 当前交接

更新时间：2026-08-31 10:47（Asia/Shanghai）

## 30 秒接管

1. 进入 `/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`。
2. 按顺序读 `AGENTS.md`、`WORKFLOW.md`、`TASKS.yaml` 和 `docs/WORKTREE_OPERATING_MODEL.md`。
3. 运行 `git status --short --branch`、`git log -3 --oneline`、`git rev-parse HEAD`。
4. 当前唯一总控是绑定保存项目 `Zigzag` 的本任务；不要使用项目外同名旧窗口。
5. 所有实时任务状态、owner、范围、模型档位和证据只查 `TASKS.yaml`。

## 权威检查点

- 本地项目：`/Users/yangsizhe/Documents/Codex/2026-08-22/new-chat/CDQC`
- Git 远端：`https://github.com/yangsizhe351-ux/zigzagchina.git`
- 分支：`main`
- 本轮只读审计基准：`03efa5cca19b4371bd10afb99b7061cdd985a800`
- ZC-001 交付 commit：`ae8bdb687b973fc68f92d9a4037fef0cbee41645`
- 首轮验收目标：`b555d92a2cd72341c26ec2508d4e4eb17d20cf22`，结论 `BLOCK`
- 状态机纠正 commit：`9768d0f1a0cece9ee203de6677a6fcbf8a105a7a`
- 第二次复审目标：`7242a8bb6cd7e6d9b7d64fbc6b40ef7a873259f8`，结论 `BLOCK`
- 独立验收任务：`01a05590-acd0-73b1-808e-04fc11b95db2`
- 远端跟踪基准：`origin/main` = `57dd73b`；模型升级分配提交前本地 `main` 领先 13 个提交
- 历史最终功能候选：`bca4e4c` 曾获独立 `PASS`，但该结论不覆盖当前 HEAD
- 生产地址配置：`https://zigzagchina.netlify.app/`；本轮未验证线上部署状态

源代码、Git 对象和 `TASKS.yaml` 是事实来源。`main` 当前 HEAD 以后续命令输出为准；候选提交不能在自身文件中记录自己的 SHA，最终精确 SHA 闸门使用 `TASKS.yaml` 预声明的本地 annotated tag。

## 当前开发状态

- 技术栈：React 19.2.8、Vite 8.2.2、Node 22、Netlify 静态构建。
- `npm run check` 仅执行三语内容结构检查和生产构建；仓库没有 lint、单元测试、E2E 或 CI 配置。
- 静态路由、真实 404、hydration、视觉性能和响应式修复已合并到本地 `main`。
- ZC-001 的状态机根因已经通过复核，但第二次同类验收因模型升级记录缺失再次 `BLOCK`；现按规则提升为 `frontier_gate / gpt-5.6-sol / xhigh`，等待干净上下文 ZC-007 复审。
- 在 ZC-001 commit 上，YAML 解析、`npm run check`、`git diff --check` 和干净工作区检查均通过。
- 正式推广状态：`BLOCKED / PENDING_USER_ACTION`。独立验收通过也不等于获得 push 或部署授权。

## 活跃与阻塞任务

- `ZC-001`：协作控制面落地与状态纠偏，`BLOCKED`，`rework_count: 2`，执行档位升级为 `frontier_gate`。
- `ZC-002`：等待用户/业务负责人确认发布范围、资质、翻译、姓名授权、联系与政策、Supabase 决定。
- `ZC-003`：站内询价与政策实现，阻塞于 ZC-002。
- `ZC-004`：正式域名与发布级 SEO，阻塞于 ZC-002。
- `ZC-005`：首次工作流与交接独立验收，`BLOCKED`，等待模型升级复审完成。
- `ZC-006`：旧窗口安全收口，等待首次验收后执行。
- `ZC-007`：第二次控制面模型升级根因复审，`READY`，必须显式使用 `gpt-5.6-sol / xhigh` 的新任务。

完整字段、依赖、验收标准、证据与状态历史见 `TASKS.yaml`，本节不构成第二份台账。

## 最高优先级阻塞

1. 用户需确认当前目标是内部预览验证还是正式推广。
2. 经营主体、许可证、许可范围、中法文翻译和法定代表人姓名公开授权需权威确认。
3. 联系邮箱、邮件主题、隐私、条款、取消/改期、服务范围与回复承诺需确认。
4. `supabase/seed.sql` 包含未经确认的体验时长；在 ZC-002 完成前不得用于生产。
5. 正式域名未选定，不能完成 canonical、sitemap、品牌邮箱和发布级社交元数据。

## 历史 Worktree 与窗口

- `codex/platform-seo-static-routes` @ `2a64a5c`：历史只读。
- `codex/visual-performance` @ `5d71970`：历史只读。
- detached QA @ `72dad7f`：历史只读，禁止继续开发。
- 旧 `ZZ-99`、项目外同名总控和卡死诊断任务没有附属 Worktree，可在 ZC-006 中安全归档。

不得归档上述三个与 Worktree 关联的历史专项任务，因为托管 Worktree 可能随任务归档被删除；本轮也没有删除分支或 Worktree 的授权。

## 已知风险

- 本地 `main` 尚未推送；远端与本地不是同一检查点。
- 历史 `PASS` 未绑定当前 HEAD，不能据此发布。
- 缺少自动化交互与浏览器回归套件，页面行为仍需要人工证据。
- `.next`、`dist`、`next-env.d.ts` 等旧构建残留存在，但来源已知且不在本轮清理范围。
- `supabase/seed.sql` 的时长数据来源未确认。

## 下一步

1. 提交 ZC-001 的模型升级分配和 ZC-007 任务包，保持 `main` 干净。
2. 新建显式 `gpt-5.6-sol / xhigh` 的 ZC-007 只读 Worktree，验证升级规则和最小根因方案。
3. ZC-007 `PASS` 后由总控回写证据，再把新精确 SHA 交给原 ZC-005 qa-gate。
4. 第一阶段 `PASS` 后只回写台账收口；对新的精确 SHA 做第二阶段最终验收。
5. 最终 `PASS` 后创建 `refs/tags/qa-pass/ZC-005-20260831-01`；不 push、不部署。
6. 完成 ZC-006 的安全窗口整理；保留历史 Worktree 只读。
7. 等用户处理 ZC-002 后，再决定是否开启 ZC-003 或 ZC-004。

## 接管红线

- 不从旧 detached Worktree 开发。
- 不编辑或提交 `dist-netlify/`。
- 不恢复明确删除的功能，不编造旅游、政策或公开资质事实，不替换未选定图片。
- 不把构建通过当成功能完成，不把 QA `PASS` 当成上线授权。
- 未经用户明确授权，不 push、部署、发布、删除或改写历史。
