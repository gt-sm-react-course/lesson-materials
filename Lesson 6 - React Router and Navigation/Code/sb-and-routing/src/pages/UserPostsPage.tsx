import React from "react";
import { PostList } from "../components/PostList";
import { useParams } from "react-router-dom";

const UserPostsPage: React.FC = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Posts</h1>
      {userId && <PostList userId={Number(userId)} />}
    </div>
  );
};

export default UserPostsPage;
