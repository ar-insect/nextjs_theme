import React from "react";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-8 py-10">
      {children}
    </section>
  );
}
