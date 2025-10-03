import React, { ReactElement } from "react";
import TestimonialTemplate from "./TestimonialTemplate";

interface Props {}
const TestimonialList = [
  {
    giver: "Jasper Jongen",
    status: "Upwork Client",
    feedback:
      "I requested Deepak to tweak a project and he did a great job at it. Perfectly listened to the provided feedback, gave suggestions where to improve and fast delivery. Very pleasant to work with him. Eager to learn new things and knowledgeable dev",
    image: "/jasper_jongen.jpg",
  },
  {
    giver: "Callum Amor",
    status: "Upwork Client",
    feedback:
      "What a pleasure to work with Deepak.. Young dev who's clearly talented with a strong passion for your complete satisfaction and solving any issues that should arise. I'm looking forward to working with Deepak further and appreciate all your efforts. Thank you!",
  },
];
export default function Testimonials({}: Props): ReactElement {
  return (
    <div className="flex flex-col  gap-4 p-4 max-w-5xl">
      {TestimonialList.slice(0, 2).map((testimonial, index) => {
        return (
          <TestimonialTemplate
            displacement={index * 8}
            key={testimonial.giver}
            status={testimonial.status}
            giver={testimonial.giver}
            feedback={testimonial.feedback}
            image={testimonial.image}
          />
        );
      })}
    </div>
  );
}
