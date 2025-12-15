import { useFetch } from "../../../hooks/useFetch";
import { type User } from "./types/user";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const UserPages = () => {
  const { data, loading, error } = useFetch<User[]>(BASE_URL);

  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>UserPages</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} | {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPages;
