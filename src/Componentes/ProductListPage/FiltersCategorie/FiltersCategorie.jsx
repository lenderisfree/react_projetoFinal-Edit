import FilterSize from "../../FiltersSize/FiltersSize";
import MainProductList from "../MainProductList/MainProductList";
import { BaseProduct } from "../../../Api/Api";
import { useEffect, useState } from "react";
import FilterItemCategories from "./FilterItemCategories";

const Filters = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filterProducts = async () => {
      const res = await fetch(`${BaseProduct}?nProducts=25`);
      const response = await res.json();
      setProducts(response.data.products);
    };

    filterProducts();
  }, []);

  //Filters

  return (
    <div className="gridrow">
      <div id="filters" className="col-12 col-t-4 col-d-3">
        <p className="fancytext">Filters</p>
        <ul className="categories">
          <FilterItemCategories
            name="TOPS"
            categories={["Snickers", "Coats"]}
            key={crypto.randomUUID()}
          />
          <FilterItemCategories
            name="TOPS 22"
            categories={["dsfd", "dsfgsd", "dsf"]}
            key={crypto.randomUUID()}
          />
          <FilterItemCategories
            name="TOPS 22"
            categories={["1", "22", "Marco", "1", "22", "Marco"]}
            key={crypto.randomUUID()}
          />
        </ul>
        <FilterSize />
      </div>
      <MainProductList />
    </div>
  );
};
export default Filters;

// sfc + tab
