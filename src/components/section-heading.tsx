type sectionHeadingProps = {
  children: React.ReactNode
}

const Sectionheading = ({ children }: sectionHeadingProps) => {
  return (
    <>
      <h2 className="text-4xl font-bold capitalize mb-8 text-center">
        {children}
      </h2>{" "}
    </>
  )
}

export default Sectionheading
