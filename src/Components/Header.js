import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
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

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropDownOpen, setDropDown] = useState(false);

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const clickOnProfileIcon = () => {
    setDropDown(true);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setDropDown(false);
      })
      .catch((error) => {
        // An error happened
      });
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
        navigate("/browse");
      } else {
        //If  User is signed out
        dispatch(removeUser());
        navigate("/");
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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex flex-col">
          <div className="m-4 p-2 flex justify-between">
            {showGptSearch && (
              <select
                className="m-4 p-2 bg-gray-600 text-white rounded-md cursor-pointer"
                onChange={HandleLangChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    className="m-2 p-2 bg-gray-600 hover:bg-opacity-20"
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="m-4 p-2 bg-purple-600 text-white rounded-md"
              onClick={handleGPTSearchClick}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
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

          {isDropDownOpen && (
            <div className="z-10 flex  absolute bg-red-600 rounded-md">
              <MdLogout className="mt-1" />
              <p
                className="text-md ml-0  z-10 cursor-pointer text-black font-bold "
                onClick={handleSignOut}
              >
                SignOut
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
