import { User } from "../../shared/types/User";

export type State = {
  users: User[];
  isLoading: boolean;
  error: string | null;
};

export type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: User[] }
  | { type: "FETCH_FAILURE"; payload: string };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, users: action.payload };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error();
  }
};
