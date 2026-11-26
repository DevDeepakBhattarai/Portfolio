import React, { ReactElement } from "react";
import FacebookClone from "@/components/mdx/FacebookClone.mdx";

import Images from "@/components/my-components/Projects/Images";
import img1 from "../../asset/FacebookClone/img1.jpg";
import img2 from "../../asset/FacebookClone/img2.jpg";
import img3 from "../../asset/FacebookClone/img3.jpg";
import img4 from "../../asset/FacebookClone/img4.jpg";
import img5 from "../../asset/FacebookClone/img5.jpg";
import img6 from "../../asset/FacebookClone/img6.jpg";
import img7 from "../../asset/FacebookClone/img7.jpg";
import img8 from "../../asset/FacebookClone/img8.jpg";
import img9 from "../../asset/FacebookClone/img9.jpg";
import img10 from "../../asset/FacebookClone/img10.jpg";
import img11 from "../../asset/FacebookClone/img11.jpg";
import img12 from "../../asset/FacebookClone/img12.jpg";
import img13 from "../../asset/FacebookClone/img13.jpg";
import img14 from "../../asset/FacebookClone/img14.jpg";

import Wrapper from "@/components/page-wrapper";
import { Metadata } from "next";
const description =
  "Facebook Clone is a web-based social networking platform that aims to replicate most of the features available on the original Facebook platform. Users can create accounts, connect with friends, post updates, share media, and engage in various forms of communication";
const ogImageURL = "/facebook-clone.jpg";
const title = "Facebook Clone";
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
interface Props {}
const ImageList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

export default function FBClone({}: Props): ReactElement {
  return (
    <Wrapper>
      <div className="lg:flex bg-black text-white lg:flex-row-reverse lg:h-screen lg:overflow-y-clip">
        <Images images={ImageList} />
        <FacebookClone></FacebookClone>
      </div>
    </Wrapper>
  );
}
