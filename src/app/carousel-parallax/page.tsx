/* eslint-disable @next/next/no-img-element */
"use client";
import CarouselItem from "./Item";

const CarouselParallaxPage = () => {
  const items = Array.from({ length: 20 });

  return (
    <div className="h-screen grid place-items-center overflow-y-hidden">
      <div className="w-screen relative overflow-hidden">
        <ul className="max-w-full flex items-center gap-8 relative overflow-x-scroll h-screen carousel-parallax">
          {items.map((_item, i) => {
            return <CarouselItem key={`item-${i}`} i={i} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CarouselParallaxPage;
