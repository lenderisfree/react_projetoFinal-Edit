import Filters from "../../Componentes/ProductListPage/FiltersCategorie/FiltersCategorie";
import HeaderProductList from "../../Componentes/ProductListPage/HeaderProductList/HeaderProductList";
import SortBar from "../../Componentes/ProductListPage/SortBar/SortBar";



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
