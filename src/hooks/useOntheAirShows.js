import { API_OPTIONS } from "../constants/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addOnTheAirShows } from "../utils/movieSlice";

const useOntheAirShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getOntheAirShows();
  }, []);

  const getOntheAirShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    );

    const onTheAirShowList = await data.json();
    console.log(onTheAirShowList.results);

    dispatch(addOnTheAirShows(onTheAirShowList?.results));
  };
};

export default useOntheAirShows;
