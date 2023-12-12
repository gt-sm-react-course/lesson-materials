import { useState, useEffect } from "react";
import { mapUserApiModelToUiModel } from "../shared/mapping/mapUserApiModelToUiModel";
import { UserApiModel } from "../shared/types/UserApiModel";
import { UserUiModel } from "../shared/types/UserUiModel";

const useFetchUsers = (initialState: UserUiModel[] = []): UserUiModel[] => {
  const [users, setUsers] = useState<UserUiModel[]>(initialState);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: UserApiModel[] = await response.json();
        const mappedUsers = data.map(mapUserApiModelToUiModel);
        setUsers(mappedUsers);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  return users;
};

export default useFetchUsers;
