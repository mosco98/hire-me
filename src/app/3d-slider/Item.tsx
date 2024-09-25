"use client";

import { motion } from "framer-motion";

interface CarouselItemProps {
  innerAngle: number;
  i: number;
}

const CarouselItem = ({ i, innerAngle }: CarouselItemProps) => {
  return (
    <motion.div
      className="rounded-lg overflow-hidden flex-shrink-0 absolute inset-[2px] left-1/2 top-1/2 border border-[#292929]/10"
      style={{
        backfaceVisibility: "hidden",
        transform: `
    translate(-50%, -50%)
    rotateY(${innerAngle * i}deg)
    translate3d(0, 0, calc(140px + 60px / sin(${innerAngle}) * -1))
  `
      }}
    >
      <img
        className="w-full h-full object-cover"
        src={`https://picsum.photos/300/300?random=${i}`}
        alt=""
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[10%] to-black/60 to-[100%]"></div>
    </motion.div>
  );
};

export default CarouselItem;
