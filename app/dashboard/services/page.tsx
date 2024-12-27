"use client";

import React from "react";
import UpdateDashboardData, {
  DataItem,
} from "../../../components/dashboard/update-dashboard-data";
import useServiceData from "../../../hooks/useServiceData";

const Page = () => {
  const { data, isLoading, error } = useServiceData({ itemQuantity: 10 });

  if (isLoading) return <div className="min-w-full p-[300px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <UpdateDashboardData data={data as DataItem[]} category="services" />
    </>
  );
};

export default Page;
