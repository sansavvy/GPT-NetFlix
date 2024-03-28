import React from "react";
import MovieSlider from "./MovieSlider";
import MovieSliderShimmer from "./MovieSliderShimmer";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-2 m-4 ">
      <MovieSlider heading={title} data={movies} />
    </div>
  );
};

export default MovieList;
