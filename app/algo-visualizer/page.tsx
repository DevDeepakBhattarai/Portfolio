import React, { ReactElement } from "react";
import AlgorithmVisualizer from "@/components/mdx/AlgorithmVisualizer.mdx";
import { Metadata } from "next";
interface Props {}
const description =
  "SortingVisualizer, a powerful and intuitive tool designed to help users understand and visualize various sorting algorithms. Whether you're a beginner learning about sorting algorithms or an experienced developer looking for a visual aid, this app is the perfect companion.";
const ogImageURL = "/algo-visualizer.png";
const title = "Algorithm Visualizer";
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    images: { url: ogImageURL, alt: `Preview Image of ${title}` },
    description: description,
    type: "article",
  },
  twitter: {
    title: title,
    images: { url: ogImageURL, alt: `Preview Image of ${title}` },
    description: description,
    creator: "@nerd_deepak",
  },
};
export default function page({}: Props): ReactElement {
  return (
    <div className="flex justify-center bg-black">
      <AlgorithmVisualizer></AlgorithmVisualizer>;
    </div>
  );
}
