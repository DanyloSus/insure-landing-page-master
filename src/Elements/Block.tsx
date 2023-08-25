const Block = () => {
  return (
    <section className="flex justify-center mt-[160px] lg:px-3 reveal">
      <div className="w-[1110px] bg-dark-violet text-very-light-gray flex justify-between items-center relative h-[250px] px-[80px] lg:w-auto lg:text-center lg:flex-col lg:px-0 lg:py-[70px] lg:h-auto">
        <img
          src="./bg-pattern-how-we-work-desktop.svg"
          alt="bg pattern how we work desktop"
          className="absolute right-0 lg:hidden"
        />
        <img
          src="./bg-pattern-how-we-work-mobile.svg"
          alt="bg pattern how we work mobile"
          className="absolute -right-0 top-0 lg:block hidden"
        />
        <h2 className="text-6xl w-[530px] lg:text-5xl lg:w-auto lg:mb-12 relative z-10">
          Find out more about how we work
        </h2>
        <button className="button-white relative z-10">How we work</button>
      </div>
    </section>
  );
};

export default Block;
