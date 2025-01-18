"use client";

import React from "react";
import UpdateDashboardData from "../../../components/dashboard/dashboard-crud/update-dashboard-data";
import { CategoryType, DataItem } from "../../../types/type";
import useSocialMediaPlatformData from "../../../hooks/useSocialMediaPlatformData";

const Page = () => {
  const { data, isLoading, error } = useSocialMediaPlatformData({
    itemQuantity: 4,
  });

  if (isLoading) return <p className="p-[300px]">Loading...</p>;
  if (error) return <div>Error: {error}</div>;

  return (
    <UpdateDashboardData
      data={data as DataItem[]}
      category={CategoryType.socialMediaPlatforms}
    />
  );
};

export default Page;
