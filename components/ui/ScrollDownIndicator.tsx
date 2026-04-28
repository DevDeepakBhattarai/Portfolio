"use client";
import { type MotionValue, motion, useAnimation, useMotionValueEvent } from "framer-motion";
import { type ReactElement, useEffect } from "react";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const ScrollDownIndicator = ({ scrollYProgress }: Props): ReactElement => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest !== 0) {
      controls
        .start({ opacity: 0, y: 10, transition: { duration: 0.4 } })
        .then(() => controls.set({ display: "none" }));
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={controls}
      className="fixed left-1/2 bottom-20 md:bottom-10 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none"
    >
      <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-mono">
        Scroll
      </span>

      {/* Animated chevrons */}
      <div className="flex flex-col items-center gap-0.5">
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            aria-hidden="true"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            <path
              d="M1 1L9 9L17 1"
              stroke="#FFD700"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollDownIndicator;
