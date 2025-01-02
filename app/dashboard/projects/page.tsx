"use client";

import React from "react";
import useProjectData from "../../../hooks/useProjectData";
import UpdateDashboardData from "../../../components/dashboard/dashboard-crud/update-dashboard-data";
import { CategoryType, DataItem } from "../../../types/type";

const Page = () => {
  const { data, isLoading, error } = useProjectData({ itemQuantity: 10 });

  if (isLoading) return <div className="p-[300px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <UpdateDashboardData data={data as DataItem[]} category={CategoryType.projects} />
    </>
  );
};

export default Page;
