
//Components

import Promobar from "./Componentes/Promobar/Promobar.jsx";
import Header from "./Componentes/HomePage/Header/Header.jsx";
import Footer from "./Componentes/Footer/Footer.jsx";


//Routers
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product/Product.jsx";
import ProductList from "./Pages/ProductList/ProductList.jsx";
import Home from "./Pages/Home/Home.jsx";

function App() {
  return (
    <>
      <Promobar text=" Free shipping for orders above USD 150"/>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/ProductList" element={<ProductList/>}></Route>
          <Route path="/Product" element={<Product/>}></Route>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
