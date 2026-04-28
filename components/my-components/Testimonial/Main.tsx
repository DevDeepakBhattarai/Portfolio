import Testimonials from "./Testimonials";

export default function Main() {
  return (
    <section
      // eslint-disable-next-line react/no-unknown-property
      id="testimonial"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-golden/5 blur-[120px]" />

      <div className="relative mb-14 flex flex-col items-center gap-3 px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Kind words from{" "}
          <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
            real people
          </span>
        </h2>
        <p className="max-w-md text-sm text-white/50">
          A snapshot of what clients and collaborators have said after working
          together.
        </p>
      </div>

      <Testimonials />
    </section>
  );
}
