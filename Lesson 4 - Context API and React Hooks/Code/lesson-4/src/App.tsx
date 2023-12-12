import "./App.css";

import UsersList from "./components/1. UsersList";
// import UsersList from "./components/2. UsersListWithReducer";
// import UsersList from "./components/3. UsersListWithCustomHook";
// import UsersList from "./components/4. UsersListWithContext";
// import { UserProvider } from "./components/4. UsersListWithContext/UserContext";

function App() {
  return <UsersList />;
}

// function App() {
//   return (
//     <UserProvider>
//       <UsersList />
//     </UserProvider>
//   );
// }

export default App;
