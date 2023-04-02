import React, { ReactElement, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "@/firebase/config";
import { signInWithPopup, User } from "firebase/auth";
import { AnimationControls, motion } from "framer-motion";
import { toast } from "react-toastify";
import "firebase/auth";

import "react-toastify/dist/ReactToastify.css";
import { AppDispatch, RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn, setUser } from "@/state/AuthSlice";
import { setIsLogoutMenuOpen } from "@/state/homeSlice";
import Popup from "reactjs-popup";

interface Props {
  controls: AnimationControls;
  index: number;
}

export default function SignIn({ controls, index }: Props): ReactElement {
  const { isUserLoggedIn, user } = useSelector(
    (store: RootState) => store.auth
  );
  const { isLogoutMenuOpen } = useSelector((store: RootState) => store.home);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(setIsLoggedIn(true));
      } else {
        dispatch(setIsLoggedIn(false));
      }
    });
  }, []);

  async function loginHandler() {
    try {
      const user = await signInWithPopup(auth, googleAuthProvider);
      dispatch(setIsLoggedIn(true));
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
        onScroll={() => {
          dispatch(setIsLogoutMenuOpen(false));
          console.log("yo");
        }}
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
          <Popup
            open={isLogoutMenuOpen}
            closeOnDocumentClick
            onOpen={() => dispatch(setIsLogoutMenuOpen(true))}
            contentStyle={{ padding: "16px", border: "none", outline: "none" }}
            arrow={false}
            keepTooltipInside={true}
            //! The actual user profile photo
            trigger={
              <div className="h-10 w-10 rounded-full">
                <img
                  src={user.photoURL as string}
                  alt=""
                  className="object-fit rounded-full"
                />
              </div>
            }
          >
            {/* The popup modal */}
            <div className="h-max w-48 rounded-md p-2 bg-gray-400 focus:outline-transparent focus:border-transparent text-white font-bold grid place-items-center">
              <button
                autoFocus={false}
                className="w-full rounded-md py-1 hover:bg-black focus:bg-black focus:outline-none focus:border-transparent"
                onClick={async () => {
                  dispatch(setIsLogoutMenuOpen(!isLogoutMenuOpen));
                  await auth.signOut();
                }}
              >
                Sign Out
              </button>
            </div>
            <div
              onClick={() => {
                dispatch(setIsLogoutMenuOpen(!isLogoutMenuOpen));
              }}
            ></div>
          </Popup>
        )}
      </motion.div>
    </>
  );
}
