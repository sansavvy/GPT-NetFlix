import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../constants/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // API call to get now playing movies

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies(); // this API call happens nly when  nowPlayingMovies = null.
  }, []);

  // fetching the data frm TMDB API & put in the store(Updating the store)
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const nowPlayingMovieData = await data.json();

    dispatch(addNowPlayingMovies(nowPlayingMovieData.results)); // via this dispatch action is dispatched to put api data in store.
  };
};

export default useNowPlayingMovies;
