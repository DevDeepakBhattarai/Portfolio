import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { RootState } from "../src/state/store";

export interface IHeroProps {}

export default function Hero({}: IHeroProps) {
  const { isLoading } = useSelector((store: RootState) => store.home);
  return (
    <div className="flex-1">
      <motion.div className="isolate lg:h-screen flex text-5xl pointer-events-none overflow-hidden items-center ml-4">
        {!isLoading && (
          <>
            <span
              style={{ WebkitBackgroundClip: "text" }}
              className="h-max text-4xl leading-[4rem] md:leading-[4.5rem] md:text-[2.8rem] font-semibold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
            >
              <Typewriter
                words={["Hi, the name is Deepak Bhattarai", "<>Coding-Nerd</>"]}
                delaySpeed={2000}
                loop
              ></Typewriter>
              <Cursor cursorColor="blue"></Cursor>
            </span>
          </>
        )}
      </motion.div>
    </div>
  );
}
