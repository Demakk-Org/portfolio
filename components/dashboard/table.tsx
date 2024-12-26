import React from "react";

interface TableProps<T> {
  headers: string[];
  rows: T[];
  renderRow: (row: T, index: number) => React.ReactNode;
}

const Table = <T extends object>({
  headers,
  rows,
  renderRow,
}: TableProps<T>) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          {headers.map((header, idx) => (
            <th
              key={idx}
              className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            {renderRow(row, idx)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
