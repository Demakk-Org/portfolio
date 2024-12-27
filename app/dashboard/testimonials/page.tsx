"use client";

import React from "react";
import useTestimonialData from "../../../hooks/useTestimonialData";
import UpdateDashboardData, {
  DataItem,
} from "../../../components/dashboard/update-dashboard-data";

const Page = () => {
  const { data, isLoading, error } = useTestimonialData({ itemQuantity: 10 });

  if (isLoading) return <div  className="p-[300px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <UpdateDashboardData data={data as DataItem[]} category="testimonials" />
    </>
  );
};

export default Page;
