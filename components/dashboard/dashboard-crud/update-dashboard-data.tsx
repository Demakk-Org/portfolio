import React from "react";
import CreateDashboardData from "./create-dashboard-data";
import EditDashboardData from "./edit-data";
import { CategoryType, DataItem } from "../../../types/type";

export interface EditDataProps<T> {
  data: T[];
  category: CategoryType;
}

export default function UpdateDashboardData<T extends DataItem>({
  data,
  category,
}: EditDataProps<T>) {
  return (
    <div className="relative px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">{category}</h1>
        <CreateDashboardData data={data} category={category} />
      </div>
      <EditDashboardData data={data} category={category} />
    </div>
  );
}
