import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  // API call to get now playing movies

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);

  // fetching the data frm TMDB API & put in the store(Updating the store)
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTIONS
    );
    const topRatedMovieData = await data.json();

    dispatch(addTopRatedMovies(topRatedMovieData.results)); // via this dispatch action is dispatched to put api data in store.
  };
};

export default useTopRatedMovies;
