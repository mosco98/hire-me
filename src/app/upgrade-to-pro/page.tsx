"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const UpgradeToProPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen grid place-items-center bg-black">
      <div className="relative">
        <div className="bg-[#0a0a0a] border border-[#ffffff24] bg-clip-border rounded-[8px] py-2 px-3 relative z-50 text-[#ededed] flex items-center justify-between gap-2.5">
          <p className="text-sm relative z-50">
            <button
              className="inline-flex items-center justify-center text-[#a1a1a1] relative z-50 pointer-events-auto group hover:text-inherit transition duration-100 ease-linear"
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-50">Upgrade to Pro</span>

              <span className="absolute w-full h-[0.25px] bg-[#a1a1a1] group-hover:bg-white top-full opacity-80 transition duration-100 ease-linear"></span>
            </button>
            {"  "}
            <span className="-z-10">for 2x more CPUs and faster builds</span>
          </p>

          <button className="w-5 aspect-square flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          </button>
        </div>

        <motion.span
          className="absolute top-full left-[30%]"
          initial={
            !isHovered
              ? { y: -28, x: -50, scale: 0.5 }
              : { y: -9.5, x: -5, rotate: 360, scale: 1 }
          }
          animate={
            !isHovered
              ? { y: -28, x: -50, scale: 0.5 }
              : { y: -9.5, x: -5, rotate: 360, scale: 1 }
          }
          transition={{ duration: 1, bounce: 0.3, type: "spring" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="#ededed"
            viewBox="0 0 256 256"
          >
            <path d="M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" />
          </svg>
        </motion.span>

        <motion.span
          className="absolute bottom-full -left-1.5"
          initial={
            !isHovered ? { y: 30, x: 60 } : { y: 10.5, x: 0, rotate: -360 }
          }
          animate={
            !isHovered ? { y: 30, x: 60 } : { y: 10.5, x: 0, rotate: -360 }
          }
          transition={{ duration: 1, bounce: 0.3, type: "spring" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="#ededed"
            viewBox="0 0 256 256"
          >
            <path d="M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" />
          </svg>
        </motion.span>
      </div>
    </div>
  );
};

export default UpgradeToProPage;
