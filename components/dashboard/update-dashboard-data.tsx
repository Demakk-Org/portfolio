import React from "react";
import AddNewData from "./add-data";
import EditDeleteData from "./edit-delete-data";

export interface DataItem {
  createdAt: any;
  id: string;
  name?: string;
  title?: string;
  description?: string;
  feedback?: string;
  techStack?: string;
  file?: File | null;
  imageUrl?: string;
  skills?: string[];
  cvUrl?: string;
}

export interface EditDataProps<T> {
  data: T[];
  category: string;
}

export default function UpdateDashboardData<T extends DataItem>({
  data,
  category,
}: EditDataProps<T>) {
  return (
    <div className="relative px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">{category}</h1>
        <AddNewData data={data} category={category} />
      </div>
      <EditDeleteData data={data} category={category} />
    </div>
  );
}
