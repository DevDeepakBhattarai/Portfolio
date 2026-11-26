import PDFReader from "@/components/mdx/PDFReader.mdx";
import Wrapper from "@/components/page-wrapper";
import { Metadata } from "next";
const description =
  "Web app built with Flask designed for asking questions from your PDF. It utilizes ChatGPT directly without the API, making it completely free of cost.";
const ogImageURL = "/pdf-reader-showcase.png";
const title = "PDF Reader";
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

export default function page() {
  return (
    <Wrapper>
      <div className="h-full w-full bg-black flex items-center justify-center">
        <PDFReader></PDFReader>
      </div>
    </Wrapper>
  );
}
