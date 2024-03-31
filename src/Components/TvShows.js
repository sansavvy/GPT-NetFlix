import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Header from "./Header";

const TvShows = () => {
  const tvShows = useSelector((store) => store.movies.tvShows);
  return (
    <div>
      <Header />
      <div className="w-screen bg-black bg-opacity-80">
        <MovieList title="Trendind TV Shows on NETFLIX" movies={tvShows} />
      </div>
    </div>
  );
};

export default TvShows;
