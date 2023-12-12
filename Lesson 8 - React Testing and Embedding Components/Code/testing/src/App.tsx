import React, { useState } from "react";
import useFetchUsers from "./hooks/useFetchUsers";

import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const allUsers = useFetchUsers();

  const [filteredUsers, setFilteredUsers] = useState(allUsers);
  const [filterFirstName, setFilterFirstName] = useState("");
  const [filterLastName, setFilterLastName] = useState("");
  const [filterEmail, setFilterEmail] = useState("");

  const handleFilter = () => {
    if (allUsers.length > 0) {
      const filtered = allUsers.filter(
        (user) =>
          (filterFirstName
            ? user.firstname
                .toLowerCase()
                .includes(filterFirstName.toLowerCase())
            : true) &&
          (filterLastName
            ? user.lastname.toLowerCase().includes(filterLastName.toLowerCase())
            : true) &&
          (filterEmail
            ? user.email.toLowerCase().includes(filterEmail.toLowerCase())
            : true)
      );
      setFilteredUsers(filtered);
    }
  };

  React.useEffect(() => {
    setFilteredUsers(allUsers);
  }, [allUsers]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Users List</h1>

      <div className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by First Name"
            value={filterFirstName}
            onChange={(e) => setFilterFirstName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Last Name"
            value={filterLastName}
            onChange={(e) => setFilterLastName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Email"
            value={filterEmail}
            onChange={(e) => setFilterEmail(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleFilter}>
            Filter
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center">
                No Records
              </td>
            </tr>
          ) : (
            filteredUsers.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
