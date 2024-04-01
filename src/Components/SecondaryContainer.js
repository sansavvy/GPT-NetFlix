import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { LOGIN_PAGE_BG_IMAGE } from "../constants/constants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-gradient-to-b from-black via-black-600 to-gray-900">
        {/* <div className=" mt-0 md:-mt-52 pl-4 md:pl-12  z-20 absolute">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div> */}

        {/* <MovieList title={"Trending"} movies={movies.nowPlayingMovies} /> */}
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"UpComing"} movies={movies.upComingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
