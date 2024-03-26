import React from "react";
import MovieCard from "./MovieCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const MovieList = ({ title, movies }) => {
  const style = { color: "white", fontSize: "40rem" };

  return (
    <div className="p-6">
      <h1 className="text-lg md:text-3xl font-sans text-white py-4">{title}</h1>
      <div className="flex">
        <IoIosArrowBack style={style} />
        <div className="flex p-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default MovieList;
