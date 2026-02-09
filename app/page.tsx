"use client";

import Filters from "@/components/layout/dashboard/Filters";
import KpiSection from "@/components/layout/dashboard/KpiSection";
import ChartsSection from "@/components/layout/dashboard/ChartsSection";
import { useEffect } from "react";
import { useDashboardStore } from "@/store/dashboardStore";

export default function Page() {
  const { refreshData } = useDashboardStore();
  useEffect(() => {
    refreshData();
  }, [refreshData]);
  return (
    <div className="space-y-4">
      <Filters />
      <KpiSection />
      <ChartsSection />
    </div>
  );
}
