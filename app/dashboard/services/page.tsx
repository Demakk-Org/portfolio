"use client";

import React from "react";
import UpdateDashboardData from "../../../components/dashboard/dashboard-crud/update-dashboard-data";
import useServiceData from "../../../hooks/useServiceData";
import { CategoryType, DataItem } from "../../../types/type";

const Page = () => {
  const { data, isLoading, error } = useServiceData({ itemQuantity: 10 });

  if (isLoading) return <p className="min-w-full p-[300px]">Loading...</p>;
  if (error) return <div>Error: {error}</div>;

  return (
    <UpdateDashboardData
      data={data as DataItem[]}
      category={CategoryType.services}
    />
  );
};

export default Page;
