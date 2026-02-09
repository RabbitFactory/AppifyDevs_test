import { dashboardData } from "@/data/mockData";
import type { DashboardData, DateRange, UserType, MonthlyDatum, DistributionDatum } from "@/types/dashboard";

function sliceByRange(data: MonthlyDatum[], range: DateRange): MonthlyDatum[] {
  if (range === "12m") return data;
  if (range === "30d") return data.slice(-3);
  return data.slice(-1);
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
    const revenueMonthly = sliceByRange(json.revenueMonthly, range);
    const ordersMonthly = sliceByRange(json.ordersMonthly, range);
    const userDistribution = filterUserDistribution(json.userDistribution, userType);
    return {
      kpis: json.kpis,
      revenueMonthly,
      ordersMonthly,
      userDistribution,
    };
  } catch {
    const revenueMonthly = sliceByRange(dashboardData.revenueMonthly, range);
    const ordersMonthly = sliceByRange(dashboardData.ordersMonthly, range);
    const userDistribution = filterUserDistribution(dashboardData.userDistribution, userType);
    return {
      kpis: dashboardData.kpis,
      revenueMonthly,
      ordersMonthly,
      userDistribution,
    };
  }
}
