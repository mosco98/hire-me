"use client";

import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, useCallback, useEffect, useRef } from "react";

const GridHoverPage = () => {
  const mouseLeft = useMotionValue(0);
  const mouseTop = useMotionValue(0);

  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);

  const controls = useAnimation();
  const gradientControls = useAnimation();

  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = ({
    pageX,
    pageY,
    clientX,
    clientY
  }: MouseEvent) => {
    if (!cardRef.current) return null;

    const { offsetLeft, offsetTop } = cardRef.current;

    const { x, y, width, height } = cardRef.current.getBoundingClientRect();

    const posX = clientX - x;
    const posY = clientY - y;

    const ratioX = posX / width;
    const ratioY = posY / height;

    rotateXValue.jump((ratioY - 0.5) * 40);
    rotateYValue.jump((ratioX - 0.5) * -30);

    mouseLeft.jump(pageX - offsetLeft);
    mouseTop.jump(pageY - offsetTop);
  };

  const top = useSpring(mouseTop, { bounce: 0.15 });
  const left = useSpring(mouseLeft, { bounce: 0.15 });
  const rotateX = useSpring(rotateXValue, { stiffness: 100, bounce: 100 });
  const rotateY = useSpring(rotateYValue, { stiffness: 100, bounce: 100 });

  const handleShake = useCallback(async () => {
    await controls.start({
      scale: 1,
      x: [0, -3.5, 3.5, -3.5, 3.5, -3.5, 3.5, -3.5, 1.5, -1, 1, 0],
      y: [0, -3.5, 3.5, -3.5, 3.5, -3.5, 3.5, -3.5, 1.5, -1, 1, 0],
      transition: { delay: 0.6 }
    });

    const start = async () => {
      await Promise.all([
        controls.start({
          rotateY: -20,
          transition: { duration: 1.5, ease: "easeInOut" }
        }),

        gradientControls.start({
          left: 200,
          transition: { duration: 1.5, ease: "easeInOut" }
        })
      ]);
    };

    const end = async () => {
      await Promise.all([
        controls.start({
          rotateY: 4,
          transition: { duration: 4, type: "spring", bounce: 0.15 }
        }),

        gradientControls.start({
          left: 0,
          transition: { duration: 1.5, ease: "easeInOut" }
        })
      ]);
    };

    await start();
    await end();
  }, [controls]);

  useEffect(() => {
    handleShake();
  }, [handleShake]);

  return (
    <div
      className="h-screen grid place-items-center"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-[30vw] aspect-[2/2.5] bg-[#242424] relative group rounded-2xl overflow-hidden"
        onPointerMove={handlePointerMove}
        ref={cardRef}
        style={{ rotateX, rotateY }}
        onMouseLeave={() => {
          rotateXValue.jump(0);
          rotateYValue.jump(4);
        }}
        initial={{ scale: 1.3, rotateY: 0 }}
        animate={controls}
      >
        <motion.div
          className="absolute w-[200%] h-[200%] opacity-50 group-hover:opacity-50 pointer-events-none blur-2xl mix-blend-screen"
          style={{
            background: `conic-gradient(red, blue, yellow, green, orange, pink, orange, red)`,
            top,
            left,
            x: "-50%",
            y: "-50%"
          }}
          animate={gradientControls}
        ></motion.div>

        <div className="absolute inset-[2px] bg-[#242424]/50 rounded-2xl backdrop-blur-2xl"></div>

        <div className="absolute inset-[2px] bg-[#242424]/50 group-hover:bg-[#242424]/50 rounded-2xl flex items-center justify-center text-3xl font-black">
          {/* <p className="mix-blend-overlay text-white">Hello there!</p> */}
        </div>
      </motion.div>
    </div>
  );
};

export default GridHoverPage;
