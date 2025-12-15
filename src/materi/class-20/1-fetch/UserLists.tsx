import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/Users";

type UserData = {
  id: number;
  username: string;
  name: string;
  email: string;
};

const UserLists = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(BASE_URL, {
          method: "GET",
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Error nich");
        }
        setUsers(data);
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Unknown error occurred";
        setError(message);
      }
    };

    fetchUser();
  }, []);

  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>1. Fetching Data User </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} | {user.username} | {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserLists;
