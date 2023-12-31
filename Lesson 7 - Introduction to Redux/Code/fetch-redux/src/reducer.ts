import {
  UserState,
  UserActionTypes,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "./types";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

function reducer(state = initialState, action: UserActionTypes): UserState {
  console.log("userReducer", state, action);
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, loading: true };
    case GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case GET_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default reducer;
