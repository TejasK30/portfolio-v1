"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "motion/react"
import SubmitBtn from "./submit-btn"

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,50rem)] text-center "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:tejas.k6389@gmail.com">
          tejas.k6389@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col p-8 rounded-lg bg-gray-200">
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all bg-white outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4  transition-all bg-white outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
