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

const BrandsRender = ({ element, clickedElement, filterType }) => {
  const { findeClickedBrand } = useContext(GlobalContext);

  const [isActive, setIsActive] = useState(clickedElement.includes(element));
  return (
    <BrandsRenderWrapper
      onClick={() => {
        findeClickedBrand(element, filterType);
        // filterBrands();
        setIsActive(!isActive);
      }}
    >
      <Span22 className={isActive ? "active" : ""}>{element} </Span22>
    </BrandsRenderWrapper>
  );
};

export default BrandsRender;
