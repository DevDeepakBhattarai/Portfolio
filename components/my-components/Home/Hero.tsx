"use client";
import { Montserrat } from "next/font/google";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Spotlight } from "./Spotlight";
import ScrollDownIndicator from "@/components/ui/ScrollDownIndicator";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

interface Props {}

const Font = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});
const delay = 3000;

export default function Hero({}: Props): ReactElement {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [shouldTheScrollIndicatorBeShown, setShouldTheScrollIndicatorBeShown] =
    useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  // ! Make the scroll Indicator visible 5 sec after the shapes have loaded
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (!hasScrolled) {
      timerRef.current = setTimeout(() => {
        setShouldTheScrollIndicatorBeShown(true);
      }, delay);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [hasScrolled]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest !== 0) setHasScrolled(true);
  });

  return (
    <motion.div
      ref={targetRef}
      className="relative overflow-clip min-h-screen w-full bg-black bg-grid-white/[0.2]  flex items-center justify-center"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] text-white" />

      <Spotlight
        className="top-16 left-10 md:left-50 md:-top-20 lg:left-96 xl:left-[27rem]"
        fill="white"
      />

      <motion.div
        style={{ y }}
        className={`${Font?.className} relative bottom-4 text-white max-w-6xl px-6 text-[1.75rem] font-semibold leading-tight md:text-[2.5rem] lg:text-[3.5rem]`}
      >
        <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-br from-purple-500 from-[1%]  to-white via-[5%]">
          Hello!{" "}
        </span>
        I am{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 from-10%  via-golden via-15% to-yellow-500 to-100%  lg:tracking-wide">
          Deepak Bhattarai.
        </span>{" "}
        A developer who builds websites that are{" "}
        <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 from-10%  via-golden via-15% to-yellow-500 to-100%">
          {" "}
          more than just{" "}
          <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-br from-purple-500  via-golden via-15% to-purple-500 to-100%">
            functional{" "}
          </span>
        </span>
      </motion.div>
      {shouldTheScrollIndicatorBeShown && (
        <ScrollDownIndicator
          scrollYProgress={scrollYProgress}
        ></ScrollDownIndicator>
      )}
    </motion.div>
  );
}
