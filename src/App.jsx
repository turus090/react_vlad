import { BrowserRouter } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Advantage from "./Components/Advantage/Advantage";
import Footer from "./Components/Footer/Footer";
import Price from "./Components/Price/Price";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <AboutUs />
          <Advantage />
          <Price />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
