import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE_BG_IMAGE } from "../constants/constants";
import useTVShows from "../hooks/useTVShows";
import useOntheAirShows from "../hooks/useOntheAirShows";
import useTopRatedTvShows from "../hooks/useTopRatedTvShows";
import { useRef } from "react";

const Home = () => {
  let email = useRef(null);
  useTVShows();
  useOntheAirShows();
  useTopRatedTvShows();

  const navigate = useNavigate();
  const navigateToMembership = () => {
    navigate("/membership");
  };

  return (
    <div>
      <div className=" bg-black bg-opacity-80">
        <img
          className="object-cover absolute"
          src={LOGIN_PAGE_BG_IMAGE}
          alt="bg-img"
        />
      </div>

      <div className="absolute z-0 flex flex-col justify-center w-full m-0 p-4 mt-[25%] bg-black bg-opacity-80 text-center">
        <div className="max-w-50">
          <h1 className="text-white text-4xl font-bold ">
            Unlimited movies, TV shows and more
          </h1>
          <h4 className="text-white text-2xl p-4">
            WATCH ANYWHERE. CANCEL ANYTIME.
          </h4>
          <p className="text-white text-2xl p-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>

        <div className="flex justify-center z-0">
          <input
            ref={email}
            type="text"
            placeholder="Email or Phone Number"
            className="border border-white p-4 my-4 w-1/4 bg-black bg-opacity-10 text-white rounded-md"
          />
          <button
            className=" text-white bg-red-500 text-lg font-bold rounded-md p-4 my-4 w-1/4 ml-2"
            onClick={navigateToMembership}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
