"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import portfolio from "../Images/portfolio.jpeg";
import js from "../Images/jslogo.png";
import html from "../Images/html5.png";
import react from "../Images/react.png";
import tailwind from "../Images/tailwind.png";
import next from "../Images/nextjs.png";
import laravel from "../Images/laravel.png";
import express from "../Images/express.png";
import php from "../Images/php.png";
import restapi from "../Images/restapi.png";
import phpmyadmin from "../Images/phpmyadmin.png";
import mongodb from "../Images/mongodb.png";
import git from "../Images/git.png";
import github from "../Images/github.png";
import vscode from "../Images/vscode.png";
import Carousel from "../components/Carousel";
import EducationCard from "../components/EducationCard";
import { motion } from "framer-motion";

function Page() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true);
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const frontendImages = [
    { src: js, alt: "JavaScript" },
    { src: html, alt: "HTML5" },
    { src: react, alt: "React" },
    { src: next, alt: "NextJS" },
    { src: tailwind, alt: "Tailwind CSS" },
  ];

  const backendImages = [
    { src: laravel, alt: "Laravel" },
    { src: php, alt: "PHP" },
    { src: express, alt: "Express" },
    { src: restapi, alt: "REST API" },
  ];

  const dbandtoolsImages = [
    { src: mongodb, alt: "MongoDB" },
    { src: phpmyadmin, alt: "phpMyAdmin" },
    { src: git, alt: "Git" },
    { src: github, alt: "GitHub" },
    { src: vscode, alt: "VSCode" },
  ];

  return (
    <>
      {/* About Me */}
      <div className="min-h-screen bg-blue-600 text-white py-20 flex justify-center items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-52 md:w-64 bg-yellow-300 border-2 border-black shadow-[6px_6px_0_black] rounded-xl overflow-hidden flex-shrink-0"
          >
            <div className="relative w-full h-52 md:h-64">
              <Image
                src={portfolio}
                alt="Portfolio"
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover"
              />
            </div>
            <div className="px-3 py-2 text-center text-black text-sm md:text-base font-semibold border-t-2 border-black">
              Me and my GF!!!!
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-left px-4"
          >
            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-wide drop-shadow-[4px_4px_0_black] mb-6">
              About Me
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-prose">
              I am a passionate Front-End Developer with an educational
              background in Software Engineering. I have strong adaptability to
              new environments, excellent teamwork skills, and a continuous
              eagerness to learn and explore new technologies. I strive to build
              user-friendly and visually compelling interfaces while constantly
              improving my skills in modern front-end development.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Education Section */}
      <div
        ref={sectionRef}
        className="bg-cyan-500 text-white px-6 py-16 border-t-4 border-black shadow-[0_6px_0_0_black]"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-wide drop-shadow-[4px_4px_0_black] mb-8">
              Education Background
            </h1>
            <div className="flex flex-col space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <EducationCard
                  year="2022 - 2025"
                  degree="Software Engineering"
                  name="Vocational High School 2 Jakarta"
                  description="Focused on full-stack web and mobile development. Learned through hands-on projects and team collaborations."
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <EducationCard
                  year="2019 - 2022"
                  degree="Junior High School Degree"
                  name="Junior High School Maria Immaculata Marsudirini Jakarta"
                  description="Learning scratch and basic python programming."
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className="bg-sky-500 text-white px-6 py-16 border-t-4 border-black shadow-[0_6px_0_0_black]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-wide drop-shadow-[4px_4px_0_black] mb-6 text-center">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-start">
          {[frontendImages, backendImages, dbandtoolsImages].map(
            (group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="flex flex-col items-center"
              >
                <h3 className="text-lg font-semibold text-white px-4 py-1 rounded-md mb-4 inline-block">
                  {index === 0
                    ? "Front End"
                    : index === 1
                    ? "Back End"
                    : "Database and Tools"}
                </h3>
                <div className="w-full max-w-xs px-2">
                  <Carousel images={group} />
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
