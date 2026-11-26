import React, { ReactElement } from "react";
import SuperGuest from "@/components/mdx/SuperGuest.mdx";
import Images from "@/components/my-components/Projects/Images";
interface Props {}
import img1 from "../../asset/superguest/img1.png";
import img2 from "../../asset/superguest/img2.png";
import img3 from "../../asset/superguest/img3.png";
import img4 from "../../asset/superguest/img4.png";
import img5 from "../../asset/superguest/img5.png";
import img6 from "../../asset/superguest/img6.png";
import img7 from "../../asset/superguest/img7.png";
import Wrapper from "@/components/page-wrapper";
import { Metadata } from "next";
const ImageList = [img1, img2, img3, img4, img5, img6, img7];
const description =
  "SuperGuest, an innovative website that utilizes the GPT-3.5 API to deliver an extraordinary hotel search experience. With advanced natural language processing, SuperGuest effortlessly finds the best hotels in any specified location. The website generates stunning outputs, showcasing high-quality images of the recommended hotels.";
const ogImageURL = "/superguest.png";
const title = "Super Guest";
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: { url: ogImageURL, alt: `Preview Image of ${title}` },
    type: "article",
  },
  twitter: {
    images: { url: ogImageURL, alt: `Preview Image of ${title}` },
    title: title,
    description: description,
    creator: "@nerd_deepak",
  },
};
export default function SuperGuestPage({}: Props): ReactElement {
  return (
    <Wrapper>
      <div className="lg:flex bg-black text-white lg:flex-row-reverse lg:h-screen lg:overflow-y-hidden">
        <Images images={ImageList}></Images>
        <SuperGuest></SuperGuest>
      </div>
    </Wrapper>
  );
}
