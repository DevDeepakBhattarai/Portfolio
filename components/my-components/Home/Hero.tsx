"use client";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import ScrollDownIndicator from "@/components/ui/ScrollDownIndicator";
import { Spotlight } from "./Spotlight";

const Font = Montserrat({ weight: ["400", "600", "700", "900"], subsets: ["latin"] });

// Material Theme Dark — proper syntax colors per token
const C = {
  prompt:  "#89DDFF", // cyan  — shell $ and punctuation
  cmd:     "#82AAFF", // blue  — command names
  out:     "#EEFFFF", // white — plain output
  key:     "#F07178", // coral — JSON keys
  str:     "#C3E88D", // green — JSON string values
  special: "#FFCB6B", // amber — highlighted value
  dim:     "#546E7A", // grey  — brackets / braces
};

// Each line is a render function so we get proper per-token coloring
const terminalLines: Array<{ id: string; render: () => React.ReactNode }> = [
  {
    id: "cmd-whoami",
    render: () => (
      <>
        <span style={{ color: C.prompt }}>$</span>{" "}
        <span style={{ color: C.cmd }}>whoami</span>
      </>
    ),
  },
  {
    id: "out-whoami",
    render: () => <span style={{ color: C.out }}>deepak_bhattarai</span>,
  },
  { id: "empty-1", render: () => null },
  {
    id: "cmd-cat",
    render: () => (
      <>
        <span style={{ color: C.prompt }}>$</span>{" "}
        <span style={{ color: C.cmd }}>cat</span>{" "}
        <span style={{ color: C.out }}>profile.json</span>
      </>
    ),
  },
  {
    id: "open",
    render: () => <span style={{ color: C.prompt }}>{"{"}</span>,
  },
  {
    id: "role",
    render: () => (
      <>
        {"  "}
        <span style={{ color: C.key }}>&quot;role&quot;</span>
        <span style={{ color: C.prompt }}>: </span>
        <span style={{ color: C.str }}>&quot;Full-Stack Developer&quot;</span>
        <span style={{ color: C.prompt }}>,</span>
      </>
    ),
  },
  {
    id: "focus",
    render: () => (
      <>
        {"  "}
        <span style={{ color: C.key }}>&quot;focus&quot;</span>
        <span style={{ color: C.prompt }}>: </span>
        <span style={{ color: C.str }}>&quot;Web + AI&quot;</span>
        <span style={{ color: C.prompt }}>,</span>
      </>
    ),
  },
  {
    id: "stack-1",
    render: () => (
      <>
        {"  "}
        <span style={{ color: C.key }}>&quot;stack&quot;</span>
        <span style={{ color: C.prompt }}>: [</span>
        <span style={{ color: C.str }}>&quot;Next.js&quot;</span>
        <span style={{ color: C.prompt }}>, </span>
        <span style={{ color: C.str }}>&quot;TypeScript&quot;</span>
        <span style={{ color: C.prompt }}>,</span>
      </>
    ),
  },
  {
    id: "stack-2",
    render: () => (
      <>
        {"            "}
        <span style={{ color: C.str }}>&quot;Node.js&quot;</span>
        <span style={{ color: C.prompt }}>, </span>
        <span style={{ color: C.str }}>&quot;Python&quot;</span>
        <span style={{ color: C.prompt }}>],</span>
      </>
    ),
  },
  {
    id: "builds",
    render: () => (
      <>
        {"  "}
        <span style={{ color: C.key }}>&quot;builds&quot;</span>
        <span style={{ color: C.prompt }}>: </span>
        <span style={{ color: C.special }}>&quot;more than functional&quot;</span>
      </>
    ),
  },
  {
    id: "close",
    render: () => <span style={{ color: C.prompt }}>{"}"}</span>,
  },
  { id: "empty-2", render: () => null },
  {
    id: "cursor-prompt",
    render: () => <span style={{ color: C.prompt }}>$ </span>,
  },
];

const socials = ["GH", "LI", "TW"];

export default function Hero() {
  const [hasScrolled, setHasScrolled]     = useState(false);
  const [showScroll, setShowScroll]       = useState(false);
  const [visibleLines, setVisibleLines]   = useState(0);
  const [spotlightMounted, setSpotlightMounted] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  // Delay spotlight render until after hydration to prevent the "starts at bottom" flash
  useEffect(() => {
    const t = setTimeout(() => setSpotlightMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (hasScrolled) return;
    const t = setTimeout(() => setShowScroll(true), 3000);
    return () => clearTimeout(t);
  }, [hasScrolled]);

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= terminalLines.length) clearInterval(iv);
    }, 165);
    return () => clearInterval(iv);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v !== 0) setHasScrolled(true);
  });

  return (
    <motion.div ref={targetRef} className="relative overflow-clip min-h-screen w-full bg-black bg-grid-white/[0.07] flex items-center justify-center">
      {/* Radial vignette */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />

      {/* Neon cyan spotlight — client-side only, prevents startup position flash */}
      {spotlightMounted && (
        <Spotlight className="top-16 left-10 md:-top-20 lg:left-20 xl:left-32" fill="#FFFFCC" />
      )}

      {/* GRIND watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className={`${Font.className} text-[22vw] font-black tracking-tighter leading-none text-white/[0.03]`}>
          GRIND
        </span>
      </div>

      {/* Left rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/10" />
        {socials.map((s) => (
          <span key={s} className="text-white/20 text-[9px] font-mono tracking-[0.3em] rotate-90 cursor-pointer hover:text-golden/60 transition-colors duration-300">
            {s}
          </span>
        ))}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-white/10" />
      </motion.div>

      {/* Right rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/10" />
        <span className="text-white/40 text-[9px] font-mono tracking-widest rotate-90 whitespace-nowrap">© 2025</span>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-white/10" />
      </motion.div>

      {/* Main split layout */}
      <motion.div style={{ y }} className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col gap-6"
        >
          <span className="text-golden/50 font-mono text-xs tracking-[0.3em] uppercase">
            Full-Stack Developer
          </span>

          <div className={`${Font.className} leading-tight tracking-tight`}>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-golden via-yellow-400 to-golden text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-black">
              Deepak
            </div>
            <div className="text-white/90 text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-black">
              Bhattarai.
            </div>
          </div>

          <p className={`${Font.className} text-white/40 text-sm md:text-base leading-relaxed max-w-xs`}>
            A developer who builds websites that are{" "}
            <span className="text-white/70 font-medium">more than just functional</span>
            {" "}— where clean code meets sharp design.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex gap-3"
          >
            <button
              type="button"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 rounded-full border border-golden/40 bg-golden/10 text-golden/80 text-sm font-medium hover:bg-golden/20 hover:border-golden/60 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={() => document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 rounded-full border border-white/30 text-white/60 text-sm font-medium hover:border-white/50 hover:text-white/85 hover:bg-white/5 transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Right: terminal */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-lg"
        >
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/70">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.015]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <span className="ml-3 text-white/20 text-xs font-mono">bash — 80×24</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed min-h-[260px]">
              {terminalLines.map((line, i) => (
                <div key={line.id} className="h-[1.6em] whitespace-pre">
                  {i < visibleLines ? (
                    <>
                      {line.render()}
                      {i === visibleLines - 1 && line.id !== "empty-1" && line.id !== "empty-2" && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="inline-block w-[7px] h-[1em] ml-0.5 align-middle"
                          style={{ backgroundColor: C.prompt, opacity: 0.7 }}
                        />
                      )}
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {showScroll && <ScrollDownIndicator scrollYProgress={scrollYProgress} />}
    </motion.div>
  );
}
