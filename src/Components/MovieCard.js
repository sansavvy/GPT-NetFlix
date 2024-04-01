import React from "react";
import { IMG_CDN_URL, NETFLIX_LOGO } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addPresentMovie } from "../utils/movieSlice";

const MovieCard = ({ moviedata }) => {
  const dispatch = useDispatch();
  const changePresentMovie = () => {
    dispatch(addPresentMovie(moviedata));
  };
  return (
    <div
      className="w-full max-w-full h-56 max-h-full  pr-4 hover:border-2 border-white pr-4"
      onClick={changePresentMovie}
    >
      <img
        alt="Netflix-logo"
        src={NETFLIX_LOGO}
        className="w-10 h-10 absolute z-10"
      />
      <img alt="Movie card" src={IMG_CDN_URL + moviedata.poster_path} />
    </div>
  );
};

export default MovieCard;
