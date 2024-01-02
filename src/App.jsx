import { BrowserRouter } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Advantage from "./Components/Advantage/Advantage";
import Footer from "./Components/Footer/Footer";
import Price from "./Components/Price/Price";
import Gallery from "./Components/Gallery/Gallery";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <AboutUs />
          <Advantage />
          <Price />
          <Gallery />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
