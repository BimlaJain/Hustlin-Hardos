

const CommonHeading = ({ MyText = "", MyClass = "", }) => {
  return (
    <h2 className={`lg:text-[80px] md:text-6xl text-5xl leading-[104%] font-normal  lg:py-[89px] md:py-10 py-7  ${MyClass}`}>{MyText}</h2>
  )
}

export default CommonHeading
