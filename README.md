# AimerFeng CV

个人简历站，基于 Vue 3 + Vite + UnoCSS 构建。

## 项目定位

这是一个可持续扩展的个人简历站，当前聚焦于：

- 统一个人介绍、经历、项目和文章表达
- 兼顾浏览、展示和打印输出
- 为后续新增功能预留清晰的组件边界

## 技术栈

- Vue 3
- Vite
- TypeScript
- UnoCSS
- GitHub Pages

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建与校验

```bash
pnpm build
pnpm build:check
pnpm preview
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动部署到 GitHub Pages。

## 目录结构

- `src/App.vue` - 页面入口与整体布局
- `src/components/Header.vue` - 个人信息与联系方式
- `src/components/TechStack.vue` - 技术栈展示
- `src/components/Education.vue` - 教育背景
- `src/components/Experience.vue` - 工作经历
- `src/components/Projects.vue` - 项目列表
- `src/components/GitHubContributions.vue` - GitHub 数据展示
- `src/components/Articles.vue` - 文章列表
- `src/components/SideNav.vue` - 侧边导航
- `src/styles/main.css` - 全局样式与打印样式

## 约定

- 文案尽量保持简洁、正式、统一
- 组件按内容模块拆分，避免把所有信息堆在单个文件里
- 公开信息和链接尽量从单一位置维护，后续便于集中替换

## License

MIT
