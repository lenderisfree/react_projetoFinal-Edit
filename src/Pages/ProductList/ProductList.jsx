import Filters from "../../Componentes/ProductListPage/FiltersCategorie/FiltersCategorie";
import HeaderProductList from "../../Componentes/ProductListPage/HeaderProductList/HeaderProductList";
import SortBar from "../../Componentes/ProductListPage/SortBar/SortBar";
import { useState } from "react";


const ProductList = () => {
  const [sortBy, setSortBy] = useState();


  return (
    <>
      <HeaderProductList />
      <SortBar handlerSortBy={setSortBy} />
      <Filters  selectedSortBy={sortBy}/>
    </>
  );
};

export default ProductList;
