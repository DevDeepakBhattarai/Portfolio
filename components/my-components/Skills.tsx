"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

type SkillItem = {
  image?: StaticImageData | string;
  skill: string;
  logoSurface?: "light" | "dark";
};

type SkillGroup = {
  category: string;
  skills: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { image: "/skills/react.svg", skill: "React" },
      { image: "/skills/nextjs-icon.svg", skill: "Next.js" },
      { image: "/skills/typescript.svg", skill: "TypeScript" },
      { image: "/skills/javascript.svg", skill: "JavaScript" },
      { image: "/skills/tailwindcss.svg", skill: "Tailwind CSS" },
      { image: "/skills/redux.svg", skill: "Redux" },
      { image: "/skills/framer-white.svg", skill: "Framer Motion" },
      { image: "/skills/platejs.svg", skill: "Plate.js" },
      { image: "/skills/plasmo.png", skill: "Plasmo" },
    ],
  },
  {
    category: "AI & ML",
    skills: [
      { image: "/skills/langchain.png", skill: "LangChain" },
      { image: "/skills/langgraph.png", skill: "LangGraph" },
      { image: "/skills/vercel-white.svg", skill: "Vercel AI SDK" },
      { image: "/skills/openai.svg", skill: "OpenAI" },
      { image: "/skills/anthropic.svg", skill: "Anthropic" },
      { image: "/skills/docling.svg", skill: "Docling" },
      { image: "/skills/tensorflow.svg", skill: "TensorFlow" },
      { image: "/skills/hugging-face.svg", skill: "Hugging Face" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { image: "/skills/fastapi.svg", skill: "FastAPI" },
      { image: "/skills/nodejs.svg", skill: "Node.js" },
      { image: "/skills/python.svg", skill: "Python" },
      { image: "/skills/prisma.svg", skill: "Prisma" },
      { image: "/skills/firebase.svg", skill: "Firebase" },
    ],
  },
  {
    category: "Data",
    skills: [
      { image: "/skills/postgresql.svg", skill: "Postgres" },
      { image: "/skills/mysql.svg", skill: "MySQL" },
      { image: "/skills/redis.svg", skill: "Redis" },
      { image: "/skills/neon.svg", skill: "Neon" },
      { image: "/PineconeLogo.svg", skill: "Pinecone" },
      { image: "/skills/upstash.svg", skill: "Upstash" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { image: "/skills/cursor.svg", skill: "Cursor" },
      { image: "/skills/openai.svg", skill: "Codex" },
      { image: "/skills/claude.svg", skill: "Claude Code" },
      { image: "/skills/openclaw.png", skill: "OpenClaw" },
      { image: "/skills/tauri.svg", skill: "Tauri" },
      { image: "/skills/raycast.svg", skill: "Raycast" },
      { image: "/skills/axiom.svg", skill: "Axiom" },
    ],
  },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const pillsContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

function SkillPill({ skill, image, logoSurface = "dark" }: SkillItem) {
  return (
    <motion.div
      variants={pillVariants}
      className="flex cursor-default select-none items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300 transition-all duration-200 hover:border-golden/40 hover:bg-white/[0.07] hover:text-white"
    >
      {image && (
        <span
          className={`relative h-[1.05rem] w-[1.05rem] shrink-0 ${
            logoSurface === "light" ? "rounded-sm bg-white p-px" : ""
          }`}
        >
          <Image
            src={image}
            alt={skill}
            fill
            className="object-contain"
            sizes="17px"
          />
        </span>
      )}
      <span>{skill}</span>
    </motion.div>
  );
}

export default function Skills(): ReactElement {
  return (
    <section id="skills" className="relative z-50 bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-golden">
            Stack
          </p>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Skills &amp; Tools
          </h2>
        </div>

        <div>
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={rowVariants}
              className="group/row border-t border-white/10"
            >
              <div className="flex flex-col gap-4 py-8 sm:flex-row sm:gap-10">
                <div className="sm:w-28 sm:shrink-0 sm:pt-1.5">
                  <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.25em] text-zinc-600 transition-colors duration-300 group-hover/row:text-golden">
                    {group.category}
                  </span>
                </div>
                <motion.div
                  variants={pillsContainerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <SkillPill key={skill.skill} {...skill} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
