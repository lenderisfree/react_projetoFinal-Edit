import Slider from "../../Componentes/HomePage/Slider/Slider.jsx";
import Products from "../../Componentes/HomePage/Products/Products.jsx";
import About from "../../Componentes/HomePage/About/About.jsx";
import Journal from "../../Componentes/HomePage/Journal/Journal.jsx";
import Looks from "../../Componentes/HomePage/Looks/Looks.jsx";
import Press from "../../Componentes/HomePage/Press/Press.jsx";
import TalkingAboutUs from "../../Componentes/HomePage/TalkingAboutUs/TalkingAboutUs";

const Home = () => {
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
