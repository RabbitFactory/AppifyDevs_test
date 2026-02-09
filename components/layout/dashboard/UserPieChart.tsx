"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Skeleton } from "./Skeleton";

const COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444"];

export default function UserPieChart() {
  const { data, loading, error } = useDashboardStore();
  if (loading) return <Skeleton className="h-64" />;
  if (error) return <div className="flex h-64 items-center justify-center rounded border border-red-200 bg-red-50 text-red-600">Error loading chart</div>;
  if (!data.userDistribution.length) return <div className="flex h-64 items-center justify-center rounded border border-gray-200 bg-white dark:bg-neutral-900">No data</div>;
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="mb-2 text-sm font-semibold">User Distribution</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data.userDistribution} dataKey="value" nameKey="name" outerRadius={90} innerRadius={40} label>
              {data.userDistribution.map((_, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
