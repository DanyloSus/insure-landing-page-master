import useMobileMenu from "../store";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { isActive, changeIsActive } = useMobileMenu((s) => s);

  return (
    <header className="flex items-center justify-between bg-white px-[164px] py-[31px] z-20 relative lg:p-6">
      <img src="./logo.svg" alt="logo" />
      <div className="uppercase flex items-center text-sm gap-6 lg:hidden">
        <nav className="flex items-center gap-6 ">
          <a href="#">How we work</a>
          <a href="#">Blog</a>
          <a href="#">Account</a>
        </nav>
        <button className="button-black">View plans</button>
      </div>
      {isActive ? (
        <img
          src="./icon-close.svg"
          alt="icon close"
          className="lg:block hidden"
          onClick={changeIsActive}
        />
      ) : (
        <img
          src="./icon-hamburger.svg"
          alt="icon hamburger"
          className="lg:block hidden"
          onClick={changeIsActive}
        />
      )}
    </header>
  );
};

export default Header;
