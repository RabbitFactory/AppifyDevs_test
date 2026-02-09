"use client";

type Props = {
  title: string;
  value: string | number;
  change: number;
};

export default function KpiCard({ title, value, change }: Props) {
  const positive = change >= 0;
  const changeColor = positive ? "text-emerald-600" : "text-red-600";
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow dark:bg-neutral-900 dark:border-neutral-800">
      <div className="text-sm text-gray-500 dark:text-neutral-400">{title}</div>
      <div className="mt-1 text-2xl font-semibold">{typeof value === "number" ? value.toLocaleString() : value}</div>
      <div className={`mt-2 flex items-center gap-1 text-sm ${changeColor}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" className="fill-current">
          {positive ? <path d="M7 14l5-5 5 5z" /> : <path d="M7 10l5 5 5-5z" />}
        </svg>
        <span>{Math.abs(change).toFixed(1)}%</span>
        <span className="text-gray-400 dark:text-neutral-500">vs prev</span>
      </div>
    </div>
  );
}
