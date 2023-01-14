import MainProductList from "../MainProductList/MainProductList";


const Filters = () => {
  return (
    <div className="gridrow">
      <div id="filters" className="col-12 col-t-4 col-d-3">
        <p className="fancytext">Filters</p>
        <ul className="categories">
          <li className="open">
            <a href="#" title="Tops">
              Tops
              <i className="icn-chevron-down"></i>
              <i className="icn-chevron-up"></i>
            </a>
            <ul>
              <li>
                <a href="#" title="Jackets">
                  <i className="icn-chevron-right"></i> Jackets
                </a>
              </li>
              <li>
                <a href="#" title="Sweaters">
                  <i className="icn-chevron-right"></i> Sweaters
                </a>
              </li>
              <li>
                <a href="#" title="Shirts">
                  <i className="icn-chevron-right"></i> Shirts
                </a>
              </li>
              <li>
                <a href="#" title="Tees">
                  <i className="icn-chevron-right"></i> Tees
                </a>
              </li>
              <li>
                <a href="#" title="Polos">
                  <i className="icn-chevron-right"></i> Polos
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" title="Bottoms">
              Bottoms
              <i className="icn-chevron-down"></i>
              <i className="icn-chevron-up"></i>
            </a>
            <ul>
              <li>
                <a href="#" title="Shorts">
                  <i className="icn-chevron-right"></i> Shorts
                </a>
              </li>
              <li>
                <a href="#" title="Trousers">
                  <i className="icn-chevron-right"></i> Trousers
                </a>
              </li>
              <li>
                <a href="#" title="Skirts">
                  <i className="icn-chevron-right"></i> Skirts
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" title="Bags">
              Bags
              <i className="icn-chevron-down"></i>
              <i className="icn-chevron-up"></i>
            </a>
            <ul>
              <li>
                <a href="#" title="Travel">
                  <i className="icn-chevron-right"></i> Travel
                </a>
              </li>
              <li>
                <a href="#" title="Work">
                  <i className="icn-chevron-right"></i> Work
                </a>
              </li>
            </ul>
          </li>
          <li className="open">
            <a href="#" title="Bags">
              Shoes
              <i className="icn-chevron-down"></i>
              <i className="icn-chevron-up"></i>
            </a>
            <ul>
              <li>
                <a href="#" title="Sneakers">
                  <i className="icn-chevron-right"></i> Sneakers
                </a>
              </li>
              <li>
                <a href="#" title="Boots">
                  <i className="icn-chevron-right"></i> Boots
                </a>
              </li>
              <li>
                <a href="#" title="Flip-flops">
                  <i className="icn-chevron-right"></i> Flip-flops
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sizes">
          <p className="fancytext">- Sizes</p>
          <div className="sizebtns marginverticalfourth">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
          </div>
          <a href="#" title="View Size Guide" className="fancytext">
            See our sizing guide
          </a>
        </div>
      </div>
      <MainProductList/>
    </div>
  );
}

export default Filters;
