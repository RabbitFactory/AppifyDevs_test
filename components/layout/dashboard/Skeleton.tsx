"use client";

type Props = {
  className?: string;
};

export function Skeleton({ className = "" }: Props) {
  return <div className={`animate-pulse rounded bg-gray-100 dark:bg-neutral-800 ${className}`} />;
}
