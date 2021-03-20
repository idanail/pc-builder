import React, { useContext } from "react";

// npm imports
import styled from "styled-components";

// consts imports

// context imports
import { GlobalContext } from "../../../../Context/GlobalContext";

// component imports

// styled-components
const FilterSelectWrapper = styled.select`
  font-size: ${(props) => props.theme.normalText};
  border: none;
  background: unset;
  padding: 5px 5px 5px 0px;
  /* width: 120px; */
  &:focus {
    outline: 2px solid ${(props) => props.theme.text_gray};
  }
`;
// component

const FilterSelect = (props) => {
  const { handleSort, filterSortDefaultValue } = useContext(GlobalContext);

  return (
    <FilterSelectWrapper
      id="select-sort"
      onChange={(e) => handleSort(e.target.value)}
      value={filterSortDefaultValue}
    >
      <option value="Featured">Featured</option>
      <option value="Low to High">Price: Low to High</option>
      <option value="High to Low">Price: High to Low</option>
    </FilterSelectWrapper>
  );
};

export default FilterSelect;
