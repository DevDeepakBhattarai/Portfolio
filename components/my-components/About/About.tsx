"use client";
import React, { ReactElement, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Navbar from "../Navbar/Main";
interface Props {}

export default function About({}: Props): ReactElement {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });

  // ! This tracks when the user scroll and display the navbar when they do and hides it when the user come backs to the top

  return (
    <motion.div
      id="about"
      className="relative z-[999] lg:h-screen bg-gradient-to-bl from-black to-slate-900"
    >
      <Navbar scrollYProgress={scrollYProgress}></Navbar>
      <div className="relative flex min-h-screen h-max flex-col items-center xl:px-8">
        <div
          ref={targetRef}
          className="relative text-3xl p-4 font-bold tracking-widest text-white"
        >
          About
        </div>

        <div className="flex-1 flex h-full flex-col justify-center gap-4 md:px-30 lg:flex-row lg:items-center ">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{
              x: "0",
              transition: {
                duration: 0.5,
              },
            }}
            className="flex flex-shrink-0 items-center justify-center  overflow-hidden md:mt-0"
          >
            <div
              className="relative h-48 w-48 overflow-hidden
             rounded-full md:h-96 md:w-96 md:rounded-2xl lg:h-[28rem] lg:w-[28rem]"
            >
              <Image
                fill
                src={"/deepak.jpg"}
                sizes="(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 12rem"
                className="
              aspect-auto scale-110 rounded-full
              object-cover object-top md:rounded-2xl"
                alt="Portrait of Deepak Bhattarai"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 100,
              transition: {
                duration: 1,
              },
            }}
            className="mx-4 max-w-3xl space-y-5 p-2 font-mono text-base leading-8 text-white md:text-lg"
          >
            <p>
              {"I'm"} <strong>Deepak</strong>. I started messing around with
              code at 15 because of Minecraft, and somehow never stopped. Most
              of what I know came from taking things apart to see how they work
              —{" "}
              <span className="underline decoration-golden decoration-wavy">
                reverse engineering
              </span>{" "}
              instead of waiting to be taught.
            </p>
            <p>
              These days I co-run <strong>ALLWEONE</strong>, build random tools
              whenever something annoys me enough to fix it myself, and share
              what {"I'm"} figuring out on YouTube. Plenty of what I make never
              even makes it to GitHub — I just enjoy making things that feel
              good to use.
            </p>
            <p>
              Outside of screens, {"I'm"} always down for late-night rabbit
              holes about life, space, consciousness, god, aliens, and
              everything in between.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
