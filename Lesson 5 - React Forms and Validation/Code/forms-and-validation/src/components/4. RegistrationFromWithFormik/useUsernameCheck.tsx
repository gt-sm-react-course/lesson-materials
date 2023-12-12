import { useState } from "react";

const useUsernameCheck = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const checkUsernameExists = async (username: string): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const users = (await response.json()) as { username: string }[];
      const exists = users.some(
        (user) => user.username.toLowerCase() === username.toLowerCase()
      );
      setLoading(false);
      return exists;
    } catch (err) {
      setLoading(false);
      setError("Error fetching usernames");
      return false;
    }
  };

  return { checkUsernameExists, loading, error };
};

export default useUsernameCheck;
