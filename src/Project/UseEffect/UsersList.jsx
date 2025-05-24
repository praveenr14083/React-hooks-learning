import React, { useEffect, useState } from "react";
import { UserCard } from "../../components/UserList/UserCard";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setUsers(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUser();
    }, 3000);
  }, []);

  return (
    <div className="w-full md:w-1/2 mx-auto bg-gray-300 p-10 flex flex-col gap-6">
      {loading ? (
        <p className="text-black animate-pulse">Loading...</p>
      ) : (
        users.map((user) => {
          const { id, name, website } = user;
          return <UserCard key={id} id={id} name={name} website={website} />;
        })
      )}
    </div>
  );
}
