import Breadcrumb from "../../Componentes/ProductPages/Breadcrumb/Breadcrumb.jsx";
import GridrowImages from "../../Componentes/ProductPages/GridrowImages/GridrowImages.jsx";
import GridrowText from "../../Componentes/ProductPages/GridrowText/GridrowText.jsx";
import Looks from "../../Componentes/HomePage/Looks/Looks.jsx";
import ProductPage from "../../Componentes/ProductPages/ProductPage/ProductPage.jsx";
import RelatedProduts from "../../Componentes/ProductPages/RelatedProducts/RelatedProducts.jsx";
import Reviews from "../../Componentes/ProductPages/Reviews/Reviews.jsx";
import Separador from "../../Componentes/ProductPages/Separador/Separador.jsx";

const Product = () =>{
    return(
        <main>
        <Breadcrumb/>
        <ProductPage/>
        <Separador/>
        <GridrowImages/>
        <GridrowText/>
        <Looks/>
        <Reviews/>
        <RelatedProduts/>
        </main>
    )
}

export default Product;