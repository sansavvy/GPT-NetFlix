import { useEffect } from "react";
import { API_OPTIONS } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addTVShows } from "../utils/movieSlice";

const useTVShows = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTVShows();
  }, []);

  const getTVShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const tvShowsList = await data.json();
    console.log(tvShowsList.results);

    dispatch(addTVShows(tvShowsList.results));
  };
};

export default useTVShows;
