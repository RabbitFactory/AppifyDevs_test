"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import type { DateRange, UserType } from "@/types/dashboard";
import { useState } from "react";

const dateOptions: { label: string; value: DateRange }[] = [
  { label: "Last 7 days", value: "7d" },
  { label: "Last 30 days", value: "30d" },
  { label: "Last 12 months", value: "12m" },
];

const userOptions: { label: string; value: UserType }[] = [
  { label: "All users", value: "All" },
  { label: "Free users", value: "Free" },
  { label: "Premium users", value: "Premium" },
  { label: "Enterprise users", value: "Enterprise" },
];

function Dropdown<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: T }[];
  value: T;
  onChange: (v: T) => void;
}) {
  const [open, setOpen] = useState(false);
  const current = options.find((o) => o.value === value)?.label ?? "";
  return (
    <div className="relative">
      <button
        className={`flex items-center gap-2 rounded border border-gray-200 bg-white px-2 py-2 text-sm transition-all duration-150 hover:bg-gray-100 dark:bg-neutral-900 dark:border-neutral-800`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" className={`fill-current transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>
      <div
        className={`absolute left-0 z-10 mt-1 w-48 rounded border border-gray-200 bg-white p-1 text-sm shadow transition-all duration-150 transform dark:bg-neutral-900 dark:border-neutral-800 ${
          open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
        }`}
        role="listbox"
      >
        {options.map((o) => (
          <button
            key={o.value}
            className={`flex w-full items-center justify-between rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 ${o.value === value ? "font-semibold" : ""}`}
            onClick={() => {
              onChange(o.value);
              setOpen(false);
            }}
            role="option"
            aria-selected={o.value === value}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Filters() {
  const { dateRange, userType, setDateRange, setUserType, loading, error, refreshData } = useDashboardStore();
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Dropdown<DateRange> options={dateOptions} value={dateRange} onChange={(v) => setDateRange(v)} />
        <Dropdown<UserType> options={userOptions} value={userType} onChange={(v) => setUserType(v)} />
      </div>
      <div className="flex items-center gap-2">
        {error && <span className="text-sm text-red-600">{error}</span>}
        <button
          className="rounded bg-blue-600 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          onClick={() => refreshData()}
          disabled={loading}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
