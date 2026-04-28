"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  FileCode2,
  FileText,
  Layers3,
  MonitorCog,
  PanelsTopLeft,
  Presentation,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import FacebookCloneImage from "@/asset/FacebookClone/img1.jpg";
import SuperGuestImage from "@/asset/superguest/img1.png";
import AlgorithmVisualizerImage from "@/public/algo-visualizer.png";
import ALLWEONEImage from "@/public/allweone-thumbnail.png";
import OmniServeImage from "@/public/omni-serve-thumbnail.png";
import PDFReaderImage from "@/public/pdf-reader-showcase.png";
import PresentationGeneratorImage from "@/public/presentation-generator-thumbnail.png";
import ArticulatorImage from "@/public/project-thumbnails/articulator.png";
import BrowserAgentImage from "@/public/project-thumbnails/browser-agent.png";
import ChromeWhatsAppImage from "@/public/project-thumbnails/chrome-whatsapp.png";
import ComputerAssistantImage from "@/public/project-thumbnails/computer-assistant.png";
import DoclingApiImage from "@/public/project-thumbnails/docling-api.png";
import FileForgeRaycastImage from "@/public/project-thumbnails/file-forge-raycast.png";
import RedditRomanticsImage from "@/public/project-thumbnails/reddit-romantics.png";
import SpeakToTypeImage from "@/public/project-thumbnails/speak-to-type.png";
import UploadThingPyImage from "@/public/project-thumbnails/uploadthing-py.png";

type Category = "WebApp" | "AI" | "Browser" | "Desktop" | "Tools" | "Editor";

type Project = {
  name: string;
  label: string;
  description: string;
  categories: Category[];
  githubLink?: string;
  learnMoreLink?: string;
  previewImage?: StaticImageData;
  accent: string;
  icon: React.ElementType;
};

