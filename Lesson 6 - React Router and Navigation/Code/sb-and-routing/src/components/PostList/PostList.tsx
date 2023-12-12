import "./PostList.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  userId: number;
}

const PostList: React.FC<PostListProps> = ({ userId }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [userId]);

  return (
    <div className="postlist-container">
      <button onClick={() => navigate(-1)} className="back-button">
        Back by navigate previous page
      </button>
      <button
        onClick={() => navigate("/", { replace: true })}
        className="back-button"
      >
        Back by direct navigate
      </button>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="postlist-item">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
