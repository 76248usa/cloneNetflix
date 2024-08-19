import { useEffect, useReducer, useState } from "react";
import axios from "axios";
//import { Movie } from "../types";

interface State {
  data: Movie[] | null;
  error: string | null;
  loading: boolean;
}

interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  genre: string;
  duration: string;
}

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

enum ActionType {
  LOADING,
  SUCCESS,
  FAILED,
}

type Action =
  | { type: ActionType.LOADING }
  | { type: ActionType.SUCCESS; payload: Movie[] }
  | { type: ActionType.FAILED; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FAILED:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return initialState;
  }
};

const useMoviesList = (offset: number) => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetchMoviesList();
  }, []);

  const fetchMoviesList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/movies/list?offset=${offset}`
      );
      //console.log(response);
      dispatch({ type: ActionType.SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ActionType.FAILED, payload: "Something went wrong" });
    }
  };

  return { data, loading, error };
};

export default useMoviesList;
