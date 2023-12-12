import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "./store";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  User,
} from "./types";

const fetchUsers = async (dispatch: React.Dispatch<any>) => {
  dispatch({ type: GET_USERS_REQUEST });
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data: User[] = await response.json();
    dispatch({ type: GET_USERS_SUCCESS, payload: data });
    console.log(store.getState());
  } catch (error) {
    dispatch({ type: GET_USERS_FAILURE, payload: error.message });
  }
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    fetchUsers(dispatch);
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
