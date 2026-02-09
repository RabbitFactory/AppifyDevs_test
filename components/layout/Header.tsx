"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="font-semibold">Admin Dashboard</div>
      <div className="flex items-center gap-2">
        <button className="rounded p-2 hover:bg-gray-100 dark:hover:bg-neutral-800" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
            <path d="M12 24a2.4 2.4 0 0 0 2.4-2.4h-4.8A2.4 2.4 0 0 0 12 24Zm8.4-6v-6.6a8.4 8.4 0 1 0-16.8 0V18l-2.4 2.4v1.2h21.6v-1.2L20.4 18Z" />
          </svg>
        </button>
        <div className="relative">
          <button
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            <div className="size-6 rounded-full bg-gray-300" />
            <span className="text-sm">Jane</span>
            <svg width="14" height="14" viewBox="0 0 24 24" className="fill-current">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>
          {open && (
            <div className="absolute right-0 z-10 mt-2 w-40 rounded border border-gray-200 bg-white p-1 text-sm shadow dark:bg-neutral-900 dark:border-neutral-800">
              <button className="flex w-full items-center justify-between rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800">
                Profile
              </button>
              <button className="flex w-full items-center justify-between rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800">
                Settings
              </button>
              <button className="flex w-full items-center justify-between rounded px-2 py-2 hover:bg-red-50 text-red-600">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
