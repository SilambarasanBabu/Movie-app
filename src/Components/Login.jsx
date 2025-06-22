import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleToggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background banner"
        />
      </div>

      <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>{" "}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <button className="cursor-pointer p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={handleToggleSignIn}>
             {isSignInForm ? "New to Netflix? Sign up now" : "Already Registered? Sign In now"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
