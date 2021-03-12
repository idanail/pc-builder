import React from "react";
// npm imports
import styled from "styled-components";

// npm text imports
import { Heading47 } from "../../../Assets/Text/Text";

//styled-components
const MainTitleWrapper = styled.div`
  width: 90%;
  margin: 30px auto 60px;
`;

const MainTitle = ({ name }) => {
  return (
    <MainTitleWrapper className="MainTitle">
      <Heading47>{name}</Heading47>
    </MainTitleWrapper>
  );
};

export default MainTitle;
