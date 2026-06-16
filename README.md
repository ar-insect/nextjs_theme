# Next.js Demo

一个基于 Next.js 14、React 18、TypeScript 与 Tailwind CSS 的简易示例项目，展示了模块化目录组织、基础页面路由与 API 路由的组合方式。

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint

## 快速开始

先安装依赖：

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

## 说明

- 使用 App Router 目录结构组织页面
- 已包含基础 UI 组件与布局组件
- 适合作为中小型后台或业务项目的起始模板
