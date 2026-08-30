# ZigZag China 协作规则

开始任何任务前，先阅读 `HANDOFF.md` 和 `docs/WORKTREE_OPERATING_MODEL.md`，再运行：

```bash
git status --short --branch
git log -3 --oneline
```

## 工作方式

- `main` 是唯一集成基线；只有总控窗口负责合并、更新交接、推送和部署。
- 编码窗口使用独立 Worktree，一次只完成一个边界清楚的任务，并提交到自己的分支。
- 默认同时开启两个编码窗口。只有文件所有权不重叠时，才增加第三个。
- 不直接编辑或提交 `dist-netlify/`。它是构建产物，由本地检查、CI 或 Netlify 从源码生成。
- 不恢复已删除的搜索、路线收藏、分享、实用指南或候补名单功能。
- 未经用户提供和确认，不编造价格、时长、人数、政策、回复时效、导游履历、评价或旅行细节。
- 未经用户选定，不重新生成或替换现有网站图片。

## 默认文件边界

- 平台与 SEO：`index.html`、`public/`、`vite.static.config.js`、`netlify.toml`、新建的预渲染/路由文件。
- 视觉与性能：`src/styles.css`、`assets/`；如需改 JSX 结构，先交由总控协调。
- 产品与内容（拿到真实数据后再开启）：`src/main.jsx`、`src/content.js`、内容模型与询价流程。
- QA：`scripts/`、测试与 CI 配置；默认只读业务源文件。
- 总控专属：`HANDOFF.md`、`README.md`、`AGENTS.md`、`docs/WORKTREE_OPERATING_MODEL.md`、共享依赖和最终发布配置。

若任务必须跨越边界，先在提交说明中列出原因；不要静默修改另一个窗口正在负责的文件。

## 验证要求

- 内容改动至少运行 `npm run check:content`。
- 代码、样式、构建或配置改动运行 `npm run check` 和 `git diff --check`。
- 页面交互或响应式改动还要检查相关路由、浏览器控制台和目标视口。
- 工作窗口不部署；将提交 SHA、检查结果、残余风险和需要总控处理的共享文件写入最终回复。
