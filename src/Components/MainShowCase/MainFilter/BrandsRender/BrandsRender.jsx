import React, { useContext, useState } from "react";

// npm imports
import styled from "styled-components";
import { GlobalContext } from "../../../../Context/GlobalContext";

// consts imports

// context imports

// npm text imports
import { Span22 } from "../../../../Assets/Text/Text";

// component imports

// styled-components
const BrandsRenderWrapper = styled.span`
  span {
    margin-right: 15px;
  }

  .active {
    color: ${(props) => props.theme.red};
  }
`;

const BrandsRender = ({ brand }) => {
  const { filterBrands, findeClickedBrand, clickedBrands } = useContext(
    GlobalContext
  );

  const [isActive, setIsActive] = useState(clickedBrands.includes(brand));
  return (
    <BrandsRenderWrapper
      onClick={() => {
        filterBrands();
        findeClickedBrand(brand);
        setIsActive(!isActive);
      }}
    >
      <Span22 className={isActive ? "active" : ""}>{brand} </Span22>
    </BrandsRenderWrapper>
  );
};

export default BrandsRender;
