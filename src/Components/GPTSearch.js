import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOGIN_PAGE_BG_IMAGE } from "../constants/constants";
import { Fragment } from "react";

const GPTSearch = () => {
  return (
    <Fragment>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={LOGIN_PAGE_BG_IMAGE}
          alt="bg-img"
        />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </Fragment>
  );
};

export default GPTSearch;
