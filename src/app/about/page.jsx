"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import portfolio from "../Images/portfolio.jpeg";
import js from "../Images/jslogo.png";
import html from "../Images/html5.png";
import css from "../Images/css.png";
import react from "../Images/react.png";
import rn from "../Images/reactnative.png";
import vue from "../Images/vue.png";
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
import qsi from "../Images/qsi.png";
import ts from "../Images/typescript.png";
import smp from "../Images/smp.png";
import smk from "../Images/smk.png";
import uph from "../Images/uph.png";
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
    { src: html, alt: "HTML5" },
    { src: css, alt: "CSS" },
    { src: js, alt: "JavaScript" },
    { src: ts, alt: "TypeScript" },
    { src: react, alt: "React" },
    { src: rn, alt: "React Native" },
    { src: vue, alt: "Vue" },
    { src: next, alt: "NextJS" },
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

  const education = [
    {
      year: "2026 - 2029",
      degree: "Bachelor of Informatics Engineering",
      name: "Pelita Harapan University",
      description: "Artificial Intelligence and Cognitive Computing",
      image: uph,
    },
    {
      year: "2022 - 2025",
      degree: "Software Engineering High School Degree",
      name: "Vocational High School 2 Jakarta",
      description:
        "Focused on full-stack web and mobile development. Learned through hands-on projects and team collaborations.",
      image: smk,
    },
    {
      year: "2019 - 2022",
      degree: "Junior High School Degree",
      name: "Junior High School Maria Immaculata Marsudirini Jakarta",
      description: "Learning using Scratch and basic Python programming.",
      image: smp,
    },
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
              Me!!!
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
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-wide drop-shadow-[4px_4px_0_black] mb-8">
              Education Background
            </h1>

            <div className="flex flex-col space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                >
                  <EducationCard
                    year={item.year}
                    degree={item.degree}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Currently Working At */}
      <div className="bg-blue-500 text-white px-6 py-16 border-t-4 border-black shadow-[0_6px_0_0_black]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-wide drop-shadow-[4px_4px_0_black] mb-8">
              Currently Working At
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-40 h-40 relative flex-shrink-0"
              >
                <Image
                  src={qsi}
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-left max-w-lg"
              >
                <h2 className="text-2xl font-bold mb-2">
                  Front End Mobile Developer
                </h2>
                <h3 className="text-xl font-semibold mb-2">
                  PT. Quadrant Synergy International
                </h3>
                <p className="text-lg leading-relaxed">
                  Currently contributing to building responsive and interactive
                  mobile applications using React Native Typescript.
                  Collaborating closely with designers and backend developers to
                  deliver seamless user experiences.
                </p>
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
