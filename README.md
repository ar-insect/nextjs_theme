# Next.js Demo

一个基于 Next.js 16、React 19、TypeScript 与 Tailwind CSS 的简易示例项目，展示了模块化目录组织、基础页面路由与 API 路由的组合方式。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint 9

## 快速开始

建议先切换到项目约定的 Node.js 版本：

```bash
nvm use 22.22.3
```

如果本机尚未安装该版本，可先执行：

```bash
nvm install 22.22.3
nvm use 22.22.3
```

再安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

启动生产服务：

```bash
npm run start
```

代码检查：

```bash
npm run lint
```

默认开发地址：

```text
http://localhost:3000
```

## 项目结构

```text
src/
  app/                 页面路由与 API 路由
  components/          通用组件、布局组件、主题组件
  config/              项目配置
  hooks/               自定义 Hooks
  lib/                 数据层与工具方法
```

## 当前页面

- `/`：首页，展示项目架构入口
- `/dashboard`：仪表盘示例页
- `/profile`：个人中心示例页
- `/api/user`：用户 API 示例，支持 `GET` 和 `POST`

## 部署说明

### 环境要求

- 建议使用 Node.js `22.22.3`
- 最低要求 Node.js `20.9+`
- 建议使用 npm 10 及以上版本
- 项目根目录提供了 `.nvmrc`，便于通过 `nvm use` 快速切换版本

可先检查本地环境：

```bash
node -v
npm -v
```

推荐输出示例：

```text
v22.22.3
10.x
```

### 开发说明

- `Next.js 16` 默认使用 Turbopack 进行 `dev` 和 `build`
- 代码检查命令已切换为 `eslint .`
- 项目当前已验证 `npm run lint` 和 `npm run build` 可通过

### 通用部署流程

1. 安装依赖

```bash
npm install
```

2. 执行生产构建

```bash
npm run build
```

3. 启动生产服务

```bash
npm run start
```

默认生产服务端口为 `3000`，如需自定义端口，可使用：

```bash
PORT=3000 npm run start
```

### 部署到 Vercel

本项目基于 Next.js，推荐直接部署到 Vercel。

部署步骤：

1. 将项目推送到 GitHub、GitLab 或 Bitbucket
2. 登录 [Vercel](https://vercel.com/)
3. 导入对应仓库
4. 框架选择 `Next.js`
5. 保持默认构建命令 `npm run build`
6. 点击部署

如果后续项目新增了环境变量，请在 Vercel 项目设置的 `Environment Variables` 中同步配置。

### 部署到自托管服务器

适用于 Linux 服务器、云主机或 Docker 外的常规 Node.js 运行环境。

推荐流程：

1. 将代码上传到服务器
2. 执行 `npm install`
3. 执行 `npm run build`
4. 使用 `npm run start` 启动服务
5. 通过 Nginx 或 Caddy 反向代理到对外端口

示例：

```bash
npm install
npm run build
PORT=3000 npm run start
```

建议配合 `pm2`、`systemd` 等进程管理工具保证服务常驻运行。

### 部署前检查

- 确认生产环境 Node.js 版本符合要求
- 确认依赖已完整安装
- 确认执行 `npm run build` 无报错
- 如使用 `nvm`，确认服务器 Node.js 版本与 `.nvmrc` 一致
- 如使用环境变量，确认 `.env` 配置已在服务器或平台中正确设置

## 说明

- 使用 App Router 目录结构组织页面
- 已包含基础 UI 组件与布局组件
- 适合作为中小型后台或业务项目的起始模板
