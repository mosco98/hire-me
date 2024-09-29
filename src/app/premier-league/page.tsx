"use client";

import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect } from "react";

const PremierLeaguePage = () => {
  const controls = useAnimation();

  const handleShake = useCallback(async () => {
    await controls.start({
      scale: 1,
      x: [0, -3.5, 3.5, -3.5, 3.5, -3.5, 3.5, -3.5, 1.5, -1, 1, 0],
      y: [0, -3.5, 3.5, -3.5, 3.5, -3.5, 3.5, -3.5, 1.5, -1, 1, 0],
      transition: { delay: 0.6 }
    });

    await controls.start({
      rotateY: -20,
      transition: { duration: 2, ease: "easeInOut" }
    });

    await controls.start({
      rotateY: 4,
      transition: { duration: 2, ease: "easeInOut" }
    });
  }, [controls]);

  useEffect(() => {
    handleShake();
  }, [handleShake]);

  return (
    <div
      className="h-screen grid place-content-center"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-[15vw] aspect-[2/2.5] bg-[silver] rounded-t-3xl rounded-br-3xl relative overflow-hidden"
        animate={controls}
        style={{ scale: 1.3 }}
      >
        <motion.div
          className="absolute inset-0 z-50"
          style={{
            // rotate: 10,
            backgroundImage: `linear-gradient(to right, 
    hsl(  0, 100%, 50%) 0%,
    hsl( 60, 100%, 50%) 16.67%,
    hsl(120, 100%, 50%) 33.33%,
    hsl(180, 100%, 50%) 50%, 
    hsl(240, 100%, 50%) 66.67%,
    hsl(320, 100%, 50%) 83.33%, 
    hsl(360, 100%, 50%) 100%
  );`,
            mixBlendMode: "color-dodge"
            // filter: `blur(4px)`
          }}
        ></motion.div>

        {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-[8px]"></div> */}
      </motion.div>
    </div>
  );
};

export default PremierLeaguePage;
