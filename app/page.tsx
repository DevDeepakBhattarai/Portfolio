import Shapes from "@/components/my-components/Home/GoldenShapes";
import Background from "@/components/my-components/Home/Background";
import Hero from "@/components/my-components/Home/Hero";
import About from "@/components/my-components/About/About";
import Projects from "@/components/my-components/Projects/Projects";
import Skills from "@/components/my-components/Skills";
import Contact from "@/components/my-components/Contact/Main";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden ">
      <section className="relative top-full h-[200vh] w-screen snap-both snap-mandatory ">
        <div className="fixed top-0 h-screen w-screen">
          <section className="relative grid h-screen place-items-center">
            <Shapes></Shapes>
            <Hero></Hero>
            <Background></Background>
          </section>
        </div>
        <About></About>
      </section>

      <section className="relative z-50 h-[200vh] bg-black">
        <Projects></Projects>
      </section>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
}
