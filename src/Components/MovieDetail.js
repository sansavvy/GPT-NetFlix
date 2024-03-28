import React from "react";
import MainContainer from "./MainContainer";
import { useParams } from "react-router";
import useGetCurrentMovie from "../hooks/useGetCurrentMovie";

const MovieDetail = () => {
  const movieId = useParams();
  useGetCurrentMovie(movieId);
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default MovieDetail;
