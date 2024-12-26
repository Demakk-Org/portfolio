"use client";

import React from "react";
import useProjectData from "../../../hooks/useProjectData";
import UpdateDashboardData, {
  DataItem,
} from "../../../components/dashboard/update-dashboard-data";

const Page = () => {
  const { data, isLoading, error } = useProjectData({ itemQuantity: 10 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <UpdateDashboardData data={data as DataItem[]} category="projects" />
    </>
  );
};

export default Page;
