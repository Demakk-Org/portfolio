"use client";

import React from "react";
import useAboutMeData from "../../../hooks/useAboutMeData";
import UpdateDashboardData, {
  DataItem,
} from "../../../components/dashboard/update-dashboard-data";

const Page = () => {
  const { data, isLoading, error } = useAboutMeData({ itemQuantity: 1 });

  if (isLoading) return <div className="p-[300px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <UpdateDashboardData data={data as DataItem[]} category="aboutMe" />;
};

export default Page;
