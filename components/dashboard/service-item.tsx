import React from "react";
import { DataItem } from "../../types/type";

interface ServiceItemProps<T extends DataItem> {
  row: T;
  category: string;
}

const ServiceItem = <T extends DataItem>({
  row,
  category,
}: ServiceItemProps<T>) => {
  return (
    <>
      {category === "testimonials" && (
        <td className=" px-6 py-4 text-sm text-gray-600">{row.name}</td>
      )}
      {["services", "projects", "testimonials"].includes(category) && (
        <td className="px-6 py-4 border-b text-sm text-gray-800">
          {row.title}
        </td>
      )}

      {["hero", "services", "projects"].includes(category) && (
        <td className=" px-6 py-4 text-sm text-gray-600">{row.description}</td>
      )}

      {["aboutMe", "projects"].includes(category) && (
        <td className=" px-6 py-4 text-sm text-gray-600">
          {row.skills ? row.skills.join(", ") : ""}
        </td>
      )}

      {category === "testimonials" && (
        <td className=" px-6 py-4 text-sm text-gray-600">{row.feedback}</td>
      )}

      {category != "uploadCV" && (
        <td className="px-6 py-4 border-b">
          <img
            src={row.imageUrl}
            alt={row.title}
            className="w-16 h-16 object-cover rounded-lg text-sm"
          />
        </td>
      )}
      {category === "uploadCV" && (
        <td className=" px-6 py-4 text-sm text-gray-600">{row.cvUrl}</td>
      )}

      <td className="px-6 py-4 border-b text-sm text-gray-600">
        {new Date(row.createdAt?.seconds * 1000).toLocaleDateString()}
      </td>
    </>
  );
};

export default ServiceItem;
