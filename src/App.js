
//Components
import Home from "./Pages/Home/Home.js";
import Promobar from "./Componentes/Promobar/Promobar.js";
import Header from "./Componentes/Header/Header.js";
import Footer from "./Componentes/Footer/Footer.js";
import ProductList from "./Pages/ProductList/ProductList.js";

//Routers
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Promobar text=" Free shipping for orders above USD 150"/>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/ProductList" element={<ProductList/>}></Route>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
