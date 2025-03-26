const CommonHeading = ({ MyText = "", MyClass = "" }) => {
  return (
    <h2
      className={`lg:text-[80px] md:text-6xl text-5xl leading-[104%] font-normal lg:py-[89px] md:py-10 py-7 ${MyClass}`}
      style={{
        textShadow: '2px 2px 1px rgba(255, 255, 255, 0.32), 2px 2px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {MyText}
    </h2>
  );
};

export default CommonHeading;
