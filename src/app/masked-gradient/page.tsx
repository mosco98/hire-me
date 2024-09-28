"use client";

import { motion } from "framer-motion";

const MaskedGradientPage = () => {
  return (
    <div className="h-screen bg-[#1B1B1B] grid place-items-center">
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="w-[16vw] aspect-[2/2.5] relative z-50"
        style={{
          filter: "drop-shadow(0px 4px 4px rgba(0, 241, 111, 0.05))"
        }}
      >
        <div
          className="relative bg-[#3F3F3F] z-50 w-full h-full overflow-hidden px-[1.5vw] pb-[4.5vh] pt-[6vh] flex flex-col justify-between rounded-2xl"
          style={{
            clipPath:
              "polygon(30% 0%,80% 0%,100% 24%,100% 100%,67% 100%,30% 100%,0% 100%,0% 0%)"
          }}
        >
          <div
            className="w-[3.5vw] aspect-square rounded-full border border-[#272626]"
            style={{
              background: "linear-gradient(180deg, #212121 0%, #343434 100%)"
            }}
          ></div>

          <div className="space-y-4">
            <div
              className="w-full h-6 rounded-2xl border border-[#272626]"
              style={{
                background:
                  "linear-gradient(6deg, #212121 0.83%, #4C4C4C 98.67%)"
              }}
            ></div>

            <div
              className="w-full h-6 rounded-2xl border border-[#272626]"
              style={{
                background:
                  "linear-gradient(6deg, #212121 0.83%, #4C4C4C 98.67%)"
              }}
            ></div>
          </div>
        </div>

        <motion.div
          className="absolute -inset-[1px] -z-10 overflow-hidden rounded-2xl"
          style={{
            clipPath:
              "polygon(30% 0%,80% 0%,100% 24%,100% 100%,67% 100%,30% 100%,0% 100%,0% 0%)"
          }}
          initial={{
            backgroundImage:
              "conic-gradient(from 0deg, #494949 0%, #008B40 100%)"
          }}
          animate={{
            backgroundImage:
              "conic-gradient(from 360deg,#494949 0%, #008B40 100%)"
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear"
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default MaskedGradientPage;
