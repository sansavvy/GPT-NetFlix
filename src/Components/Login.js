import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_PAGE_BG_IMAGE } from "../constants/constants";
import { USER_AVATAR } from "../constants/constants";
import { updateSignOut } from "../utils/configSlice";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  let email = useRef(null);
  let password = useRef(null);
  const name = useRef(null);

  const toggleSignIn = () => {
    email.current.value = null;
    password.current.value = null;
    setErrorMsg(null);
    setSignInForm(!isSignInForm);
  };
  const checkFormValidations = () => {
    // validate the form data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);
    if (message) return;

    // Sign In Sign Up logic

    if (!isSignInForm) {
      // Sign Up Logic

      // this API create a new user in firebase and give me a response.
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              dispatch(updateSignOut(false));
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(updateSignOut(false));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="object-cover absolute"
          src={LOGIN_PAGE_BG_IMAGE}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full  md:w-3/12 my-36 p-12  mx-auto right-0 left-0 text-white rounded-md bg-opacity-80 absolute bg-black "
      >
        <h1 className="font-bold text-3xl p-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="border border-white p-4 my-4 w-full bg-black bg-opacity-10  rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="border border-white p-4 my-4 w-full bg-black bg-opacity-10  rounded-md"
        />
        {errorMsg?.name === "email" && (
          <p className="text-sm p-0 text-red-700">{errorMsg?.errMsg}</p>
        )}
        {/* <input
          type="text"
          placeholder="Email or Phone Number"
          class="border border-white p-4 my-4 w-full bg-black bg-opacity-10  rounded-md"
        /> */}

        {/* <p className="ftext-sm p-4  text-red-700">{errorMsg}</p> */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="border border-white p-4 my-4 w-full bg-black bg-opacity-10  rounded-md"
        />
        {errorMsg?.name === "password" && (
          <p className="text-sm p-0 text-red-700">{errorMsg?.errMsg}</p>
        )}
        <button
          className="p-2 my-2 bg-red-600 rounded-lg w-full h-12"
          onClick={checkFormValidations}
        >
          <span className="font-sans p-1 m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </span>
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to NetFlixGPT? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
