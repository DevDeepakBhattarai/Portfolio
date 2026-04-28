"use client";
import {
  MotionValue,
  motion,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";
import { Mouse } from "lucide-react";
import React, { ReactElement, useEffect } from "react";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const ScrollDownIndicator = ({ scrollYProgress }: Props): ReactElement => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: {
        duration: 10,
      },
    });
  }, [controls]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest !== 0) {
      controls
        .start({
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        })
        .then(() => {
          controls.set({
            display: "none",
          });
        });
    }
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={controls}
      className="h-16 w-16 fixed left-1/2 text-white -translate-x-1/2  bottom-12 animate-bounce"
    >
      <div className="flex flex-col items-center w-max gap-1">
        <Mouse></Mouse>
        {/* <div className="text-xs w-max uppercase leading-3 [text-orientation:upright] [writing-mode:vertical-lr]">
          Scroll
        </div> */}
      </div>
    </motion.div>
  );
};

export default ScrollDownIndicator;
