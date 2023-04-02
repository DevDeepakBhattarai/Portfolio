import React, { ReactElement } from "react";
import { motion, useAnimate } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export default function CreateNewBtn({}: Props): ReactElement {
  const [ref, animate] = useAnimate();
  const hoverStartHandler = async () => {
    animate(ref.current, { width: "9rem" });
    animate("span", { display: "block", opacity: 1 });
  };
  const hoverEndHandler = async () => {
    await animate(ref.current, { width: "3rem" });
    animate("span", { display: "none" });
  };
  return (
    <motion.button
      ref={ref}
      initial={{ width: "3rem" }}
      transition={{ duration: 0.1 }}
      onHoverStart={hoverStartHandler}
      onHoverEnd={hoverEndHandler}
      className="whitespace-nowrap flex min-h-12 min-w-[3rem] overflow-hidden gap-2 transition-all duration-150 items-center justify-center bg-purple-500 rounded-full text-white font-bold"
    >
      <FontAwesomeIcon icon={faPlus} className="font-bold text-lg" />

      <motion.span
        initial={{ opacity: 0, display: "none" }}
        transition={{ duration: 0.1 }}
        className="group-hover:block hidden"
      >
        Create New
      </motion.span>
    </motion.button>
  );
}
