import React, { ReactElement } from "react";
import SuperGuest from "@/components/my-components/Projects/SuperGuest.mdx";
import Images from "@/components/my-components/Projects/Images";
interface Props {}
import img1 from "../../asset/superguest/img1.png";
import img2 from "../../asset/superguest/img2.png";
import img3 from "../../asset/superguest/img3.png";
import img4 from "../../asset/superguest/img4.png";
import img5 from "../../asset/superguest/img5.png";
import img6 from "../../asset/superguest/img6.png";
import img7 from "../../asset/superguest/img7.png";
const ImageList = [img1, img2, img3, img4, img5, img6, img7];

export default function SuperGuestPage({}: Props): ReactElement {
  return (
    <div className="lg:flex bg-black text-white lg:flex-row-reverse lg:h-screen lg:overflow-y-hidden">
      <Images images={ImageList}></Images>
      <SuperGuest></SuperGuest>
    </div>
  );
}
