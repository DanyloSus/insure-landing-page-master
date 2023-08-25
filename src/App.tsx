import Block from "./Elements/Block";
import Diff from "./Elements/Diff";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Main from "./Elements/Main";

const App = () => {
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
