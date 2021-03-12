import React from "react";
// npm imports
import styled from "styled-components";

// npm text imports
import { Heading35 } from "../../../Assets/Text/Text";

//styled-components
const MainTitleWrapper = styled.div`
  width: 90%;
  margin: 30px auto 60px;
`;

const MainTitle = ({ name }) => {
  return (
    <MainTitleWrapper className="MainTitle">
      <Heading35>{name}</Heading35>
    </MainTitleWrapper>
  );
};

export default MainTitle;
