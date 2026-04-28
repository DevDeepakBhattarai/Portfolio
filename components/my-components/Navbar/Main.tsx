"use client";
import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  MotionValue,
  useMotionValueEvent,
  type LegacyAnimationControls,
} from "framer-motion";
import Link from "next/link";

import React, { useEffect, useRef, useState } from "react";
import { ReactElement } from "react";
interface Props {
  scrollYProgress: MotionValue<number>;
}

const ListOfLinks = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Testimonial",
  "Contact Me",
];
const Navbar = ({ scrollYProgress }: Props): ReactElement => {
  const controls = useAnimation();
  const [open, setOpen] = useState(false);
  const NavbarRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.03) display();
    else hide();
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [navLinks, animate] = useAnimate();
  const [activeHover, setActiveHover] = useState<number>();

  useToggle(buttonRef, open, controls, animate, navLinks);
  return (
    <>
      <motion.div
        tabIndex={1}
        initial={{ opacity: 0 }}
        animate={controls}
        ref={NavbarRef}
        className="navbar hidden fixed top-5 right-5 z-[999] rounded-[50%] rounded-tr-none [--width:100%] md:[--width:30rem]"
      >
        <motion.ul
          ref={navLinks}
          onMouseLeave={() => {
            setActiveHover(-1);
          }}
          className="flex p-4 w-full h-4/5 isolate text-2xl pt-4 space-y-4 flex-col [&>li]:flex-1 overflow-clip"
        >
          {ListOfLinks.map((link, index) => {
            return (
              <motion.li
                onMouseEnter={() => {
                  setActiveHover(index);
                }}
                onClick={() => {
                  setOpen(false);
                }}
                className="relative"
                key={link}
                initial={{
                  x: "-100%",
                  filter: "blur(5px)",
                }}
              >
                {activeHover === index && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 bg-gray-400 rounded-lg "
                  ></motion.div>
                )}
                <Link
                  className="relative z-50 px-2 h-full w-full grid items-center justify-center lg:justify-start"
                  href={`#${link.replace(" ", "").toLowerCase()}`}
                >
                  {link}
                </Link>
              </motion.li>
            );
          })}{" "}
        </motion.ul>

        <div
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          className="rounded-full grid place-items-center fixed right-4 top-4 bg-golden h-12 w-12 md:h-16 md:w-16  text-black shadow-md shadow-white/40"
        >
          <button
            ref={buttonRef}
            className="group grid place-items-center overflow-hidden h-full w-full rounded-full  [--button-color:white]"
            aria-controls="primary-navigation"
            aria-expanded="false"
          >
            <svg
              stroke="var(--button-color)"
              fill="none"
              className={`transition-all h-full w-full  duration-1000 

              group-aria-[expanded=true]:translate-x-[3px] 
              group-aria-[expanded=true]:translate-y-[-4px] 
              group-aria-[expanded=true]:rotate-[0.125turn]

              md:group-aria-[expanded=true]:translate-y-[-5px]  
              md:group-aria-[expanded=true]:translate-x-[5px] 

              lg:group-aria-[expanded=true]:translate-x-[4px] 
              `}
              viewBox="-10 -10 120 120"
            >
              <path
                className="[stroke-dasharray:60_31_60_300] transition-all duration-1000 group-aria-[expanded=true]:[stroke-dasharray:60_105_60_300] 
                group-aria-[expanded=true]:[stroke-dashoffset:-90]"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
              ></path>
            </svg>
          </button>
        </div>
      </motion.div>
    </>
  );

  async function display() {
    if (NavbarRef.current) NavbarRef.current.style.display = "block";
    controls.start({
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    });
  }
  async function hide() {
    setOpen(false);
    if (NavbarRef.current) {
      await controls.start({
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      });
      NavbarRef.current.style.display = "none";
    }
  }
};

export default Navbar;

function useToggle(
  ref: React.MutableRefObject<HTMLButtonElement | null>,
  open: boolean,
  controls: LegacyAnimationControls,
  animate: any,
  navLinks: React.MutableRefObject<HTMLUListElement | null>
) {
  useEffect(() => {
    async function run() {
      const button = ref?.current;
      if (button) {
        if (open) {
          // ! Animate the hamburger menu to be cross
          button.setAttribute("data-state", "opened");
          button.setAttribute("aria-expanded", "true");

          // ! Expand the navbar form the top right corner

          await controls.start({
            backgroundColor: "white",
            height: "100vh",
            width: "var(--width)",
            top: "0",
            right: "0",
            borderRadius: 0,

            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          });
          //! Make the list of links visible
          await animate(navLinks.current, { display: "flex" });

          //! Animate it from the left
          animate(
            "li",
            { x: 0, filter: "blur(0px)" },
            { duration: 0.2, delay: stagger(0.01) }
          );
        } else {
          // ! Make the list go back to left again
          await animate(
            "li",
            { x: "-100%" },
            { duration: 0.5, delay: stagger(0.01) }
          );
          // ! Hide the list of links
          animate(navLinks.current, { display: "none" });

          // ! Contract the navbar back to top right corner
          controls.start({
            height: "0",
            width: "0",
            top: "1.5rem",
            right: "1.5rem",
            borderRadius: "50%",

            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          });
          // ! Animate the cross to hamburger again
          button.setAttribute("data-state", "closed");
          button.setAttribute("aria-expanded", "false");
        }
      }
    }
    run();
  }, [animate, controls, navLinks, open, ref]);
}
