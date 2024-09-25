"use client";

import { motion } from "framer-motion";

const GlowingBorderPage = () => {
  return (
    <div className="h-screen grid place-content-center">
      <button className="h-10 bg-black rounded-xl relative px-6 text-sm">
        <span>Continue</span>

        <motion.span
          initial={{
            backgroundImage: "conic-gradient(from 0deg, transparent 90%, white)"
          }}
          animate={{
            backgroundImage:
              "conic-gradient(from 360deg, transparent 90%, white)"
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear"
          }}
          className="absolute -inset-[1px] -z-10 rounded-xl px-6"
        ></motion.span>
      </button>
    </div>
  );
};

export default GlowingBorderPage;
