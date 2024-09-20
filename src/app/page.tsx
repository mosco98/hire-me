"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const HomePage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseTextX = useMotionValue(0);
  const mouseTextY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleMouseTextMove = ({
    clientX,
    clientY,
    currentTarget
  }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseTextX.set(clientX - left);
    mouseTextY.set(clientY - top);
  };

  return (
    <>
      <div className="font-medium fixed top-8 left-8">
        Move your mouse 🖱️
        <br />
        Use the light 🔦 <br />
        Find the magic words 😉😌
      </div>

      <div className="font-black" style={{ perspective: 1000 }}>
        <motion.div
          className="relative group w-full h-screen flex items-center justify-center overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          <motion.p
            className="big-text opacity-0 hover:opacity-100 uppercase text-center max-w-[35%] 2xl:leading-[16vh] md:leading-[15vh] text-transparent mx-auto relative"
            style={{
              backgroundImage: useMotionTemplate`radial-gradient(200px circle at ${mouseTextX}px ${mouseTextY}px, red ,transparent 60%)`
            }}
            onMouseMove={handleMouseTextMove}
          >
            Will you marry me? ❤️
          </motion.p>

          <motion.div
            className="absolute -inset-px glow pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 blur-lg"
            style={{
              background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px,rgba(36, 36, 36, 0.8),transparent 55%)`
            }}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
