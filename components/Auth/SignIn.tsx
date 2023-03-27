import React, { ReactElement, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "@/firebase/config";
import { signInWithPopup, User } from "firebase/auth";
import { AnimationControls, motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import firebase, { FirebaseApp } from "firebase/app";
import "firebase/auth";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  controls: AnimationControls;
  index: number;
}

export default function SignIn({ controls, index }: Props): ReactElement {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  async function loginHandler() {
    try {
      const user = await signInWithPopup(auth, googleAuthProvider);
      setIsUserLoggedIn(true);
      console.log(user);
      setUser(user.user);
      toast.success(`Successfully Logged in as ${user.user.displayName}`, {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <motion.div
        initial={{
          translateY: "-100%",
        }}
        animate={controls}
        custom={index}
      >
        {!isUserLoggedIn && (
          <button
            disabled={isUserLoggedIn === undefined}
            onClick={loginHandler}
            className="btn-primary rounded-md p-2"
          >
            Sign In
          </button>
        )}
        {isUserLoggedIn && user && (
          <div>
            <div className="h-10 w-10 rounded-full">
              <img
                src={user.photoURL as string}
                alt=""
                className="object-fit rounded-full"
              />
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
