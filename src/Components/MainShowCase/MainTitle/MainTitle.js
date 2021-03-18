import React from "react";
// npm imports
import styled from "styled-components";

// npm text imports
import { Heading28 } from "../../../Assets/Text/Text";

//styled-components
const MainTitleWrapper = styled.div`
  width: 90%;
  margin: 30px auto 60px;
`;

const MainTitle = ({ name }) => {
  return (
    <MainTitleWrapper className="MainTitle">
      <Heading28>{name}</Heading28>
    </MainTitleWrapper>
  );
};

export default MainTitle;
