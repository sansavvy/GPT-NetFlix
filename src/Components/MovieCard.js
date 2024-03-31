import React from "react";
import { IMG_CDN_URL, NETFLIX_LOGO } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ moviedata }) => {
  const navigate = useNavigate();

  const handleMovieCardClick = () => {
    navigate("/movie/" + moviedata?.id);
  };

  return (
    <div
      className="w-full max-w-full h-56 max-h-full  pr-4 hover:border-2 border-white pr-4"
      onClick={handleMovieCardClick}
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
