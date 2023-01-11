import Breadcrumb from "../../Componentes/Breadcrumb/Breadcrumb.jsx";
import GridrowImages from "../../Componentes/GridrowImages/GridrowImages.jsx";
import GridrowText from "../../Componentes/GridrowText/GridrowText.jsx";
import Looks from "../../Componentes/Looks/Looks.jsx";
import ProductPage from "../../Componentes/ProductPage/ProductPage.jsx";
import RelatedProduts from "../../Componentes/RelatedProducts/RelatedProducts.jsx";
import Reviews from "../../Componentes/Reviews/Reviews.jsx";
import Separador from "../../Componentes/Separador/Separador.jsx";

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