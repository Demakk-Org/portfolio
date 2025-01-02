"use client";

import React from "react";
import useHeroData from "../../../hooks/useHeroData";
import UpdateDashboardData from "../../../components/dashboard/dashboard-crud/update-dashboard-data";
import { CategoryType, DataItem } from "../../../types/type";

const Page = () => {
  const { data, isLoading, error } = useHeroData({ itemQuantity: 1 });

  if (isLoading) return <div className="p-[300px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <UpdateDashboardData
      data={data as DataItem[]}
      category={CategoryType.hero}
    />
  );
};

export default Page;
