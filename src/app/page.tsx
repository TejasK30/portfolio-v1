import About from "@/components/about"
import Contact from "@/components/contact"
import IntroSection from "@/components/intro"
import Projects from "@/components/projects"
import SectionDivider from "@/components/section-divider"
import Skills from "@/components/skills"
import React from "react"

const HomePage = () => {
  return (
    <>
      <main className="flex flex-col items-center px-4">
        <IntroSection />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default HomePage
