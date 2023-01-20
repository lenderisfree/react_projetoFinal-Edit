import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductPage = () => {
  
  const [itemId, setItemId] = useState ([]);
  const {id} = useParams();

  useEffect(() =>{
    const getItemId = async () =>{
      const res = await fetch(
        `https://foxcoding.net/api/getProduct?/=${id}`
        );
        const response = await res.json();
        setItemId (response);
        
        
    };

    
      getItemId();
    }, []);

  return (
    <div className="gridrow" id="product">
      <div id="thumbs" className="col-3 col-t-1">
        <a
          href="#"
          title="Red classNameic Chest Logo Hoodie 1"
          className="open"
        >
          <img
            className="imgfit"
            src={itemId.image}
            alt="Red classNameic Chest Logo Hoodie 1"
          />
        </a>
        <a href="#" title="Red classNameic Chest Logo Hoodie 2">
          <img
            className="imgfit"
            src={itemId.image}
            alt="Red classNameic Chest Logo Hoodie 2"
          />
        </a>
        <a href="#" title="Red classNameic Chest Logo Hoodie 3">
          <img
            className="imgfit"
            src={itemId.image}
            alt="Red classNameic Chest Logo Hoodie 3"
          />
        </a>
        <a href="#" title="Red classNameic Chest Logo Hoodie 4">
          <img
            className="imgfit"
            src={itemId.image}
            alt="Red classNameic Chest Logo Hoodie 4"
          />
        </a>
        <a href="#" title="Red classNameic Chest Logo Hoodie 5">
          <img
            className="imgfit"
            src={itemId.image}
            alt="Red classNameic Chest Logo Hoodie 5"
          />
        </a>
      </div>
      <div id="bigimg" className="col-9 col-t-4 col-d-5">
        <img
          className="imgfit"
          src="imgs/products/product23.jpg 720w, imgs/products/medium/product23.jpg 640w"
          sizes="(min-width: 1200px) 720px, 640px"
          srcSet={itemId.image}
        />
        <div className="share margintopfull">
          Share this product
          <a href="#" title="Facebook">
            <i className="icn-facebook"></i>
          </a>
          <a href="#" title="Twitter">
            <i className="icn-twitter"></i>
          </a>
          <a href="#" title="Pinteres">
            <i className="icn-pinterest"></i>
          </a>
        </div>
      </div>
      <div id="product-description" className="col-12 col-t-7 col-d-6">
        <h1>{itemId.name}</h1>
        <div className="product-description-line gridrowfull nogutter">
          <div className="col-6 price">{itemId.price}</div>
          <div className="col-6 textright score">
            <i className="icn-star primary"></i>
            <i className="icn-star primary"></i>
            <i className="icn-star primary"></i>
            <i className="icn-star primary"></i>
            <i className="icn-star"></i>
            <span>4.2 of 5</span>
          </div>
        </div>
        <div className="product-description-line gridrowfull">
          <div className="col-12">
            <p className="marginnone">Description</p>
            <p className="graymedium marginnone marginbottomthird smallerheight">
              Nam in velit a metus feugiat luctus nec in diam. Donec quis
              viverra metus. Nulla lacinia pulvinar justo, vitae ornare sapien
              convallis non...
            </p>
          </div>
        </div>
        <div className="product-description-line gridrowfull">
          <div className="col-6">Artisan Employment</div>
          <div className="col-6 graymedium">54 jobs</div>
        </div>
        <div className="product-description-line gridrowfull">
          <div className="col-6">Partnership</div>
          <div className="col-6 graymedium">Yohji Yamamoto</div>
        </div>
        <div className="product-description-line gridrowfull">
          <div className="col-6">In Collab</div>
          <div className="col-6 graymedium">Adidas</div>
        </div>
        <div className="product-description-line gridrowfull">
          <div className="col-12 fancytext">Size</div>
          <div className="col-6 sizebtns">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
          </div>
          <div className="col-6 textright">
            <a href="#" title="Size Guidelines" className="fancytext">
              Size Guidelines
            </a>
          </div>
          <div className="col-12 small graymedium">
            Model is a US size 2-4, wears Matter size 1. 175cm tall.
          </div>
          <div className="col-12 fancytext">Quantity</div>
          <div className="col-6 col-d qty">
            <button type="button" className="btnleft">
              -
            </button>
            <input type="number" defaultValue="1" name="qty" />
            <button type="button" className="btnright">
              +
            </button>
          </div>
          <div className="col-6 col-d cart">
            <button type="button">Add to cart</button>
          </div>
          <div className="col-12 col-d textright wishlist marginbottomtwothirds">
            <a href="#" title="Add top wishlist" className="fancytext">
              <i className="icn-heart"></i> Add to wishlist
            </a>
          </div>
        </div>
        <div className="gridrowfull product-care">
          <div className="col-12">
            <ul>
              <li>
                <a href="#" title="Tops">
                  Features
                  <span className="plus">+</span>
                  <span className="minus">-</span>
                </a>
                <div className="graymedium">
                  <p>
                    Nunc a augue velit. Nullam eget velit sit amet orci
                    dignissim iaculis. Quisque dignissim neque in odio laoreet
                    sodales. Phasellus gravida facilisis est. Ut nec metus
                    lobortis, euismod felis eget, ornare erat. Donec gravidavalue
                    diam sed facilisis consequat. Nam tincidunt sem elit, a
                    facilisis nibh maximus vitae. Proin suscipit augue mi, id
                    sollicitudin orci lacinia vitae. Vestibulum est neque,
                    posuere eget fringilla nec, congue ac ipsum. In tellus
                    magna, placerat eu sapien et, faucibus aliquam nulla. Cras
                    volutpat mattis mi, a porttitor odio elementum sed. Vivamus
                    facilisis erat at lacus blandit suscipit. In nec sem
                    gravida, dignissim est nec, hendrerit lacus. Nunc sed
                    convallis massa.
                  </p>
                </div>
              </li>
              <li className="open">
                <a href="#" title="Tops">
                  Fabric
                  <span className="plus">+</span>
                  <span className="minus">-</span>
                </a>
                <div className="graymedium">
                  <p>
                    Nunc a augue velit. Nullam eget velit sit amet orci
                    dignissim iaculis. Quisque dignissim neque in odio laoreet
                    sodales. Phasellus gravida facilisis est. Ut nec metus
                    lobortis, euismod felis eget, ornare erat. Donec gravida
                    diam sed facilisis consequat. Nam tincidunt sem elit, a
                    facilisis nibh maximus vitae. Proin suscipit augue mi, id
                    sollicitudin orci lacinia vitae. Vestibulum est neque,
                    posuere eget fringilla nec, congue ac ipsum. In tellus
                    magna, placerat eu sapien et, faucibus aliquam nulla. Cras
                    volutpat mattis mi, a porttitor odio elementum sed. Vivamus
                    facilisis erat at lacus blandit suscipit. In nec sem
                    gravida, dignissim est nec, hendrerit lacus. Nunc sed
                    convallis massa.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
