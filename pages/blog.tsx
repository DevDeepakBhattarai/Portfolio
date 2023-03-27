import React, { ReactElement } from "react";
import Blog from "../components/Blog/Blog";

interface Props {}

export default function Page({}: Props): ReactElement {
  return (
    <div>
      <Blog></Blog>
    </div>
  );
}
