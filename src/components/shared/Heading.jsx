const Heading = ({ subTitle, title, isLeft, isWhite }) => {
  return (
    <div
      className={`${
        isLeft ? "text-center lg:text-left" : "text-center "
      } space-y-1 py-5 lg:py-12`}
    >
      <p className="font-pacifico text-orange text-xl lg:text-3xl font-bold">
        {subTitle}
      </p>
      <h1
        className={`${
          isWhite && "text-white"
        } text-3xl lg:text-7xl font-extrabold uppercase tracking-wide`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
