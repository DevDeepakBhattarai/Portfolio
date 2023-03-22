import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface Props {
  title: string;
  photo: string;
  description: string;
}
const prefix = process.env.NEXT_PUBLIC_PATH || "";
export default function IndividualProject({
  title,
  photo,
  description,
}: Props): ReactElement {
  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{
          y: 0,
          transition: { duration: 1, type: "spring", delay: 0.1 },
        }}
        viewport={{ once: true }}
        className="mb-10 p-4 space-y-4"
      >
        <h1 className="text-2xl text-blue-500  font-bold">{title}</h1>

        <div>
          <img className="max-h-72 aspect-auto" src={prefix + photo} alt="" />
        </div>

        <div className="text-black stroke-white text-lg font-semibold max-w-xl">
          {description}
        </div>
      </motion.div>
    </>
  );
}
