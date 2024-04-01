import { useEffect } from "react";
import { API_OPTIONS } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addPresentMovie } from "../utils/movieSlice";

const useGetCurrentMovie = ({ movieId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPresentClickedMovieData();
  }, []);

  console.log(movieId);
  const getPresentClickedMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    const presentSelectedMovieData = await data.json();
    console.log(presentSelectedMovieData);

    dispatch(addPresentMovie(presentSelectedMovieData));
  };
};

export default useGetCurrentMovie;
