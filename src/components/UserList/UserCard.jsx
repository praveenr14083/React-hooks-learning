import React from "react";

export function UserCard({ id, name, website }) {
  return (
    <div className="bg-white flex items-center justify-between p-5 rounded-2xl">
      <div className="bg-black text-white rounded-full w-12 h-12 flex justify-center items-center">
        <p>{id}</p>
      </div>

      <h1>{name}</h1>

      <a
        href={website}
        target="_blank"
        className="bg-black text-white px-5 py-4 rounded-2xl"
      >
        Website
      </a>
    </div>
  );
}
