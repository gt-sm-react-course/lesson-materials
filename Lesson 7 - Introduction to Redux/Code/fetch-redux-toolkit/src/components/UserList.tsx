import React from "react";
import { useGetUsersQuery } from "../features/users/usersApi";

const UserList: React.FC = () => {
  const { data: users, isLoading, isError, error } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.toString()}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      {users?.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
