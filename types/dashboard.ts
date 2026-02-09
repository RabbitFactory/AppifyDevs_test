export type DateRange = "7d" | "30d" | "12m";
export type UserType = "All" | "Free" | "Premium" | "Enterprise";

export type Kpi = {
  id: "revenue" | "users" | "orders" | "conversion";
  label: string;
  value: number | string;
  change: number;
};

export type MonthlyDatum = {
  month: string;
  value: number;
};

export type DistributionDatum = {
  name: string;
  value: number;
};

export type DashboardData = {
  kpis: Kpi[];
  revenueMonthly: MonthlyDatum[];
  ordersMonthly: MonthlyDatum[];
  userDistribution: DistributionDatum[];
};

export type DashboardState = {
  dateRange: DateRange;
  userType: UserType;
  loading: boolean;
  error: string | null;
  data: DashboardData;
  setDateRange: (range: DateRange) => void;
  setUserType: (type: UserType) => void;
  refreshData: () => Promise<void>;
};
