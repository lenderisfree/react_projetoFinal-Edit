import Slider from "../../Componentes/Slider/Slider.jsx";
import Products from "../../Componentes/Products/Products.jsx";
import About from "../../Componentes/About/About.jsx";
import Journal from "../../Componentes/Journal/Journal.jsx";
import Looks from "../../Componentes/Looks/Looks.jsx";
import Press from "../../Componentes/Press/Press.jsx";
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
