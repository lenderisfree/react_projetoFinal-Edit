function SortBar() {
  return (
    <div id="sortbar">
      <div className="gridrow">
        <div className="col-4">Tops</div>
        <div className="col-8 textright">
          Sort by
          <select>
            <option defaultValue="Price">
              Price
            </option>
            <option value="Popularity">Popularity</option>
            <option value="Name">Name</option>
            <option value="Season">Season</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SortBar;
