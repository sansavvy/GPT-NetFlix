import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer Video

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const videosClipsOfMovie = await data.json();

    const filterData = videosClipsOfMovie.results?.filter(
      (x) => x.type === "Teaser"
    );
    // filter data (only trailers)
    const trailer = filterData?.length
      ? filterData[6]
      : videosClipsOfMovie.results[0];

    // put the trailer data to the store
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
