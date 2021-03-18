import React, { useContext, useState } from "react";

// npm imports
import styled from "styled-components";
import { GlobalContext } from "../../../../Context/GlobalContext";

// consts imports

// context imports

// npm text imports
import { Span22, Span14 } from "../../../../Assets/Text/Text";

// component imports

// styled-components
const BrandsRenderWrapper = styled.span`
  span {
    margin-right: 15px;
  }

  .active {
    color: ${(props) => props.theme.red};
    background-color: ${(props) => props.theme.main_gray};
  }

  .rendered-element {
    display: block;
    width: 100% + 10px;
    padding: 10px 10px;
    margin: 0px -10px 3px;
  }
`;

const BrandsRender = ({ element, clickedElement, filterType }) => {
  const { findClickedElement } = useContext(GlobalContext);

  const [isActive, setIsActive] = useState(clickedElement.includes(element));
  return (
    <BrandsRenderWrapper
      onClick={() => {
        findClickedElement(element, filterType);
        setIsActive(!isActive);
      }}
    >
      <span className={`rendered-element ${isActive ? "active" : ""}`}>
        <Span14 className={`${isActive ? "active" : ""}`}>{element}</Span14>
      </span>
    </BrandsRenderWrapper>
  );
};

export default BrandsRender;
