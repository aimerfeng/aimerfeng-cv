# AimerFeng CV

个人简历网站，基于 Vue 3 + Vite + UnoCSS 构建。

## 特性

- 🎨 响应式设计，支持暗色模式
- 🖨️ 支持打印为 PDF
- ⚡ 基于 Vite 的快速开发体验
- 🎯 UnoCSS 原子化 CSS
- 📱 移动端友好

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动部署到 GitHub Pages。

## 自定义

编辑以下文件来自定义内容：

- `src/components/Header.vue` - 个人信息和社交链接
- `src/components/TechStack.vue` - 技术栈
- `src/components/Experience.vue` - 工作经历
- `src/components/Projects.vue` - 项目
- `src/components/Articles.vue` - 文章

## License

MIT
