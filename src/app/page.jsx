"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "./components/Button";

const useTypingEffect = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setDisplayedText("");
    setIsDone(false);
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      setDisplayedText(text.slice(0, indexRef.current + 1));
      indexRef.current += 1;

      if (indexRef.current >= text.length) {
        clearInterval(intervalRef.current);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [text, speed]);

  return { displayedText, isDone };
};

function Page() {
  const fullText = "Hi, I'm Mika Geshan";
  const { displayedText, isDone } = useTypingEffect(fullText, 70);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white flex items-center justify-center px-4 md:px-6 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.4,
            },
          },
        }}
        className="text-center max-w-3xl w-full"
      >
        {/* Typing Text */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-[4px_4px_0_black] leading-tight min-h-[4rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
        </motion.h1>

        {/* Description */}
        {isDone && (
          <>
            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Driven by creativity and a Software Engineering background, I
              specialize in building engaging front-end experiences.
            </motion.p>

            {/* Button */}
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button />
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default Page;
