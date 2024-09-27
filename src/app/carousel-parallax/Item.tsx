"use client";

import React from "react";

interface CarouselItemProps {
  i: number;
}

const CarouselItem = ({ i }: CarouselItemProps) => {
  return (
    <li
      className={`aspect-[3/4] flex-shrink-0 relative rounded-lg bg-no-repeat bg-center bg-cover carousel-parallax-item snap-center`}
      style={
        {
          "--item": i,
          backgroundImage: `url(https://picsum.photos/800/800?random=${i})`
        } as React.CSSProperties
      }
      data-item={i}
    ></li>
  );
};

export default CarouselItem;
