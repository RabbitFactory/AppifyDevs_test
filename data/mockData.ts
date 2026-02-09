import type { DashboardData, MonthlyDatum, DistributionDatum, Kpi } from "@/types/dashboard";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const revenueMonthly: MonthlyDatum[] = [
  { month: "Jan", value: 4200 },
  { month: "Feb", value: 4800 },
  { month: "Mar", value: 5100 },
  { month: "Apr", value: 5300 },
  { month: "May", value: 5600 },
  { month: "Jun", value: 6000 },
  { month: "Jul", value: 6200 },
  { month: "Aug", value: 6500 },
  { month: "Sep", value: 5800 },
  { month: "Oct", value: 5000 },
  { month: "Nov", value: 5600 },
  { month: "Dec", value: 6330 },
];

const ordersMonthly: MonthlyDatum[] = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 25 },
  { month: "Mar", value: 28 },
  { month: "Apr", value: 30 },
  { month: "May", value: 32 },
  { month: "Jun", value: 35 },
  { month: "Jul", value: 36 },
  { month: "Aug", value: 38 },
  { month: "Sep", value: 34 },
  { month: "Oct", value: 29 },
  { month: "Nov", value: 31 },
  { month: "Dec", value: 34 },
];

const userDistribution: DistributionDatum[] = [
  { name: "Free", value: 60 },
  { name: "Premium", value: 30 },
  { name: "Enterprise", value: 10 },
];

const kpis: Kpi[] = [
  { id: "revenue", label: "Total Revenue", value: 54230, change: 5.2 },
  { id: "users", label: "Total Users", value: 1245, change: 2.1 },
  { id: "orders", label: "Orders", value: 342, change: -1.7 },
  { id: "conversion", label: "Conversion Rate", value: "4.3%", change: 0.4 },
];

export const dashboardData: DashboardData = {
  kpis,
  revenueMonthly,
  ordersMonthly,
  userDistribution,
};

export { months };
