"use client";

import { motion } from "framer-motion";

const BannerBuildingPage = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex items-center">
        <motion.div
          className="p-2"
          style={{
            offsetPath:
              "path('M-334 507C-21 390 0 281 20 225 37 100 23 49 0 0')",
            offsetRotate: "0deg",
            offsetAnchor: "left top"
          }}
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Jeffery & Sons.
        </motion.div>

        <div className="p-2">Design Engineering workshop. Oct. 2024</div>

        <div className="p-2">
          <button>Register here</button>
        </div>
      </div>
    </div>
  );
};

export default BannerBuildingPage;
