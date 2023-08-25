import MobileMenu from "./MobileMenu";

const Main = () => {
  return (
    <section className="relative bg-dark-violet w-screen h-[600px] lg:h-auto text-very-light-gray">
      <MobileMenu />
      <img
        src="./bg-pattern-intro-right-desktop.svg"
        alt="bg pattern intro right desktop"
        className="absolute right-0 -top-[76px] lg:hidden"
      />
      <img
        src="./bg-pattern-intro-left-desktop.svg"
        alt="bg pattern intro left desktop"
        className="absolute left-0 -bottom-[330px] lg:hidden"
      />
      <div>
        <img
          src="./image-intro-mobile.jpg"
          alt="image intro mobile"
          className="w-screen object-cover hidden lg:block top-anim"
        />
      </div>
      <div className=" h-[650px] flex pt-[105px] justify-center py-[92px] lg:px-3">
        <div className="w-[570px] lg:w-auto lg:text-center relative bott-anim">
          <img
            src="./bg-pattern-intro-right-mobile.svg"
            alt="bg pattern intro right mobile"
            className="absolute -right-3 -bottom-[267px] lg:block hidden"
          />
          <img
            src="./bg-pattern-intro-left-mobile.svg"
            alt="bg pattern intro left mobile"
            className="absolute -left-3 -top-[104px] lg:block hidden"
          />
          <hr className="w-[150px] border-very-light-gray lg:hidden" />
          <h1 className="text-[80px] leading-[75px] mt-[50px] lg:mt-0 mb-6 lg:text-5xl relative z-10">
            Humanizing your insurance.
          </h1>
          <p className="text-[17px] opacity-70 mb-6 lg:text-[17.4px]">
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
            className="h-[650px] w-[540px] object-cover lg:hidden top-anim"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
