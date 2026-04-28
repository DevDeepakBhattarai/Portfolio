"use client";
import TestimonialTemplate from "./TestimonialTemplate";

const TestimonialList = [
  {
    giver: "Jasper Jongen",
    status: "Upwork Client",
    platform: "Upwork",
    rating: 5,
    feedback:
      "I requested Deepak to tweak a project and he did a great job at it. Perfectly listened to the provided feedback, gave suggestions where to improve and fast delivery. Very pleasant to work with him. Eager to learn new things and a knowledgeable dev.",
    image: "/jasper_jongen.jpg",
  },
  {
    giver: "Callum Amor",
    status: "Upwork Client",
    platform: "Upwork",
    rating: 5,
    feedback:
      "What a pleasure to work with Deepak. Young dev who's clearly talented with a strong passion for your complete satisfaction and solving any issues that should arise. I'm looking forward to working with Deepak further — appreciate all your efforts!",
  },
  {
    giver: "Andrew Lee",
    status: "Business Owner",
    platform: "Direct",
    rating: 5,
    feedback:
      "Deepak built our company's product catalog website and absolutely nailed it. The design was clean, the layout made our range easy to browse, and he just got it — barely needed any back-and-forth. Fast, professional, and the end result speaks for itself.",
    image: "/andrew_lee.png",
  },
  {
    giver: "Helbert Hass",
    status: "Co-Founder · ALLWEONE",
    platform: "Direct",
    rating: 5,
    feedback:
      "Building ALLWEONE alongside Deepak has been outstanding. He brings real ownership to the product — not just writing code but thinking through the architecture, the user experience, and the business logic together. The kind of technical co-founder you want in your corner.",
    image: "/helbert_hass.png",
  },
];

export default function Testimonials() {
  const [a, b, c, d] = TestimonialList;
  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      {/* Row 1: wide | narrow */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <TestimonialTemplate {...a} featured />
        </div>
        <div>
          <TestimonialTemplate {...b} />
        </div>
      </div>
      {/* Row 2: narrow | wide */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <TestimonialTemplate {...c} />
        </div>
        <div className="md:col-span-2">
          <TestimonialTemplate {...d} featured />
        </div>
      </div>
    </div>
  );
}
