/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { cn } from "@/lib/utils";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

interface CarouselItemProps {
  i: number;
  containerRef: any;
  handleScroll: (activeIndex: number, newProgress: number) => void;
}

const CarouselItem = ({ i, containerRef, handleScroll }: CarouselItemProps) => {
  const ref = useRef(null);

  const margin = `0px -65% 0px -64%`;

  const isInView = useInView(ref, {
    margin: margin as any,
    amount: 0,
    root: containerRef
  });

  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: ref,
    offset: ["start 65%", "end 65%"],
    axis: "x",
    layoutEffect: false
  });

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    if (isInView) {
      handleScroll(i, latest);
    }
  });

  return (
    <li
      className={cn(
        "w-[30vw] aspect-[3/4] p-4 flex-shrink-0 relative bg-emerald-100"
      )}
      id={`item-${i}`}
      ref={ref}
    >
      <div className="bg-green-500 w-full h-full flex items-center justify-center text-3xl font-medium">
        {i}
      </div>
    </li>
  );
};

export default CarouselItem;
