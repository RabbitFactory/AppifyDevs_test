import { create } from "zustand";
import type { DashboardState, DateRange, UserType } from "@/types/dashboard";
import { fetchDashboard } from "@/lib/fetchDashboard";
import { dashboardData } from "@/data/mockData";

export const useDashboardStore = create<DashboardState>((set, get) => ({
  dateRange: "12m",
  userType: "All",
  loading: false,
  error: null,
  data: dashboardData,
  setDateRange: (range: DateRange) => {
    set({ dateRange: range });
    get().refreshData();
  },
  setUserType: (type: UserType) => {
    set({ userType: type });
    get().refreshData();
  },
  refreshData: async () => {
    const { dateRange, userType } = get();
    set({ loading: true, error: null });
    try {
      const data = await fetchDashboard(dateRange, userType);
      set({ data, loading: false, error: null });
    } catch (e) {
      set({ loading: false, error: (e as Error).message });
    }
  },
}));
