"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 md:px-8">
      <section className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:items-center">
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700">
            稳定版 Next.js · 模块化架构
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            构建可扩展的业务应用骨架
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            当前项目已经按照模块化架构初始化：路由、组件库、数据层、Hooks、配置中心等目录均已就位，
            适合作为中大型应用的基础脚手架。
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              查看仪表盘
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                window.location.href = "/profile";
              }}
            >
              查看个人中心
            </Button>
          </div>
        </div>
        <Card className="bg-gradient-to-b from-slate-50 to-white shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            当前架构模块
          </h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <dt>路由层（app/）</dt>
              <dd className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
                Ready
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>组件库（components/）</dt>
              <dd className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
                Ready
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>数据与工具（lib/）</dt>
              <dd className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
                Ready
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Hooks / Config</dt>
              <dd className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
                Ready
              </dd>
            </div>
          </dl>
        </Card>
      </section>
    </main>
  );
}
