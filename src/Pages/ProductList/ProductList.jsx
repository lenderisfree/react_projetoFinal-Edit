import Filters from "../../Componentes/Filters/Filters";
import HeaderProductList from "../../Componentes/HeaderProductList/HeaderProductList";
import SortBar from "../../Componentes/SortBar/SortBar";



function ProductList() {
  return (
    <div>
      <HeaderProductList/>
      <SortBar/>
      <Filters/>
    </div>
  );
}

export default ProductList;
