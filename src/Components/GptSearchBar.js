import { useDispatch, useSelector } from "react-redux";
import lang from "../constants/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../constants/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search a Movie In TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    // Make API call to GPT API for movies result

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the exampl result given ahead. Example Result: Fall, Everest, Gravity, Interstellar, The Internship";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // Error Handling
    }
    console.log(gptResults.choices); // List of Movie Names - comma seperated strings
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); //returns array of movie Names
    // For each movie, search it in TMDB API

    const individualMovieData = gptMovies.map((movie) =>
      searchMovieTMDB(movie)
    ); // returns array of promises for each movie name req in TMDB
    // e.g - 5 movies returned by gptMovies makes 5 API calls and returns chain of promises.

    const tmdbResultsOfMovie = await Promise.all(individualMovieData);
    console.log(tmdbResultsOfMovie);

    dispatch(
      addGptMovieResult({
        gptmovieNames: gptMovies,
        tmdbMovieData: tmdbResultsOfMovie,
      }) // sending action payload as obj parameters
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
