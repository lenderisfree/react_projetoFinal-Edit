import { useState } from "react";

const FilterItemCategories = ({ name, categories }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handlerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li id="dropdown" className="open">
      {name}

      {isOpen ? (
        <i className="icn-chevron-down" onClick={handlerToggle}></i>
      ) : (
        <i className="icn-chevron-up" onClick={handlerToggle}></i>
      )}

      {isOpen && (
        <>
          <ul>
            {categories.map((category) => (
              <li>
                <a href="#" title= {category}>
                  <i className="icn-chevron-right"></i>
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

export default FilterItemCategories;
