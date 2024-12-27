"use client";

import React from "react";
import UpdateDashboardData, {
  DataItem,
} from "../../../components/dashboard/update-dashboard-data";
import useUploadCVData from "../../../hooks/useUploadCVData";

const Page = () => {
  const { data, isLoading, error } = useUploadCVData({ itemQuantity: 1 });

  if (isLoading) return <div className="p-[300px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <UpdateDashboardData data={data as DataItem[]} category="uploadCV" />
    </>
  );
};

export default Page;
