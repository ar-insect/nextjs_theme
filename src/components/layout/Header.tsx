"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useToggle } from "@/hooks/useToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const { value: mobileOpen, toggle, setValue } = useToggle(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="relative z-30 border-b border-slate-200 bg-white px-4 py-3 sm:px-6 md:px-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-base font-semibold text-slate-900 sm:text-lg">
          Next.js Demo
        </Link>
        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <Link
              href="/profile"
              className={`rounded-md px-3 py-2 hover:text-slate-900 ${
                isActive("/profile") ? "bg-slate-100 text-slate-900" : ""
              }`}
            >
              个人中心
            </Link>
            <Link
              href="/dashboard"
              className={`rounded-md px-3 py-2 hover:text-slate-900 ${
                isActive("/dashboard") ? "bg-slate-100 text-slate-900" : ""
              }`}
            >
              仪表盘
            </Link>
          </nav>
          <ThemeToggle />
        </div>
        <button
          type="button"
          aria-label="打开导航"
          aria-expanded={mobileOpen}
          onClick={toggle}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 md:hidden"
        >
          <span className="sr-only">打开导航</span>
          <div className="flex h-4 w-4 flex-col justify-between">
            <span className="h-[2px] w-full rounded bg-current" />
            <span className="h-[2px] w-full rounded bg-current" />
            <span className="h-[2px] w-full rounded bg-current" />
          </div>
        </button>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="关闭导航"
            className="absolute inset-0 h-full w-full bg-black/40"
            onClick={() => setValue(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-64 flex-col gap-2 bg-white p-6 shadow-xl">
            <Link
              href="/profile"
              onClick={() => setValue(false)}
              className={`rounded-lg px-3 py-3 text-base ${
                isActive("/profile") ? "bg-slate-100 text-slate-900" : "text-slate-700"
              }`}
            >
              个人中心
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setValue(false)}
              className={`rounded-lg px-3 py-3 text-base ${
                isActive("/dashboard") ? "bg-slate-100 text-slate-900" : "text-slate-700"
              }`}
            >
              仪表盘
            </Link>
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
