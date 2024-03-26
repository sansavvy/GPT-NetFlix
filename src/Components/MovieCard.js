import React from "react";
import { IMG_CDN_URL } from "../constants/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="transition ease-in-out w-46 md:w-48 h-30  pr-4 hover:-translate-y-1 hover:scale-110">
      <img alt="Movie card" src={IMG_CDN_URL + posterPath} />
    </div>
    // <div class="carousel p-4">
    //   <div class="carousel-item">
    //     <img src={IMG_CDN_URL + posterPath} alt="Item 1" class="rounded-lg" />
    //   </div>
    // </div>
  );
};

export default MovieCard;
