import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        <h1 className="text-2xl font-semibold text-slate-900">仪表盘</h1>
        <p className="mt-2 text-sm text-slate-600">
          这里是一个示例仪表盘页面，你可以在此展示统计数据和关键指标。
        </p>
      </Card>
      <Card>
        <p className="text-sm text-slate-600">
          这是一个侧边卡片，用于放置快捷操作或提醒信息。
        </p>
      </Card>
    </div>
  );
}
