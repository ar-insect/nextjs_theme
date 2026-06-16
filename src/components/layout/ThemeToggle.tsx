"use client";

import React from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme, fontSize, setFontSize, radius, setRadius } = useTheme();

  return (
    <div className="flex items-center gap-2 text-xs text-slate-600">
      <label className="flex items-center gap-1">
        <span className="hidden md:inline">主题</span>
        <select
          value={theme}
          onChange={(event) => setTheme(event.target.value as typeof theme)}
          className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10"
        >
          <option value="light">浅色</option>
          <option value="dark">深色</option>
          <option value="brand">品牌</option>
        </select>
      </label>
      <label className="flex items-center gap-1">
        <span className="hidden md:inline">字体</span>
        <select
          value={fontSize}
          onChange={(event) => setFontSize(event.target.value as typeof fontSize)}
          className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10"
        >
          <option value="sm">小</option>
          <option value="md">中</option>
          <option value="lg">大</option>
        </select>
      </label>
      <label className="flex items-center gap-1">
        <span className="hidden md:inline">圆角</span>
        <select
          value={radius}
          onChange={(event) => setRadius(event.target.value as typeof radius)}
          className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10"
        >
          <option value="sm">紧凑</option>
          <option value="md">适中</option>
          <option value="lg">圆润</option>
        </select>
      </label>
    </div>
  );
}
