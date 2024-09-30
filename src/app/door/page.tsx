"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const DoorPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center start"]
  });

  const rotateYValue = useTransform(scrollYProgress, [0.2, 0.7], [-110, 0]);

  const rotateY = useSpring(rotateYValue, {
    duration: 2.5,
    bounce: 1,
    velocity: 10
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationEnd={() => setIsMounted(true)}
    >
      <section
        className="h-screen md:grid place-items-center py-10 md:py-16 px-6 md:gap-16"
        style={{ perspective: 1000 }}
      >
        <motion.div className="max-w-4xl w-full" style={{ translateZ: -200 }}>
          <h1 className="text-[2rem] md:text-7xl font-bold text-center left-10 leading-[44px] md:leading-[76px] text-white">
            Welcome to a new dispensation.
          </h1>

          <p className="text-center text-base md:text-xl md:max-w-xl mx-auto mt-5 font-normal text-[#c5c3c3] md:leading-8">
            This coming month promises to be a good one with unimaginable
            opportunities. Are you ready?
          </p>

          <div className="flex items-center justify-center gap-4 mt-9 font-medium">
            <button className="h-12 px-4 md:px-6 bg-[#A1662F] hover:bg-[#975e29] text-white rounded-md transition-all duration-100 ease-linear whitespace-nowrap">
              Get started
            </button>
            <button className="h-12 px-4 md:px-6 text-white hover:text-[#A1662F] transition-all duration-100 ease-linear text-lg inline-flex items-center justify-center gap-2 group whitespace-nowrap">
              Explore opportunities{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 group-hover:translate-x-[2px] transition-all duration-100 ease-linear"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="w-[40vw] md:w-[14vw] aspect-[2/3] relative border-t-2 border-r-2 border-white rounded-tr-sm mx-auto mt-20 md:mt-0"
          style={{
            perspective: 1000
          }}
          // animate={{
          //   x: [0, -1.5, 1.5, -1.5, 1.5, -1.5, 1.5, -1.5, 0.5, -0.25, 0.25, 0],
          //   y: [0, -1.5, 1.5, -1.5, 1.5, -1.5, 1.5, -1.5, 0.5, -0.25, 0.25, 0]
          // }}
        >
          <motion.div
            className="inset-0 bg-[#A1662F] absolute flex items-center justify-end p-4 z-50 border-t-[2px] border-r-[2px] border-b-[2px] border-white rounded-r-sm"
            style={{
              transformOrigin: "left",
              rotateY: !isMounted ? rotateY : -110
            }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -110 }}
            transition={{
              duration: 10,
              type: "spring",
              delay: 1,
              bounce: 0.6,
              velocity: 10
            }}
          >
            <div className="w-3 aspect-square rounded-full bg-white shadow-lg shadow-[#A1662F]"></div>
          </motion.div>

          <motion.div
            className="absolute inset-1 room"
            style={{ translateZ: -1200, y: -80 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 2.2 }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center">
              <div className="w-[2px] h-20 bg-black z-20"></div>
              <div className="bulb w-5 aspect-square rounded-full relative z-50"></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(rgba(68, 68, 68, 0.3), #0a0a0a)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 2.25 }}
          ></motion.div>

          <motion.div
            className="absolute -inset-10 -bottom-4 blur-2xl -z-20 mix-blend-exclusion"
            style={{
              background: "radial-gradient(rgba(68, 68, 68, 0.27), #0a0a0a)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 2.25 }}
          ></motion.div>
        </motion.div>
      </section>

      <section className="h-[50vh] md:h-screen text-center pt-20 md:pt-40 text-[8vw] font-black">
        <h1
          style={{
            backgroundImage: "radial-gradient(white, transparent)"
          }}
          className="text-transparent bg-clip-text"
        >
          Rooting for you!
        </h1>
      </section>
    </motion.div>
  );
};

export default DoorPage;
