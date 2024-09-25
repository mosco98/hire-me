"use client";

import { motion } from "framer-motion";

const MarqueePage = () => {
  const array = Array.from({ length: 6 });

  return (
    <div className="h-screen grid place-content-center">
      <div className="w-[1000px] h-[300px] bg-red-500 py-4 flex relative">
        {array.map((item, i) => (
          <motion.div
            key={i}
            className="h-full aspect-square bg-blue-500 flex items-center justify-center flex-shrink-0 text-3xl font-medium"
            initial={{ x: `calc((${array.length} - ${i}) * 100%)` }}
            animate={{ x: `calc((${i} + 1) * -100%)` }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              delay: (10 / array.length) * i - array.length * 0.5
            }}
            // style={{ x: `calc((${array.length} - ${i}) * 100%)` }}
          >
            {i + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarqueePage;
