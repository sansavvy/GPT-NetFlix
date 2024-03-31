import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { useEffect } from "react";
import { updateTrailer } from "../utils/movieSlice";
import useGetCurrentMovie from "../hooks/useGetCurrentMovie";
const PlayTrailer = ({ movieIdValue }) => {
  let trailer = useSelector((store) => store.movies.loadTraileronClick);
  useGetCurrentMovie(movieIdValue);

  const dispatch = useDispatch();
  console.log(movieIdValue);
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
  }, []);

  return (
    <div className="m-4 p-4 bg-gradient-to-r from-black to shadow-black">
      <iframe
        className="w-screen right-0  aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default PlayTrailer;
