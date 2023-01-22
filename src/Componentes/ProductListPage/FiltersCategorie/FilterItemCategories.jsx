import { useState } from "react";

const FilterItemCategories = ({
  name,
  categories,
  handlerSelectedCategory,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handlerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="open">
      {name}
      {isOpen ? (
        <i className="icn-chevron-down" onClick={handlerToggle}></i>
      ) : (
        <i className="icn-chevron-up" onClick={handlerToggle}></i>
      )}
      {isOpen && (
        <ul>
          {categories.map((category) => (
            <li
              key={crypto.randomUUID()}
              onClick={() => handlerSelectedCategory(category)}
            >
              <div value={category} title={category}>
                <i className="icn-chevron-right"></i>
                {category}
              </div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default FilterItemCategories;
