"use client"
import { projectsData } from "@/lib/data"
import Project from "./project"
import Sectionheading from "./section-heading"

const Projects = () => {
  return (
    <>
      <section className="scroll-mt-28 mb-28" id="projects">
        <Sectionheading>Projects</Sectionheading>
        <div>
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
