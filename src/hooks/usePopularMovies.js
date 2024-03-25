import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  // API call to get now playing movies

  useEffect(() => {
    getPopularMovies();
  }, []);

  // fetching the data frm TMDB API & put in the store(Updating the store)
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=4",
      API_OPTIONS
    );
    const popularMovieData = await data.json();

    dispatch(addPopularMovies(popularMovieData.results)); // via this dispatch action is dispatched to put api data in store.
  };
};

export default usePopularMovies;
