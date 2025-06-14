"use client"
import { motion } from "motion/react"
import React from "react"

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-gray-200 h-16 my-21 hidden sm:block w-1 rounded-full"
      initial={{ y: 100, opacity: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  )
}

export default SectionDivider
