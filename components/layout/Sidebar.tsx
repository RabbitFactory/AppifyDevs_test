"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const w = collapsed ? "w-20" : "w-64";
  return (
    <aside className={`${w} shrink-0 border-r border-gray-200 bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-all duration-200`}>
      <div className="flex h-14 items-center justify-between px-3">
        <div className="flex items-center gap-2">
          {/* <div className="size-8 rounded bg-blue-600" /> */}

          {collapsed && <span className="font-semibold">A</span>}
          {!collapsed && <span className="font-semibold">Analytics</span>}
        </div>
        <button
          aria-label="Toggle sidebar"
          className="rounded p-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
          onClick={() => setCollapsed((c) => !c)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
      </div>
      <nav className="px-2">
        <Link href="#" className="flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800">
          <span className="size-2 rounded bg-blue-600" />
          {!collapsed && <span>Dashboard</span>}
        </Link>
        <Link href="#" className="flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800">
          <span className="size-2 rounded bg-purple-600" />
          {!collapsed && <span>Reports</span>}
        </Link>
        <Link href="#" className="flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800">
          <span className="size-2 rounded bg-emerald-600" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </nav>
    </aside>
  );
}
