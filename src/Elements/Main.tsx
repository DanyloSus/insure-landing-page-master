const Main = () => {
  return (
    <section className="relative bg-dark-violet w-screen h-[600px] text-very-light-gray">
      <img
        src="./bg-pattern-intro-right-desktop.svg"
        alt="bg pattern intro right desktop"
        className="absolute right-0 -top-[76px]"
      />
      <img
        src="./bg-pattern-intro-left-desktop.svg"
        alt="bg pattern intro left desktop"
        className="absolute left-0 -bottom-[330px]"
      />
      <div className=" h-[650px] flex pt-[105px] justify-center">
        <div className="w-[570px]">
          <hr className="w-[150px] border-very-light-gray" />
          <h1 className="text-[80px] leading-[75px] mt-[50px] mb-6">
            Humanizing your insurance.
          </h1>
          <p className="text-[17px] opacity-70 mb-6">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="button-white">View plans</button>
        </div>
        <div>
          <img
            src="./image-intro-desktop.jpg"
            alt="image intro desktop"
            className="h-[650px] w-[540px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
