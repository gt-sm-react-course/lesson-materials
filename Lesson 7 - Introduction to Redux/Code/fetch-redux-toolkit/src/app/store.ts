import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../features/users/usersApi";
import usersReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
