import React from "react";
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] px-24 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl font-sans">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <div className="flex rounded-md text-lg p-2 px-16 bg-white justify-between hover:bg-opacity-80">
          <FaPlay className="m-3 z-10 text-black" />
          <button className="text-black ">Play</button>
        </div>

        <button className="bg-gray-500 text-white p-4 ml-4 px-12 text-xl bg-opacity-50  rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
