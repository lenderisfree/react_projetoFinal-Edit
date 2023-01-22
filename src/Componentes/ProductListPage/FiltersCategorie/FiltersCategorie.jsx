import FilterSize from "../FiltersSize/FiltersSize";
import MainProductList from "../MainProductList/MainProductList";
import { BaseProduct } from "../../../Api/Api";
import { useEffect, useState } from "react";
import FilterItemCategories from "./FilterItemCategories";

const Filters = ({selectedSortBy}) => {
  const [products, setProducts] = useState([]);
  const [filterSize, setFilterSize] = useState();
  const [filterCategory, setFilterCategory] = useState();

  useEffect(() => {
    const filterProducts = async () => {
      // ?nProducts=25

      // sortBy=name
      const getSortBy = selectedSortBy ? `&sortBy=${selectedSortBy}` : "";

      // &size=1
      const getSize = filterSize ? `&size=${filterSize}` : "";

      // &catgory=1
      const getCategory = filterCategory ? `&category=${filterCategory}` : "";

      const res = await fetch(
        `${BaseProduct}?nProducts=25${getSortBy}${getSize}${getCategory}`
      );
      const response = await res.json();
      setProducts(response.data.products);
    };
    filterProducts();
  }, [filterSize, selectedSortBy, filterCategory]);

  //Filters

  return (
    <div className="gridrow">
      <div id="filters" className="col-12 col-t-4 col-d-3">
        <p className="fancytext">Filters</p>
        <ul className="categories">
          <FilterItemCategories
            handlerSelectedCategory={setFilterCategory}
            name="Tops"
            categories={["Jackets", "Sweaters", "Shirts", "Tees", "Polos"]}
            key={crypto.randomUUID()}
          />

          <FilterItemCategories
            handlerSelectedCategory={setFilterCategory}
            name="Bottoms"
            categories={["Shorts", "Trousers", "Skirts"]}
            key={crypto.randomUUID()}
          />

          <FilterItemCategories
            handlerSelectedCategory={setFilterCategory}
            name="Bags"
            categories={["Travel", "Work"]}
            key={crypto.randomUUID()}
          />

          <FilterItemCategories
            handlerSelectedCategory={setFilterCategory}
            name="Shoes"
            categories={["Snickers", "Boots", "Flip-flops"]}
            key={crypto.randomUUID()}
          />
        </ul>
        <FilterSize handlerClickSize={setFilterSize} />
      </div>
      <MainProductList products={products} />
    </div>
  );
};
export default Filters;
