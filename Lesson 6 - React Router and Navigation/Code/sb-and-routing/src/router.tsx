import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedPage from "./pages/ProtectedPage";
import UserPostsPage from "./pages/UserPostsPage";
import UsersPage from "./pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <UsersPage /> },
      { path: ":userId/posts", element: <UserPostsPage /> },
      {
        path: "/secret",
        element: (
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
