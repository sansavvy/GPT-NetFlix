import { useParams } from "react-router";

import PlayTrailer from "./PlayTrailer";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
const MovieDetail = () => {
  const movieID = useParams();
  const navigate = useNavigate();
  let presentMovie = useSelector(
    (store) => store.movies.currentlySelectedMovie
  );
  console.log(presentMovie);

  const handleBackNav = () => {
    navigate("/browse");
  };
  return (
    <div className="bg-black bg-gradient-to-r from-black ">
      <div className="pt-[20%] px-6 md:px-24 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
        <button
          className="text-white rounded-md bg-black bg-opacity-75 m-4 p-2"
          onClick={handleBackNav}
        >
          Back
        </button>
        <h1 className="text-2xl md:text-6xl font-sans text-white">
          {presentMovie?.title}
        </h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">
          {presentMovie?.overview}
        </p>
        <h4 className="text-white text-xl">
          Released on : {presentMovie?.release_date}
        </h4>
        <ul className="flex">
          {presentMovie?.genres.map((genre) => (
            <li className="text-white max-w-44 ml-1" key={genre.id}>
              {genre.name} |
            </li>
          ))}
        </ul>
        <div className="m-2 p-2 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"
            />
          </svg>
          <h4 className="ml-2">{presentMovie?.vote_count}</h4>
        </div>
        <button className="m-2 p-2 bg-white text-black rounded-md">
          Watch Trailer
        </button>
        <button className="m-2 p-2 text-white bg-black rounded-md">Play</button>
      </div>

      <PlayTrailer movieIdValue={movieID} />
    </div>
  );
};

export default MovieDetail;
