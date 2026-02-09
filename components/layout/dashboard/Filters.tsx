"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import type { DateRange, UserType } from "@/types/dashboard";

const dateOptions: { label: string; value: DateRange }[] = [
  { label: "Last 7 days", value: "7d" },
  { label: "Last 30 days", value: "30d" },
  { label: "Last 12 months", value: "12m" },
];

const userOptions: { label: string; value: UserType }[] = [
  { label: "All users", value: "All" },
  { label: "New", value: "New" },
  { label: "Returning", value: "Returning" },
];

export default function Filters() {
  const { dateRange, userType, setDateRange, setUserType, loading, error, refreshData } = useDashboardStore();
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <select
          className="rounded border border-gray-200 bg-white px-2 py-2 text-sm dark:bg-neutral-900 dark:border-neutral-800"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value as DateRange)}
        >
          {dateOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <select
          className="rounded border border-gray-200 bg-white px-2 py-2 text-sm dark:bg-neutral-900 dark:border-neutral-800"
          value={userType}
          onChange={(e) => setUserType(e.target.value as UserType)}
        >
          {userOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        {error && <span className="text-sm text-red-600">{error}</span>}
        <button
          className="rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
          onClick={() => refreshData()}
          disabled={loading}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
