"use client"
import Image from "next/image"

type ProjectProps = {
  title: string
  description: string
  tags: readonly string[]
  imageUrl: string
}

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <>
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 mt-4">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="block sm:hidden px-5 pb-5">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg shadow-lg 
            transition group-hover:scale-[1.04] group-hover:-translate-x-3
            group-hover:translate-y-3 group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
          />
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          width={500}
          height={500}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
            transition group-hover:scale-[1.04] group-hover:-translate-x-3
            group-hover:translate-y-3 group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </>
  )
}

export default Project
