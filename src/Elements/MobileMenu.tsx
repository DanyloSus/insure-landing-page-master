import { useEffect } from "react";
import useMobileMenu from "../store";

const MobileMenu = () => {
  const { isActive } = useMobileMenu((s) => s);

  useEffect(() => {
    const handleScroll = (e: any) => {
      if (isActive) {
        e.preventDefault();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <div
      className="h-[calc(100vh-54px)] w-screen bg-very-dark-violet absolute z-20 -left-0 transition-all flex flex-col pt-12 uppercase font-bold gap-6 items-center px-6 "
      style={
        isActive
          ? { top: 0, opacity: 1, zIndex: 20 }
          : { top: "100%", opacity: 0, zIndex: -10 }
      }
    >
      <img
        src="./bg-pattern-mobile-nav.svg"
        alt="bg pattern mobile nav"
        className="absolute bottom-0"
      />
      <a href="#">how we work</a>
      <a href="#">blog</a>
      <a href="#">account</a>
      <button className="button-white w-full lg:py-3">view plans</button>
    </div>
  );
};

export default MobileMenu;
