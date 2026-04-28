"use client";
import React, { ReactElement, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Navbar from "../Navbar/Main";
import ScrollDownIndicator from "@/components/ui/ScrollDownIndicator";
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
              className="relative  h-40 w-40
             rounded-full md:h-80 md:w-80 md:rounded-2xl lg:h-96"
            >
              <Image
                fill
                src={"/deepak.jpg"}
                sizes="(min-width: 768px) 20rem,(min-width: 1024px) 24rem, 10rem"
                className="
              aspect-auto rounded-full
              object-cover object-top md:rounded-2xl"
                alt="Image of Deepak Bhattarai, Developer who builds website that are more than just functional"
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
              {"I'm"} a <strong>Full Stack Developer</strong> focused on modern
              AI application engineering:{" "}
              <span className="underline decoration-golden decoration-wavy">
                Vercel AI SDK
              </span>
              ,{" "}
              <span className="underline decoration-[#61Dbfb] decoration-wavy">
                React
              </span>
              ,{" "}
              <span className="underline decoration-white decoration-wavy">
                Next.js
              </span>
              , LangGraph, LangChain, browser agents, document pipelines, and
              voice-first tools.
            </p>
            <p>
              Recent work includes ALLWEONE, a large AI workspace; a Plasmo
              browser automation extension; a Gemini-powered computer
              assistant; Docling/FastAPI document extraction services; Raycast
              extensions; Plate.js editor systems; and local speech-to-text
              desktop workflows.
            </p>
            <p>
              I still build the full product surface around the AI layer:
              authentication, databases, realtime state, polished interfaces,
              deployment, observability, and the small details that make tools
              feel reliable.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
