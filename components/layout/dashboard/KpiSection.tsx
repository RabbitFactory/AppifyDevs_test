"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import KpiCard from "./KpiCard";
import { Skeleton } from "./Skeleton";

export default function KpiSection() {
  const { data, loading } = useDashboardStore();
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.kpis.map((k) => (
        <KpiCard key={k.id} title={k.label} value={k.value} change={k.change} />
      ))}
    </div>
  );
}
