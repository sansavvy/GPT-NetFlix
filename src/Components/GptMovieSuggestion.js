import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptmovieNames, tmdbMovieData } = useSelector((store) => store.gpt);
  if (!gptmovieNames) return null;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-80 text-white">
      {gptmovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={tmdbMovieData[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
