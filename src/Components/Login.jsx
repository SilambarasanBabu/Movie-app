import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate, checkValidateFullname } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bannerURL, photoURL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  //for error handling
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  //handled form submition
  const handleButton = () => {
    //logic for handling form validation
    if (!isSignInForm) {
      const nameMessage = checkValidateFullname(userName.current.value);
      if (nameMessage) {
        setErrorMessage(nameMessage);
        return;
      }
    }

    const message = checkValidate(email.current.value, password.current.value);
    if (message) {
      setErrorMessage(message);
      return;
    }

    setErrorMessage(null);

    //auth with fire base
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode || errorMessage) {
            setErrorMessage("Please try again");
          }

          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode || errorMessage) {
            setErrorMessage("Please try again");
          }
        });
    }
  };

  //form toggle feature sign-In and sign-Up
  const handleToggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bannerURL} alt="background banner" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>{" "}
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          onClick={handleButton}
          className="cursor-pointer p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={handleToggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
