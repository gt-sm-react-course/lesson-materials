import React, { createContext, useContext } from 'react';
import { User } from "../../shared/types/User";
import useFetch from "./useFetch";

type UserContextType = {
  users: User[];
  isLoading: boolean;
  error: string | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC = ({ children }) => {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const { users, isLoading, error } = useFetch(url);

  return (
    <UserContext.Provider value={{ users, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};
