
//Components
import Home from "./Pages/Home/Home.jsx";
import Promobar from "./Componentes/Promobar/Promobar.jsx";
import Header from "./Componentes/Header/Header.jsx";
import Footer from "./Componentes/Footer/Footer.jsx";
import ProductList from "./Pages/ProductList/ProductList.jsx";

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
