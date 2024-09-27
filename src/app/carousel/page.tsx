"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform
} from "framer-motion";
import { useRef, useState } from "react";
import CarouselItem from "./Item";

const SliderCarouselPage = () => {
  const [currentIndicator, setCurrentIndicator] = useState(0);
  const items = Array.from({ length: 5 });

  const controls = useAnimation();

  const containerRef = useRef(null);

  const progressValue = useMotionValue(0);

  const handleScroll = (activeIndex: number, newProgress: number) => {
    progressValue.jump(newProgress);
    setCurrentIndicator(activeIndex);
  };

  const flex = useTransform(progressValue, [0, 0.5], [1, 3]);

  // useMotionValueEvent(flex, "change", (latest) => {
  //   animate(flex, 3, {
  //     ease: "easeInOut"
  //   });
  // });

  console.log("currentIndicator ===>", currentIndicator);

  return (
    <div className="h-screen grid place-items-center scroll-smooth">
      <div className="w-screen relative">
        <ul
          className="bg-red-600 flex gap-4 items-center overflow-auto max-w-full snap-x snap-mandatory scroll-smooth relative"
          style={{
            paddingInline: "calc(50vw - 30vw * 0.5)",
            scrollPaddingInline: "calc(50vw - 30vw * 0.5)"
          }}
          ref={containerRef}
        >
          {/* <div className="fixed w-[30vw] aspect-[3/4] bg-purple-500 z-10"></div> */}
          {items.map((_item, i) => (
            <CarouselItem
              key={i}
              i={i}
              containerRef={containerRef}
              handleScroll={handleScroll}
            />
          ))}
        </ul>

        <motion.div
          className="flex relative top-full mt-6 left-1/2 h-5 overflow-hidden aspect-[7/1]"
          style={{ x: "-50%" }}
        >
          {items.map((item, i) => (
            <motion.a
              key={`indicator-${i}`}
              href={`#item-${i}`}
              className={cn(
                "h-full bg-red-400 rounded-[100px] min-w-5 border-[4px] border-black"
              )}
              // initial={{flex: i === currentIndicator ? 3: 1}}
              animate={{ flex: i === currentIndicator ? 3 : 1 }}
              // transition={{}}
              // layout="preserve-aspect"
              transition={{ duration: 0.3, ease: "linear" }}
            ></motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SliderCarouselPage;
