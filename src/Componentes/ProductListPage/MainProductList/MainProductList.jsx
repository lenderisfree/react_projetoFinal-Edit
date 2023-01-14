import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const MainProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const listDataProducts = async () => {
      const res = await fetch(
        "https://foxcoding.net/api/getProductsList?nProducts=25"
      );
      const response = await res.json();
      setProducts(response.data.products);
    };

    listDataProducts();
  }, []);


  return (
    <div
      id="mainproductlist"
      className="product-list col-12 col-t-8 col-d-9 gridrowfull"
    >
      {products &&
        products.map((product) => {
          return (
            <>
              <Link
                to={`../Product/${product.id}`}
                className="product-card col-6 col-d-4"
                title="View Product"
              >
                <div className="product-card-image">
                  <img
                    className="imgfit"
                    src={product.image}
                    sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"
                  />
                </div>

                <p className="margintophalf marginbottomnone">
                  {product.description}
                </p>
                <p className="gray marginnone">Tops</p>
                <p className="secondary marginnone">$ {product.price}</p>
              </Link>
            </>
          );
        })}

      <div className="central-link-light marginbottomdouble">
        <a href="#" title="Load More">
          <i className="icn-reload"></i> Load More
        </a>
      </div>
    </div>
  );
};

export default MainProductList;