const projects: Project[] = [
  {
    name: "ALLWEONE",
    label: "Flagship AI workspace",
    description:
      "AI workspace with chat, agents, document tools, rich editors, realtime collaboration, and visual canvases.",
    learnMoreLink: "https://allweone.com",
    categories: ["AI", "WebApp", "Editor"],
    previewImage: ALLWEONEImage,
    accent: "from-emerald-300 to-cyan-400",
    icon: Layers3,
  },
  {
    name: "Browser Agent",
    label: "Browser automation extension",
    description:
      "Plasmo extension that inspects pages and performs browser tasks through Chrome APIs and an agent UI.",
    githubLink: "https://github.com/DevDeepakBhattarai/browser-agent",
    categories: ["AI", "Browser"],
    previewImage: BrowserAgentImage,
    accent: "from-sky-300 to-fuchsia-300",
    icon: PanelsTopLeft,
  },
  {
    name: "Computer Assistant",
    label: "Voice-controlled Windows agent",
    description:
      "Wake word detection, browser listening, Gemini intelligence, tool calls, and spoken responses.",
    githubLink: "https://github.com/DevDeepakBhattarai/computer-assistant",
    categories: ["AI", "Desktop"],
    previewImage: ComputerAssistantImage,
    accent: "from-lime-300 to-orange-300",
    icon: MonitorCog,
  },
  {
    name: "File Forge for Raycast",
    label: "Raycast file conversion",
    description:
      "Convert images, audio, video, and documents from a selected file or clipboard source inside Raycast.",
    githubLink: "https://github.com/DevDeepakBhattarai/file-forge",
    categories: ["Tools", "Desktop"],
    previewImage: FileForgeRaycastImage,
    accent: "from-violet-300 to-pink-300",
    icon: FileCode2,
  },
  {
    name: "Reddit Romantics",
    label: "AI video creation pipeline",
    description:
      "AI stories, Gemini TTS voiceover, stock footage, captions, and final video rendering, fully automated.",
    githubLink: "https://github.com/DevDeepakBhattarai/reddit-romantics",
    categories: ["AI", "Tools"],
    previewImage: RedditRomanticsImage,
    accent: "from-red-300 to-yellow-300",
    icon: Sparkles,
  },
  {
    name: "UploadThing.py",
    label: "Python SDK",
    description:
      "Async Python SDK for UploadThing: uploads, signed URLs, list/delete/rename, ACL updates, FastAPI integration.",
    githubLink: "https://github.com/DevDeepakBhattarai/uploadthing-py",
    categories: ["Tools"],
    previewImage: UploadThingPyImage,
    accent: "from-cyan-200 to-blue-300",
    icon: TerminalSquare,
  },
  {
    name: "Speak to Type",
    label: "Real-time speech dictation",
    description:
      "Python desktop transcriber that uses Faster Whisper to type spoken words wherever the cursor is focused.",
    githubLink: "https://github.com/DevDeepakBhattarai/speak-to-type",
    categories: ["AI", "Desktop", "Tools"],
    previewImage: SpeakToTypeImage,
    accent: "from-teal-200 to-indigo-300",
    icon: Bot,
  },
  {
    name: "Articulator",
    label: "AI communication app",
    description:
      "AI-assisted articulation using Google GenAI, LangChain, Zustand, and streaming AI UI patterns.",
    githubLink: "https://github.com/DevDeepakBhattarai/articulator",
    categories: ["AI", "WebApp"],
    previewImage: ArticulatorImage,
    accent: "from-rose-300 to-amber-300",
    icon: Sparkles,
  },
  {
    name: "Presentation Generator",
    label: "AI slide deck builder",
    description:
      "Open-source Gamma-style app that generates outlines, editable slides, themes, images, and presentation mode.",
    githubLink: "https://github.com/allweonedev/presentation-ai",
    categories: ["AI", "WebApp", "Editor"],
    previewImage: PresentationGeneratorImage,
    accent: "from-blue-200 to-emerald-300",
    icon: Presentation,
  },
  {
    name: "Facebook Clone",
    label: "Full-stack social platform",
    description:
      "Live feeds, stories, media upload, realtime chat, audio/video calls, auth, profiles, and notifications.",
    githubLink: "https://github.com/DevDeepakBhattarai/facebook-clone",
    learnMoreLink: "/facebook-clone",
    categories: ["WebApp"],
    previewImage: FacebookCloneImage,
    accent: "from-blue-600 to-blue-300",
    icon: PanelsTopLeft,
  },
  {
    name: "Super Guest",
    label: "AI hotel search",
    description:
      "Search a destination and get AI-generated hotel recommendations with preference handling and visual results.",
    githubLink: "https://github.com/DevDeepakBhattarai/Travel_MVP",
    learnMoreLink: "/super-guest",
    categories: ["WebApp", "AI"],
    previewImage: SuperGuestImage,
    accent: "from-red-500 to-orange-400",
    icon: Sparkles,
  },
  {
    name: "PDF Reader",
    label: "Ask questions from PDFs",
    description:
      "Extract information from PDFs through a ChatGPT-style document conversation interface.",
    githubLink: "https://github.com/DevDeepakBhattarai/ask-your-pdf",
    learnMoreLink: "/pdf-reader",
    categories: ["AI", "Tools"],
    previewImage: PDFReaderImage,
    accent: "from-purple-500 to-violet-900",
    icon: FileText,
  },
  {
    name: "Algorithm Visualizer",
    label: "DSA learning tool",
    description:
      "Visualize sorting algorithms with speed controls, array sizing, and real-time state display.",
    githubLink: "https://github.com/DevDeepakBhattarai/algo-visualizer",
    learnMoreLink: "/algo-visualizer",
    categories: ["WebApp", "Tools"],
    previewImage: AlgorithmVisualizerImage,
    accent: "from-zinc-200 to-zinc-500",
    icon: Code2,
  },
  {
    name: "Omni Serve",
    label: "Service marketplace platform",
    description:
      "Book experts and local services with scheduling, payments, chat, and Agora audio/video sessions.",
    githubLink: "https://github.com/DevDeepakBhattarai",
    categories: ["WebApp", "Tools"],
    previewImage: OmniServeImage,
    accent: "from-cyan-300 to-lime-300",
    icon: Layers3,
  },
  {
    name: "Chrome WhatsApp",
    label: "Quick-send browser extension",
    description:
      "Select any text on a page, pick a contact, and open WhatsApp with the message prefilled.",
    githubLink: "https://github.com/DevDeepakBhattarai/chrome-whatsapp",
    categories: ["Browser", "Tools"],
    previewImage: ChromeWhatsAppImage,
    accent: "from-green-300 to-emerald-500",
    icon: FileCode2,
  },
  {
    name: "Docling API",
    label: "Document intelligence service",
    description:
      "FastAPI microservice converting documents into structured JSON and Markdown with image and table extraction.",
    learnMoreLink: "https://allweone.com/pdf",
    categories: ["AI", "Tools"],
    previewImage: DoclingApiImage,
    accent: "from-stone-200 to-cyan-200",
    icon: FileText,
  },
];

const filters = ["All", "WebApp", "AI", "Browser", "Desktop", "Tools", "Editor"] as const;

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  if (project.previewImage) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.previewImage}
          alt={`Preview of ${project.name}`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-[0.13] transition-opacity duration-300 group-hover:opacity-20`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${project.accent} shadow-lg`}>
          <Icon size={22} className="text-black/70" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}

const sectionId = "projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <section className="relative z-50 bg-black pb-24 text-white" id={sectionId}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 pt-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-golden">Work</p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Selected Projects
            </h2>
            <span className="mb-1.5 font-mono text-sm text-zinc-600">
              {filteredProjects.length} projects
            </span>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mb-10 flex items-center overflow-x-auto border-b border-white/10 pb-px">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 border-b-2 pb-3 px-3 font-mono text-xs uppercase tracking-widest transition-colors duration-150 ${
                activeFilter === filter
                  ? "border-golden text-golden"
                  : "border-transparent text-zinc-600 hover:text-zinc-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.name}
                variants={cardVariants}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/50 transition-colors duration-300 hover:border-white/[0.16] hover:bg-zinc-950"
              >
                <ProjectVisual project={project} />

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="text-base font-bold leading-snug">{project.name}</h3>
                    <p className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-zinc-600">
                      {project.label}
                    </p>
                  </div>

                  <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-center gap-5 pt-1">
                    {project.learnMoreLink && (
                      <Link
                        href={project.learnMoreLink}
                        className="text-sm font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                      >
                        View project
                      </Link>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-white"
                        aria-label={`${project.name} on GitHub`}
                      >
                        GitHub <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
