import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface Props {}
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};
export default function Blog({}: Props): ReactElement {
  return (
    <div className="bg-black">
      <div className="card-title justify-center w-full text-2xl">
        How to create host a NEXT JS app in Github Pages
      </div>
    </div>
  );
}
