"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
  data: { id: string; adult: boolean; data?: any }[];
}

const IMAGE_URL = "https://image.tmdb.org/t/p/original";

const Carousel = ({ data: movies }: CarouselProps) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="relative">
      <div className="grid 2xl:grid-cols-10 md:grid-cols-7 grid-flow-row-dense">
        {movies.map((movie) => (
          <motion.div
            className={cn(
              "aspect-[2/3] relative flex-shrink-0 border-[4px] border-white overflow-hidden group cursor-pointer",
              selected === movie.id && "col-span-3 row-span-3 border-purple-200"
            )}
            key={movie.id}
            onClick={() => setSelected(movie.id)}
            layout="position"
            layoutId={movie.id}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            <Image
              src={IMAGE_URL + movie.data.poster_path}
              alt={movie.data.original_title}
              fill
              className="object-cover group-hover:scale-110 will-change-transform transition-transform duration-200 ease-in-out"
            />
          </motion.div>
        ))}
      </div>

      <div className="sticky bottom-0 left-0">Hello</div>
    </div>
  );
};

export default Carousel;
