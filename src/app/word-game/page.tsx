// @typescript-eslint/no-unused-vars
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { v4 } from "uuid";

interface LetterType {
  id: string;
  letter: string;
  x?: number;
  y?: number;
}

const DEFAULT = [
  {
    id: v4(),
    letter: "A"
  },
  {
    id: v4(),
    letter: "N"
  },
  {
    id: v4(),
    letter: "S"
  },
  {
    id: v4(),
    letter: "W"
  },
  {
    id: v4(),
    letter: "E"
  },
  {
    id: v4(),
    letter: "R"
  }
];

const WordGamePage = () => {
  const [word, _setWord] = useState<LetterType[]>(DEFAULT);
  const [answer, _setAnswer] = useState<LetterType[]>([]);
  const [nextTile, _setNextTile] = useState(0);

  const nextTileRef = useRef<HTMLDivElement>(null);

  // const controlsArray = word.map((w) => {
  //   return {
  //     id: w.id,
  //     controls: useAnimation()
  //   };
  // });

  // const handleGetNextTileBounds = async (
  //   { currentTarget }: MouseEvent,
  //   letter: LetterType
  // ) => {
  //   const animation = controlsArray.find((c) => c.id === letter.id);

  //   if (!animation) return;

  //   if (letter.x && letter.y) {
  //     await animation.controls.start({
  //       x: 0,
  //       y: 0,
  //       transition: {
  //         type: "spring",
  //         bounce: 0.15,
  //         duration: 0.4
  //       }
  //     });

  //     delete letter.x;

  //     const newAnswer = answer.filter((l) => l.id !== letter.id);
  //     setAnswer(newAnswer);
  //     setWord((prev) => [...prev, letter]);

  //     return;
  //   }

  //   if (nextTileRef.current) {
  //     animation.controls.stop();

  //     const { left: clientLeft, bottom: clientBottom } =
  //       currentTarget.getBoundingClientRect();

  //     const { left, bottom } = nextTileRef.current.getBoundingClientRect();

  //     const x = left - clientLeft;
  //     const y = bottom - clientBottom;

  //     await animation.controls.start({
  //       x,
  //       y,
  //       transition: {
  //         type: "spring",
  //         bounce: 0.15,
  //         duration: 0.4
  //       }
  //     });

  //     letter.x = x;
  //     letter.y = y;

  //     setAnswer((prev) => [...prev, letter]);
  //     setNextTile((prev) => prev + 1);
  //   }
  // };

  return (
    <div className="h-screen grid place-content-center">
      <div className="">
        <div className="mb-4 2xl:mb-6 text-center text:xl md:text-2xl 2xl:text-3xl h-5 flex items-center justify-center gap-1">
          {answer.map((a) => (
            <motion.span
              layout
              key={a.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {a.letter}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {word.map((_letter, i) => (
            <div
              key={i}
              id={i.toString()}
              ref={nextTile === i ? nextTileRef : null}
              className="w-12 md:w-16 2xl:w-20 aspect-square border-[0.5px] border-[#242424] relative pointer-events-none"
            ></div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-4">
          {word.map((w, i) => (
            <div
              key={i}
              className="w-12 md:w-16 2xl:w-20 aspect-square border-[0.5px] border-[#242424] relative"
            >
              <motion.div
                className="absolute w-12 md:w-16 2xl:w-20 aspect-square bg-[#f5f5f5] text-black text-lg md:text-xl 2xl:text-2xl font-semibold flex items-center justify-center cursor-pointer"
                // animate={controlsArray.find((c) => c.id === w.id)?.controls}
                // onClick={(e) => handleGetNextTileBounds(e, w)}
              >
                {w.letter}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordGamePage;
