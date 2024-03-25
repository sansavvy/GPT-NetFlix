import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addUpComingMovies } from "../utils/movieSlice";
const useUpComingMovies = () => {
  const dispatch = useDispatch();

  // API call to get now playing movies

  useEffect(() => {
    getUpComingMovies();
  }, []);

  // fetching the data frm TMDB API & put in the store(Updating the store)
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const upComingMovieData = await data.json();

    dispatch(addUpComingMovies(upComingMovieData.results)); // via this dispatch action is dispatched to put api data in store.
  };
};

export default useUpComingMovies;
