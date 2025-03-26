const CommonHeading = ({ myText, myClass }) => {
  return (
    <h2
      className={`lg:text-[80px] md:text-6xl text-5xl leading-[104%] font-normal lg:py-[89px] md:py-10 py-7 ${myClass}`}
      style={{
        textShadow: '2px 2px 1px rgba(255, 255, 255, 0.32), 2px 2px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {myText}
    </h2>
  );
};

export default CommonHeading;
