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
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "Contact Me", href: "#contactme" },
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
  const [activeHover, setActiveHover] = useState<number>(-1);

  useToggle(buttonRef, open, controls, animate, navLinks);

  return (
      <motion.div
        tabIndex={1}
        initial={{ opacity: 0 }}
        animate={controls}
        ref={NavbarRef}
        className="navbar hidden fixed top-5 right-5 z-[999] rounded-[50%] rounded-tr-none [--width:100%] md:[--width:28rem]"
      >
        {/* Nav panel content */}
        <motion.ul
          ref={navLinks}
          onMouseLeave={() => setActiveHover(-1)}
          className="flex p-6 pt-20 w-full h-full flex-col justify-center gap-1 overflow-clip"
        >
          {/* Decorative top label */}
          <li className="pb-4 px-4">
            <span className="text-white/20 text-xs tracking-[0.3em] uppercase font-mono">
              Navigation
            </span>
          </li>

          {ListOfLinks.map((link, index) => (
            <motion.li
              key={link.label}
              onMouseEnter={() => setActiveHover(index)}
              onClick={() => setOpen(false)}
              className="relative group"
              initial={{ x: "-100%", filter: "blur(5px)" }}
            >
              {activeHover === index && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,215,0,0.08) 0%, transparent 100%)",
                    borderLeft: "2px solid #FFD700",
                  }}
                />
              )}
              <Link
                href={link.href}
                className="relative z-10 flex items-center gap-5 px-4 py-3 w-full select-none"
              >
                <span className="text-golden/30 font-mono text-xs font-bold tabular-nums w-6 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-white/70 text-lg font-medium tracking-wide transition-colors duration-200"
                  style={
                    activeHover === index ? { color: "#FFD700" } : undefined
                  }
                >
                  {link.label}
                </span>
              </Link>
            </motion.li>
          ))}

          {/* Footer strip */}
          <li className="mt-6 px-4 pt-5 border-t border-white/[0.06]">
            <p className="text-white/15 text-[10px] tracking-[0.25em] uppercase font-mono">
              Deepak Bhattarai &copy; {new Date().getFullYear()}
            </p>
          </li>
        </motion.ul>

        {/* Toggle Button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          onKeyDown={(e) => e.key === "Enter" && setOpen((prev) => !prev)}
          className="group rounded-full grid place-items-center fixed right-4 top-4 bg-golden h-12 w-12 md:h-14 md:w-14 text-black cursor-pointer overflow-hidden [--button-color:black]"
          style={{ boxShadow: "0 0 20px rgba(255,215,0,0.35)" }}
          aria-controls="primary-navigation"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <svg
            stroke="var(--button-color)"
            fill="none"
            className={`transition-all h-full w-full duration-1000
              group-aria-[expanded=true]:translate-x-[3px]
              group-aria-[expanded=true]:translate-y-[-4px]
              group-aria-[expanded=true]:rotate-[0.125turn]
              md:group-aria-[expanded=true]:translate-y-[-5px]
              md:group-aria-[expanded=true]:translate-x-[5px]
              lg:group-aria-[expanded=true]:translate-x-[4px]
            `}
            viewBox="-10 -10 120 120"
            aria-hidden="true"
          >
            <path
              className="[stroke-dasharray:60_31_60_300] transition-all duration-1000
                group-aria-[expanded=true]:[stroke-dasharray:60_105_60_300]
                group-aria-[expanded=true]:[stroke-dashoffset:-90]"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            />
          </svg>
        </button>
      </motion.div>
  );

  async function display() {
    if (NavbarRef.current) NavbarRef.current.style.display = "block";
    controls.start({ opacity: 1, transition: { duration: 0.5 } });
  }

  async function hide() {
    setOpen(false);
    if (NavbarRef.current) {
      await controls.start({ opacity: 0, transition: { duration: 0.5 } });
      NavbarRef.current.style.display = "none";
    }
  }
};

export default Navbar;

function useToggle(
  ref: React.MutableRefObject<HTMLButtonElement | null>,
  open: boolean,
  controls: LegacyAnimationControls,
  animate: ReturnType<typeof useAnimate>[1],
  navLinks: React.MutableRefObject<HTMLUListElement | null>
) {
  useEffect(() => {
    async function run() {
      const button = ref?.current;
      if (button) {
        if (open) {
          button.setAttribute("data-state", "opened");
          button.setAttribute("aria-expanded", "true");

          await controls.start({
            backgroundColor: "#0c0c0c",
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

          await animate(navLinks.current, { display: "flex" });
          animate(
            "li",
            { x: 0, filter: "blur(0px)" },
            { duration: 0.2, delay: stagger(0.01) }
          );
        } else {
          await animate(
            "li",
            { x: "-100%" },
            { duration: 0.5, delay: stagger(0.01) }
          );
          animate(navLinks.current, { display: "none" });

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

          button.setAttribute("data-state", "closed");
          button.setAttribute("aria-expanded", "false");
        }
      }
    }
    run();
  }, [animate, controls, navLinks, open, ref]);
}
