import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const TvShows = () => {
  const tvShows = useSelector((store) => store.movies.tvShows);
  return (
    <div>
      <div className="w-screen bg-black m-4 ">
        <MovieList title="Trendind TV Shows on NETFLIX" movies={tvShows} />
        <MovieList title="Trendind TV Shows on NETFLIX" movies={tvShows} />
        <MovieList title="Trendind TV Shows on NETFLIX" movies={tvShows} />
      </div>
    </div>
  );
};

export default TvShows;
