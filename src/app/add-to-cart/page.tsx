"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import useMeasure from "react-use-measure";

const AddToCartPage = () => {
  const [ref] = useMeasure();
  const cartRef = useRef<HTMLButtonElement>(null);

  const controls = useAnimation();

  const handleCardClick = () => {
    if (cartRef.current) {
      const { right, top, width } = cartRef.current.getBoundingClientRect();
      const clientWidth = window.innerWidth;
      const clientHeight = window.innerHeight;

      const animateRight = clientWidth - right;
      const animateTop = top;

      controls.start({
        right: animateRight,
        top: animateTop,
        offsetDistance: "100%",
        transition: {
          duration: 10,
          ease: "easeInOut",
          velocity: 2,
          type: "spring",
          stiffness: 50,
          damping: 20
        }
      });

      console.log({ right, top, width, clientWidth, clientHeight });
    }
  };

  return (
    <motion.div className="h-screen flex flex-col container mx-auto">
      <div className="flex-shrink-0 py-10 flex items-center justify-end">
        <button ref={cartRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm36.84-.8-5.6,56A8,8,0,0,0,174.4,184a7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.16-8.76ZM239.93,89.06,224.86,202.12A16.06,16.06,0,0,1,209,216H47a16.06,16.06,0,0,1-15.86-13.88L16.07,89.06A8,8,0,0,1,24,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H232a8,8,0,0,1,7.93,9.06ZM89.63,80h76.74L128,36.15ZM222.86,96H33.14L47,200H209Z" />
          </svg>
        </button>
      </div>

      <div className="flex-1 py-10 flex items-end">
        <div
          className="w-[200px] h-[300px] bg-red-600 rounded-2xl cursor-pointer relative flex items-center justify-center"
          onClick={handleCardClick}
        >
          Hello
          <motion.div
            initial={{ offsetDistance: "0%" }}
            animate={controls}
            className="w-4 aspect-square bg-blue-500 rounded-full fixed"
            style={{
              offsetPath: `path('M 0 0 Q 250 -500 -4 16')`,
              offsetRotate: "0deg"
              // offsetAnchor: "left top"
            }}
            ref={ref}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddToCartPage;
