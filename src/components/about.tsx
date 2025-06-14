"use client"

import { motion } from "motion/react"
import Sectionheading from "./section-heading"

const About = () => {
  return (
    <>
      <motion.section
        id="about"
        className="mb-28 max-w-[70rem] text-center sm:md-0 scroll-mt- leading-7"
      >
        <Sectionheading>About me</Sectionheading>
        <div className="flex items-center justify-center">
          <motion.h1
            className="mb-10 mt-4 px-4 !leading-[1.5] sm:text-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {" "}
            <p className="mb-3">
              I have cultivated a strong foundation in{" "}
              <span className="font-medium">full-stack web development</span>{" "}
              through both hands-on project experience and continuous
              self-learning.{" "}
              <span className="italic">
                What I enjoy most about programming
              </span>{" "}
              is the creative challenge of solving real-world problems with
              clean and efficient code. My core stack includes{" "}
              <span className="font-medium">
                React, Next.js, Node.js, TypeScript, and MongoDB
              </span>
              . I also have experience with Flask, PostgreSQL, Docker, and REST
              APIs. I&apos;m always eager to explore new technologies and
              continuously improve my skills. I&apos;m currently seeking a{" "}
              <span className="font-medium">full-time role or internship</span>{" "}
              where I can contribute to impactful products and grow as a
              developer.
            </p>
            <p>
              <span className="italic">Beyond coding</span>, I’m passionate
              about building AI-driven tools, exploring design systems, and
              creating efficient, scalable apps. I also enjoy reading about
              technology trends, experimenting with side projects, and enhancing
              my skills in{" "}
              <span className="font-medium">DevOps and cloud platforms</span>.
            </p>
          </motion.h1>
        </div>
      </motion.section>
    </>
  )
}

export default About
