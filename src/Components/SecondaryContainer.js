import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black pl-12">
        <div className="-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>

        {/* <MovieList title={"Trending"} movies={movies.nowPlayingMovies} /> */}
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"UpComing"} movies={movies.upComingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
