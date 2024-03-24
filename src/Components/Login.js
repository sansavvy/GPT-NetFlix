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

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignIn = () => {
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
        <img className="absolute" src={LOGIN_PAGE_BG_IMAGE} alt="bg-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded border-0 bg-black bg-opacity-10 border-white border-slate-200"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full rounded border-0 bg-black bg-opacity-10 border-white"
        />
        {/* <p className="ftext-sm p-4  text-red-700">{errorMsg}</p> */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded border-0 bg-black bg-opacity-10 border-white"
        />
        <p className="ftext-sm p-4 text-red-700">{errorMsg}</p>
        <button
          className="p-4 my-6 bg-red-600 rounded-lg w-full h-12"
          onClick={checkFormValidations}
        >
          <span className="font-bold p-2 m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </span>
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to NetFlix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
