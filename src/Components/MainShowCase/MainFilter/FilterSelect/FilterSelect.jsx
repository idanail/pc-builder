import React, { useContext } from "react";

// npm imports
import styled from "styled-components";
import { GlobalContext } from "../../../../Context/GlobalContext";

// consts imports

// context imports

// component imports

// styled-components
const FilterSelectWrapper = styled.select`
  width: 100%;
  margin-top: 20px;
  padding: 8px;
  font-size: ${(props) => props.theme.normalText};
  border-radius: 4px;
  border-color: ${(props) => props.theme.dark_gray};
`;
// component

const FilterSelect = ({ title, query }) => {
  const {
    handleSelect,
    mainData,
    currentType,
    currentColor,
    currentObj,
  } = useContext(GlobalContext);

  return (
    <FilterSelectWrapper
      defaultValue={
        title.toLowerCase() === "type"
          ? currentObj.type
            ? currentObj.type[0]
            : "--"
          : currentObj.color
          ? currentObj.color[0]
          : "--"
      }
      onChange={(e) => handleSelect(e.target.value, title.toLowerCase())}
    >
      <option value="--" disabled hidden>
        {title}
      </option>
      {query &&
        query.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
    </FilterSelectWrapper>
  );
};

export default FilterSelect;
