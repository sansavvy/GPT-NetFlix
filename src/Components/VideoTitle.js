import React from "react";
// import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-24 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-sans">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex my-4 md:m-0">
        <button className="flex rounded-md border border-white font-semibold text-black p-2 m-4 bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          <span className="px-4">Play</span>
        </button>
        <button className="ml-2 border border-white p-2 m-4 font-semibold rounded-md bg-gray-900">
          More Info
        </button>
        {/* <div className="flex rounded-md text-lg py-1 px-3 md:py-4 px-12 bg-white justify-between hover:bg-opacity-80">
          <FaPlay className="m-3 z-10 text-black" />
          <button className="text-black ">Play</button>
        </div>

        <button className="bg-gray-500 text-white p-4 ml-4 px-12 text-xl bg-opacity-50  rounded-lg hover:bg-opacity-80">
          More Info
        </button> */}
      </div>
    </div>
  );
};

export default VideoTitle;
