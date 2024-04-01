import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { useEffect } from "react";
import { updateTrailer } from "../utils/movieSlice";
import MovieList from "./MovieList";
import useGetCurrentMovie from "../hooks/useGetCurrentMovie";
const PlayTrailer = ({ movieIdValue }) => {
  let trailer = useSelector((store) => store.movies.loadTraileronClick);
  const movies = useSelector((store) => store.movies);
  useGetCurrentMovie(movieIdValue);
  const dispatch = useDispatch();

  const { movieId } = movieIdValue;

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const videosClipsOfMovie = await data.json();
    trailer = videosClipsOfMovie.results[0];
    dispatch(updateTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

  return (
    <div className="m-4 p-4 bg-gradient-to-r from-black to shadow-black">
      <iframe
        className="w-screen right-0  aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <MovieList title={"Coming this week"} movies={movies.popularMovies} />
      <MovieList
        title={"BingeWorthy TV Shows"}
        movies={movies.topRatedMovies}
      />
      <MovieList title={"Action & Thriller"} movies={movies.upComingMovies} />
      <MovieList
        title={"Suspenseful TV Dramas"}
        movies={movies.upComingMovies}
      />
      <MovieList title={"Recently Added"} movies={movies.upComingMovies} />
    </div>
  );
};

export default PlayTrailer;
