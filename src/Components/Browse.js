import React, { Fragment } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies(); // Custom hook to fetch movie data frm TMBD and put in the store
  usePopularMovies(); // Custom hook to fetch popular movie data frm TMBD and put in the store
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="no-scrollbar overflow-y-auto">
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <Fragment>
          <MainContainer />
          <SecondaryContainer />
        </Fragment>
      )}
    </div>
  );
};

export default Browse;
