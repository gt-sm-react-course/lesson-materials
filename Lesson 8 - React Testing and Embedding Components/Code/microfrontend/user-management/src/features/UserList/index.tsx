import useFetch from "./useFetch";
import { User } from "../../shared/types/User";

function UsersList() {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const { users, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users List New</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
