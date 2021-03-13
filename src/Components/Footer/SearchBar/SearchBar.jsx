import React, { useContext } from "react";

// npm imports
import styled from "styled-components";

// consts imports

// context imports
import { GlobalContext } from "../../../Context/GlobalContext";

// component imports

// styled-components
const SearchBarWrapper = styled.input`
  width: 90%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.black};
`;
// component

const SearchBar = (props) => {
  const { handleSearch } = useContext(GlobalContext);
  return (
    <SearchBarWrapper
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchBar;
