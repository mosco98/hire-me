/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import CarouselItem from "./Item";

const ThreeDSliderPage = () => {
  const items = Array.from({ length: 20 });

  const innerAngle = 360 / items.length;

  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    container: scrollRef,
    offset: ["start", "end"],
    axis: "x"
  });

  const rotate = useTransform(scrollXProgress, [0, 1], [0, -360]);

  const rotateY = useSpring(rotate, { bounce: 0.1 });

  return (
    <div className="h-screen">
      <div
        className="w-full h-full absolute pointer-events-none inset-0 grid place-items-center carousel-container"
        style={{ transformStyle: "preserve-3d", perspective: 400 }}
      >
        <motion.div
          className="flex gap-2 absolute w-[140px] h-[140px] left-1/2 top-1/2"
          style={{
            x: "-50%",
            y: "-50%",
            transformStyle: "preserve-3d",
            rotateY,
            z: 10
            // rotateX: -20
          }}
          transition={{ ease: "linear", duration: 5 }}
        >
          {items.map((item, i) => {
            return <CarouselItem key={i} i={i} innerAngle={innerAngle} />;
          })}
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-auto flex-nowrap whitespace-nowrap min-w-screen h-screen relative"
      >
        {items.map((item, i) => (
          <div
            key={`controller-${i}`}
            className="w-[240px] h-[240px] flex-shrink-0 snap-x snap-mandatory"
            style={{ paddingInline: "5vw" }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDSliderPage;
