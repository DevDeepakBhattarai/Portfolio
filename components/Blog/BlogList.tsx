import { doneLoading } from "@/state/homeSlice";
import { AppDispatch } from "@/state/store";
import React, { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar";
import Blogs from "../../data/Blog.json";
import CreateNewBtn from "./CreateNewBtn";
interface Props {}

export default function Blog({}: Props): ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(doneLoading());
  }, []);

  return (
    <>
      <div className="h-screen">
        <Navbar text="white"></Navbar>
        <div className="fixed bottom-8 right-8">
          <CreateNewBtn></CreateNewBtn>
        </div>
        <div className="flex justify-between px-20 pt-4">
          <h1 className="text-5xl text-white font-bold">Articles</h1>
        </div>
        <div className="px-24 py-10">
          {Blogs.map((blog) => {
            return (
              <div
                key={blog.id}
                className="h-40 hover:bg-gray-500 items-center justify-center rounded-lg pl-4 flex gap-4 max-w-screen-md"
              >
                <div>
                  <div className="h-14 w-14 rounded-full overflow-hidden">
                    <img src={blog.profilePicture} alt="" />
                  </div>
                  <span className="text-xs">
                    {blog.uploadedBy.split(" ")[0]}{" "}
                    {blog.uploadedBy.split(" ")[1].substring(0, 1)}.
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl text-white font-semibold">
                    {blog.title}
                  </h2>
                  <span>{blog.description.substring(0, 190)}...</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-screen bg-white"></div>
    </>
  );
}
