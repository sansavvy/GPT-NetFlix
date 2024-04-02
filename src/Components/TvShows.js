import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const TvShows = () => {
  const tvShows = useSelector((store) => store?.movies?.tvShows);
  const ontheAirShows = useSelector((store) => store?.movies?.onTheAirShows);
  const topRatedTvShows = useSelector((store) => store?.movies.topRatedTvShows);

  return (
    <div>
      <div className="w-screen bg-black m-4 pt-24">
        {tvShows && (
          <MovieList
            key={"tvShow"}
            title="Trending TV Shows"
            movies={tvShows}
          />
        )}
        {ontheAirShows && (
          <MovieList
            key={"onAirShow"}
            title="On The Air TV Shows"
            movies={ontheAirShows}
          />
        )}
        {topRatedTvShows && (
          <MovieList
            key={"topRatedShow"}
            title="Top Rated TV Shows"
            movies={topRatedTvShows}
          />
        )}
      </div>
    </div>
  );
};

export default TvShows;
