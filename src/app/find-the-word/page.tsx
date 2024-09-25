"use client";

import { randomizeWord, updateWordsArray } from "@/lib/utils";
import allWords from "an-array-of-english-words";
import {
  motion,
  useAnimation,
  useMotionTemplate,
  useMotionValue
} from "framer-motion";
import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";

const FindTheWordPage = () => {
  const [currentLevel, setCurrentLevel] = useState<1 | 2 | 3>(1);

  const [foundWords, setFoundWords] = useState<string[]>(
    new Array(15).fill("")
  );
  const [bonusWords, setBonusWords] = useState([]);

  const [currentWord, setCurrentWord] = useState<
    { word: string; shuffledWord: string } | undefined
  >(undefined);

  const levelWords = useRef<string[]>(
    allWords.filter((word) => word.length === 6)
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const wordRef = useRef<HTMLParagraphElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseTextX = useMotionValue(0);
  const mouseTextY = useMotionValue(0);

  const controls = useAnimation();

  useEffect(() => {
    const getWords = async () => {
      const result = await randomizeWord(levelWords.current);
      setCurrentWord(result);
    };

    getWords();
  }, []);

  console.log(currentWord?.word);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleMouseTextMove = ({
    clientX,
    clientY,
    currentTarget
  }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseTextX.set(clientX - left);
    mouseTextY.set(clientY - top);
  };

  const handleWordSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const value = inputRef.current.value;

    if (!value) return;

    if (wordRef.current) {
      if (value.toLowerCase() === currentWord?.word.toLowerCase()) {
        const newFoundWords = updateWordsArray(foundWords, currentWord.word);

        setFoundWords(newFoundWords);

        const currentLevelWords = levelWords.current;
        const newWords = currentLevelWords.filter(
          (w) => w !== currentWord.word
        );

        levelWords.current = newWords;

        const result = await randomizeWord(newWords);

        wordRef.current.innerText = currentWord.word;

        await controls.start({
          color: "rgba(0, 255, 0, 1)",
          opacity: 1,
          pointerEvents: "none"
        });

        await controls.start({
          color: "rgba(0, 255, 0, 0)",
          opacity: 0,
          pointerEvents: "auto",
          transition: {
            delay: 1
          }
        });

        controls.stop();

        setCurrentWord(result);
        inputRef.current.value = "";
      } else {
        // Do vibrate animation here
      }
    }
  };

  return (
    <>
      <div className="font-medium fixed top-8 left-8 leading-7">
        Move your mouse 🖱️
        <br />
        Use the light 🔦 <br />
        Find the magic words 😉😌
      </div>

      <div className="h-screen overflow-hidden flex">
        {/* <CanvasText /> */}
        <div
          className="h-full relative flex-1 group grid place-content-center"
          onMouseMove={handleMouseMove}
        >
          <div>
            <motion.p
              className="opacity-0 hover:opacity-100 uppercase text-transparent select-none text-[10rem] relative font-black hidden-text"
              initial={{ opacity: 0 }}
              style={{
                backgroundImage: useMotionTemplate`radial-gradient(10vh circle at ${mouseTextX}px ${mouseTextY}px, gold,transparent 55%)`,
                backgroundClip: "text"
              }}
              onMouseMove={handleMouseTextMove}
              animate={controls}
              whileHover={{ opacity: 1 }}
              ref={wordRef}
            >
              {currentWord?.shuffledWord}
            </motion.p>
          </div>

          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-100 ease-in-out pointer-events-none blur-md"
            style={{
              background: useMotionTemplate`radial-gradient(10vh circle at ${mouseX}px ${mouseY}px ,rgba(36, 36, 36, 0.8), transparent 55%)`
            }}
          ></motion.div>
        </div>

        <div className="h-screen w-[17rem] flex-shrink-0 border-l border-[#292929] p-4 flex flex-col gap-10 z-50">
          <div>
            <div>Timer</div>

            <div className="mt-6">
              <form onSubmit={handleWordSubmit}>
                <p className="text-xs mb-2">Enter word</p>
                <input
                  className="w-full bg-transparent border border-[#292929] h-10 rounded-md outline-purple-800 p-3 uppercase text-sm"
                  ref={inputRef}
                />

                <button className="w-full bg-purple-800 hover:bg-purple-900 transition-all duration-150 ease-in-out text-[13px] font-medium h-7 mt-1 rounded-md">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-sm font-medium">Found Words</p>

            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-1.5">
                {foundWords.map((word, i) => (
                  <motion.li
                    key={`${word}-${i}`}
                    className="flex items-center gap-1 uppercase text-sm"
                  >
                    <span className="w-6">{i + 1}.</span>

                    <motion.p
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      {word}
                    </motion.p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-sm">Level 1</div>
        </div>
      </div>
    </>
  );
};

export default FindTheWordPage;
