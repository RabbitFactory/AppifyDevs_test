import { dashboardData } from "@/data/mockData";
import type { DashboardData, DateRange, UserType, MonthlyDatum, DistributionDatum } from "@/types/dashboard";

const WEEKDAYS = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

function gen7dSeries(base: number, amplitude: number): MonthlyDatum[] {
  return WEEKDAYS.map((day, i) => ({
    month: day,
    value: Math.round(base + Math.sin((i / WEEKDAYS.length) * Math.PI * 2) * amplitude),
  }));
}

function gen30dSeries(base: number, amplitude: number): MonthlyDatum[] {
  const out: MonthlyDatum[] = [];
  for (let i = 1; i <= 30; i++) {
    out.push({
      month: String(i),
      value: Math.round(base + Math.sin((i / 30) * Math.PI * 2) * amplitude),
    });
  }
  return out;
}

function sliceOrGenerate(data: MonthlyDatum[], range: DateRange, base: number, amp: number): MonthlyDatum[] {
  if (range === "12m") return data;
  if (range === "30d") return gen30dSeries(base, amp);
  return gen7dSeries(base, amp);
}

function filterUserDistribution(dist: DistributionDatum[], userType: UserType): DistributionDatum[] {
  if (userType === "All") return dist;
  return dist.filter((d) => d.name === userType);
}

export async function fetchDashboard(range: DateRange, userType: UserType): Promise<DashboardData> {
  await new Promise((res) => setTimeout(res, 800));
  if (Math.random() < 0.1) {
    throw new Error("Failed to load dashboard data");
  }
  try {
    const res = await fetch("/mock.json");
    const json = (await res.json()) as DashboardData;
    const baseRevenue = json.revenueMonthly[json.revenueMonthly.length - 1]?.value ?? 6000;
    const baseOrders = json.ordersMonthly[json.ordersMonthly.length - 1]?.value ?? 30;
    const revenueMonthly = sliceOrGenerate(json.revenueMonthly, range, baseRevenue, Math.max(200, Math.round(baseRevenue * 0.08)));
    const ordersMonthly = sliceOrGenerate(json.ordersMonthly, range, baseOrders, Math.max(2, Math.round(baseOrders * 0.2)));
    const userDistribution = filterUserDistribution(json.userDistribution, userType);
    return {
      kpis: json.kpis,
      revenueMonthly,
      ordersMonthly,
      userDistribution,
    };
  } catch {
    const baseRevenue = dashboardData.revenueMonthly[dashboardData.revenueMonthly.length - 1]?.value ?? 6000;
    const baseOrders = dashboardData.ordersMonthly[dashboardData.ordersMonthly.length - 1]?.value ?? 30;
    const revenueMonthly = sliceOrGenerate(dashboardData.revenueMonthly, range, baseRevenue, Math.max(200, Math.round(baseRevenue * 0.08)));
    const ordersMonthly = sliceOrGenerate(dashboardData.ordersMonthly, range, baseOrders, Math.max(2, Math.round(baseOrders * 0.2)));
    const userDistribution = filterUserDistribution(dashboardData.userDistribution, userType);
    return {
      kpis: dashboardData.kpis,
      revenueMonthly,
      ordersMonthly,
      userDistribution,
    };
  }
}
