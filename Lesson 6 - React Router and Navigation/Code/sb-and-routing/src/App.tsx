// // =============== First Example
// import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
// import { UserList } from "./components/UserList";
// import { PostList } from "./components/PostList";

// const PostListWrapper = () => {
//   const { userId } = useParams();
//   return <PostList userId={Number(userId)} />;
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<UserList />} />
//         <Route path="/:userId/posts" element={<PostListWrapper />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// // =============== Second Example
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Layout from "./layouts/Layout";
// import NotFoundPage from "./pages/NotFoundPage";
// import ProtectedPage from "./pages/ProtectedPage";
// import UserPostsPage from "./pages/UserPostsPage";
// import UsersPage from "./pages/UsersPage";
// import ProtectedRoute from "./ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<UsersPage />} />
//           <Route path=":userId/posts" element={<UserPostsPage />} />
//           <Route
//             path="/secret"
//             element={
//               <ProtectedRoute>
//                 <ProtectedPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// =============== 3 example

import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
