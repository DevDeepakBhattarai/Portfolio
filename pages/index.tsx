import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { lazy, useEffect, useState } from "react";
import Head from "next/head";
import { ComponentType } from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "../components/ErrorBoundary";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import CircleAnimation from "../components/CircleAnimation";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Project/Projects";
import Animation from "../components/Animation";
export default function Home() {
  return (
    <>
      <Head>
        <title>Deepak Bhattarai</title>
      </Head>
      <ErrorBoundary>
        <div className="bg-white snap-y h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-black scroll-smooth snap-mandatory isolate ">
          <section id="home">
            <Navbar></Navbar>
            <div className="relative isolate h-screen flex snap-center scroll-smooth items-center flex-col lg:flex-row-reverse  overflow-hidden">
              {Animation && <Animation></Animation>}

              <Hero></Hero>

              <Loading />
              <CircleAnimation></CircleAnimation>
            </div>
          </section>

          <section id="about" className="snap-center">
            <About></About>
          </section>

          <section id="projects" className="snap-center">
            <Projects></Projects>
          </section>
          <section id="skills" className="snap-center">
            <Skills></Skills>
          </section>
          <section id="contact me" className="snap-end scroll-p-4">
            <ContactMe></ContactMe>
          </section>

          <a
            href="#home"
            className="absolute animate-[bounce_10s_infinite] bottom-4 left-4 h-8 w-8"
          >
            <img src="/up.png" alt="" />
          </a>
        </div>
      </ErrorBoundary>
    </>
  );
}
