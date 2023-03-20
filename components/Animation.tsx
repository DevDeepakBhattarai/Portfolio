import { useDispatch } from "react-redux";
import Spline from "@splinetool/react-spline";
import { doneLoading } from "../src/state/homeSlice";
import { AppDispatch } from "../src/state/store";

export interface IAnimationProps {}

export default function Animation({}: IAnimationProps) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className="flex-1 max-h-[60vh] md:h-full">
        <Spline
          onLoad={(e) => {
            console.log(e);
            // @ts-ignore
            if (!e.disposed && doneLoading && dispatch) {
              dispatch(doneLoading());
            }
          }}
          scene="https://prod.spline.design/PdWYTq5AvShAZYRj/scene.splinecode"
        />
      </div>
    </>
  );
}
