const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-[164px] py-[31px] z-20 relative">
      <img src="./logo.svg" alt="logo" />
      <div className="uppercase flex items-center text-sm gap-6">
        <nav className="flex items-center gap-6 ">
          <a href="#">How we work</a>
          <a href="#">Blog</a>
          <a href="#">Account</a>
        </nav>
        <button className="button-black">View plans</button>
      </div>
    </header>
  );
};

export default Header;
