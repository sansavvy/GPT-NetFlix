import React, { useState } from "react";
// import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../constants/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { GoSearch } from "react-icons/go";
import { toggleProfileClick } from "../utils/configSlice";
import Modal from "./Modal";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isDropDownOpen, setDropDown] = useState(false);

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const isSignOut = useSelector((store) => store.config.isSignOut);
  const isProfileClick = useSelector((store) => store.config.isProfileClick);
  const location = useLocation();
  const { pathname } = location;

  const clickOnProfileIcon = () => {
    dispatch(toggleProfileClick(true));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user sign In/ sign up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        ); // put the user data in redux store
        navigate("/home");
      } else {
        //If  User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    // Toggle GPT Search in the store
    dispatch(toggleGptSearchView());
  };

  const HandleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div>
          <div className="m-4 p-2 flex justify-between">
            <NavBar />

            {pathname === "/browse" && (
              <button
                className="m-4 p-2 bg-black bg-opacity-80 flex text-white rounded-md"
                onClick={handleGPTSearchClick}
              >
                <GoSearch className="mt-3" />
                <span className="m-0 p-2">Search</span>
              </button>
            )}
            <button
              className="m-2 p-2 rounded-full"
              onClick={clickOnProfileIcon}
            >
              {user && (
                <img
                  className="w-10 h-10 rounded-full"
                  alt="usericon"
                  src={user?.photoURL}
                />
              )}
            </button>
          </div>
          {isProfileClick && <Modal />}
        </div>
      )}
    </div>
  );
};

export default Header;
