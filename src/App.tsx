import { useEffect } from "react";

import Block from "./Elements/Block";
import Diff from "./Elements/Diff";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Main from "./Elements/Main";

const App = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main>
      <Header />
      <Main />
      <Diff />
      <Block />
      <Footer />
    </main>
  );
};

export default App;
