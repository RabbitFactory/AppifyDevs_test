"use client";

import RevenueChart from "./RevenueChart";
import OrdersChart from "./OrdersChart";
import UserPieChart from "./UserPieChart";

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <RevenueChart />
      <OrdersChart />
      <UserPieChart />
    </div>
  );
}
