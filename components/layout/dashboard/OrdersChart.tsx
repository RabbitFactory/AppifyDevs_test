"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Skeleton } from "./Skeleton";

export default function OrdersChart() {
  const { data, loading, error } = useDashboardStore();
  if (loading) return <Skeleton className="h-64" />;
  if (error) return <div className="flex h-64 items-center justify-center rounded border border-red-200 bg-red-50 text-red-600">Error loading chart</div>;
  if (!data.ordersMonthly.length) return <div className="flex h-64 items-center justify-center rounded border border-gray-200 bg-white dark:bg-neutral-900">No data</div>;
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="mb-2 text-sm font-semibold">Orders Per Month</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.ordersMonthly}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
