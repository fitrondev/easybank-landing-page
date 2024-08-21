import Articles from "./components/layouts/Articles";
import Footer from "./components/layouts/Footer";
import Hero from "./components/layouts/Hero";
import Leverage from "./components/layouts/Leverage";
import Navbar from "./components/layouts/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Leverage />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
