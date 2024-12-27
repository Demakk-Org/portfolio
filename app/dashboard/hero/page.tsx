"use client";

import React from "react";
import useHeroData from "../../../hooks/useHeroData";
import UpdateDashboardData, {
  DataItem,
} from "../../../components/dashboard/update-dashboard-data";

const Page = () => {
  const { data, isLoading, error } = useHeroData({ itemQuantity: 1 });

  if (isLoading) return <div  className="p-[300px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <UpdateDashboardData data={data as DataItem[]} category="hero" />;
};

export default Page;
