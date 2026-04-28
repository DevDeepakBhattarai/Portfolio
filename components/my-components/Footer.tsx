import React, { ReactElement } from "react";
import { Mail, MapPin } from "lucide-react";
import { Github, Reddit, X, Youtube, Linkedin } from "@/components/ui/Logos";
interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <div
      id="contactme"
      className="bg-golden h-auto w-auto py-8 px-4 lg:py-14 lg:px-8 z-50 relative"
    >
      <div
        className="absolute -top-[2px] lg:-top-1 left-0 w-full overflow-clip 
      leading-[0] transform rotate-180"
      >
        <svg
          data-name="Layer 1"
          className="relative block transform w-[calc(100%+1.3px)] h-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <div className="space-y-4  lg:space-y-8 flex-1">
          <a
            href="mailto:contact@deepak-bhattarai.com.np"
            className="flex items-center gap-2 md:gap-4 group"
          >
            <div className="rounded-full border border-black h-10 md:h-16 aspect-1 grid place-items-center group-hover:scale-105 transition-all duration-150">
              <Mail />
            </div>
            <span className="text-base md:text-xl underline-offset-2 group-hover:underline">
              contact@deepak-bhattarai.com.np
            </span>
          </a>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="rounded-full border border-black h-10 md:h-16 aspect-1 grid place-items-center  hover:scale-105 transition-all duration-150">
              <MapPin />
            </div>
            <span className="text-base md:text-xl">Kathmandu Nepal</span>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-bold text-lg"> Connect </h3>
          <div className="flex flex-row gap-2 py-4">
            <a
              href="https://www.youtube.com/@deepak_the_developer"
              className="hover:scale-95 transition-transform duration-150 grid place-items-center h-8 w-8 lg:h-16 rounded-full lg:w-16"
            >
              <Youtube />
              <span className="sr-only">Youtube</span>
            </a>
            <a
              href="https://github.com/DevDeepakBhattarai"
              className="hover:scale-90 transition-transform duration-150 scale-95 grid place-items-center h-8 w-8 lg:h-16 rounded-full lg:w-16"
            >
              <Github />
              <span className="sr-only">Github</span>
            </a>
            <a
              href="https://www.reddit.com/user/_enma___"
              className="hover:scale-95 transition-transform duration-150 grid place-items-center h-8 w-8 lg:h-16 rounded-full lg:w-16 "
            >
              <Reddit></Reddit>
              <span className="sr-only">Reddit</span>
            </a>
            <a
              href="https://twitter.com/deepak_the_dev"
              className="hover:scale-95 transition-transform duration-150 grid place-items-center h-8 w-8 lg:h-16 rounded-full lg:w-16"
            >
              <X></X>
              <span className="sr-only">X (Previously Twitter)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/developer-deepak-bhattarai/"
              className="hover:scale-95 transition-transform duration-150 grid place-items-center h-8 w-8 lg:h-16 rounded-full lg:w-16"
            >
              <Linkedin></Linkedin>
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
