import { useReducer, useEffect } from "react";
import { User } from "../../shared/types/User";
import { reducer, State } from "./reducer";

function useFetch(url: string): State {
  const initialState: State = {
    users: [],
    isLoading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = (await response.json()) as User[];
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result });
        }
      } catch (error) {
        if (!didCancel) {
          if (error instanceof Error) {
            dispatch({ type: "FETCH_FAILURE", payload: error.message });
          } else {
            dispatch({ type: "FETCH_FAILURE", payload: "An error occurred" });
          }
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return state;
}

export default useFetch;
