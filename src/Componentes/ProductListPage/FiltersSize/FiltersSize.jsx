const FilterSize = ({ handlerClickSize }) => {
  return (
    <div className="sizes">
      <p className="fancytext">- Sizes</p>
      <div className="sizebtns marginverticalfourth">
        <button
          type="button"
          value="1"
          onClick={(event) => {
            const selected = event.target.value;
            handlerClickSize(selected);
          }}
        >
          1
        </button>
        <button
          type="button"
          value="2"
          onClick={(event) => {
            const selected = event.target.value;
            console.log('size:', selected)
            handlerClickSize(selected);
          }}
        >
          2
        </button>
        <button
          type="button"
          value="3"
          onClick={(event) => {
            const selected = event.target.value;
            console.log(event.target.value)
            handlerClickSize(selected);
          }}
        >
          3
        </button>
        <button
          type="button"
          value="4"
          onClick={(event) => {
            const selected = event.target.value;
            handlerClickSize(selected);
          }}
        >
          4
        </button>
      </div>
      <a href="#" title="View Size Guide" className="fancytext">
        See our sizing guide
      </a>
    </div>
  );
};

export default FilterSize;
