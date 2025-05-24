import React from "react";

export default function CartCard({ data, onDelete }) {
  return (
    <div className="w-full bg-white px-6 py-4 shadow-2xl flex items-center justify-between rounded-full">
      <p>{data.name}</p>
      <button
        onClick={() => onDelete(data.id)}
        className="bg-red-500 p-5 rounded-full"
      >
        Delete
      </button>
    </div>
  );
}
