import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignIn = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-md bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full rounded-md bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-md bg-gray-600"
        />
        <button className="p-4 my-6 bg-red-600 rounded-lg w-full h-12">
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
