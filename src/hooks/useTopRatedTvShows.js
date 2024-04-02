import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addTopRatedTVShows } from "../utils/movieSlice";
const useTopRatedTvShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedTvShows();
  }, []);

  const getTopRatedTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const topRatedTvShows = await data.json();
    dispatch(addTopRatedTVShows(topRatedTvShows.results));
  };
};

export default useTopRatedTvShows;
