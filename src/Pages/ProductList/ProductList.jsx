import Filters from "../../Componentes/Filters/Filters";
import HeaderProductList from "../../Componentes/HeaderProductList/HeaderProductList";
import SortBar from "../../Componentes/SortBar/SortBar";



const ProductList = () => {
  return (
    <>
      <HeaderProductList/>
      <SortBar/>
      <Filters/>
    </>
  );
}

export default ProductList;
