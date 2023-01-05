import Slider from "../../Componentes/Slider/Slider.js";
import Products from "../../Componentes/Products/Products.js";
import About from "../../Componentes/About/About.js";
import Journal from "../../Componentes/Journal/Journal.js";
import Looks from "../../Componentes/Looks/Looks.js";
import Press from "../../Componentes/Press/Press.js";
import TalkingAboutUs from "../../Componentes/TalkingAboutUs/TalkingAboutUs";

function Home() {
  return (
    <>
      <Slider />
      <Products />
      <About />
      <Journal />
      <Looks />
      <Press />
      <TalkingAboutUs />
    </>
  );
}

export default Home;
