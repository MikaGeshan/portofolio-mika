"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import travello from "../Images/travello.png";
import loml from "../Images/loml.png";
import datafaker from "../Images/datafaker.png";
import ducom from "../Images/ducom.png";
import mbanking from "../Images/mbanking.png";
import ProjectCard from "../components/ProjectCard";

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
  const { displayedText, isDone } = useTypingEffect("My Projects", 100);

  const projects = [
    {
      title: "Travello Kamar",
      description:
        "This project was created for my LSP certification exam, where I was tasked with building a simple hotel reservation website with client and admin features. I used React for the front-end to create a responsive UI, and Laravel for the back-end to handle room management, reservations, and authentication.",
      image: travello,
      link: "https://github.com/MikaGeshan/travello-kamar",
    },
    {
      title: "loml",
      description:
        "This is just a fun website made for your partner. I got the idea from TikTok and completely redesigned it with my own concept.",
      image: loml,
      link: "https://github.com/MikaGeshan/loml",
    },
    {
      title: "Datafaker",
      description:
        "I created this tool to make it easier for me to test authentication by generating fake data.",
      image: datafaker,
      link: "https://github.com/MikaGeshan/Simple-Data-Faker",
    },
    {
      title: "Ducom",
      description:
        "I set up, developed, and implemented the UI/UX design into a functional application using my chosen front-end framework, React Native. This application was created as part of my internship program (PKL), a requirement for vocational high school students to advance to the next grade level.",
      image: ducom,
      link: "https://github.com/MikaGeshan/DUCOM-APP",
    },
    {
      title: "Dugam Cash",
      description:
        "I created this application's prototype in Figma, inspired by the concepts of the MyBCA and m-BCA apps, as part of a school assignment. I hope that one day I can bring this app to life.",
      image: mbanking,
      link: "https://www.figma.com/proto/S193f5HJsozOMWf1Ba2QCt/mbanking-ui?node-id=7-123",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col items-center px-4 py-10 gap-12">
      <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-wide drop-shadow-[4px_4px_0_black] mb-6 text-center mt-24">
        {displayedText}
      </h1>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
        {projects.map((project, index) => {
          const ref = useRef(null);
          const inView = useInView(ref, {
            once: true,
            margin: "0px 0px -100px 0px",
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: -60 }}
              animate={inView && isDone ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
