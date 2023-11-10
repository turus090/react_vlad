import { BrowserRouter } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Advantage from "./Components/Advantage/Advantage";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <AboutUs />
          <Advantage />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
