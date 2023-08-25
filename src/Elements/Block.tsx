const Block = () => {
  return (
    <section className="flex justify-center mt-[160px]">
      <div className="w-[1110px] bg-dark-violet text-very-light-gray flex justify-between items-center relative h-[250px] px-[80px]">
        <img
          src="./bg-pattern-how-we-work-desktop.svg"
          alt="bg pattern how we work desktop"
          className="absolute right-0"
        />
        <h2 className="text-6xl w-[530px]">Find out more about how we work</h2>
        <button className="button-white relative z-10">How we work</button>
      </div>
    </section>
  );
};

export default Block;
