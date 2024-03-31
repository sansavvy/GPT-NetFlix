import React from "react";
import { NAVBAR } from "../constants/constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="top-0 z-10 block w-full max-w-full p-4h-maxbg-opacity-80  lg:px-8 lg:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {NAVBAR.map((item, index) => (
                <li
                  key={index}
                  className="block p-1 font-sans text-lg font-bold antialiased font-sans  text-red-600"
                >
                  <Link
                    to={{ pathname: item.routeUrl }}
                    className="flex items-center"
                  >
                    {item?.tabName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
