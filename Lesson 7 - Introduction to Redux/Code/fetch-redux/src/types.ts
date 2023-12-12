export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

interface GetUsersRequestAction {
  type: typeof GET_USERS_REQUEST;
}

interface GetUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: User[];
}

interface GetUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUsersFailureAction;

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
