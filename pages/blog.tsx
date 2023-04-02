import React, { ReactElement } from "react";
import BlogList from "../components/Blog/BlogList";

interface Props {}

export default function Page({}: Props): ReactElement {
  return (
    <div>
      <BlogList></BlogList>
    </div>
  );
}
