import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const selectedMovie = useSelector(
    (store) => store.movies.currentlySelectedMovie
  );
  if (!movies) return; // early return if movies === null

  const mainMovie = movies[0];

  // const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      {/* {mainMovie && (
        <>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} />
        </>
      )} */}
      {selectedMovie && (
        <>
          <VideoTitle
            title={selectedMovie.original_title}
            overview={selectedMovie.overview}
          />
          <VideoBackground movieId={selectedMovie.id} />
        </>
      )}
    </div>
  );
};

export default MainContainer;
