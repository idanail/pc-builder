import React from "react";
// npm imports
import styled from "styled-components";

// npm text imports
import { Heading28 } from "../../../Assets/Text/Text";

//styled-components
const MainTitleWrapper = styled.div`
  .MainTitle {
    width: 90%;
    margin: 30px auto 60px;
  }
  .MainTitleMyItems {
    width: 100%;
    margin: 30px auto 30px;
  }
`;

const MainTitle = ({ name }) => {
  const myItems = JSON.parse(localStorage.getItem("myItems"));
  return (
    <MainTitleWrapper>
      <div
        className={
          Object.keys(myItems).includes(name) ? "MainTitle" : "MainTitleMyItems"
        }
      >
        <Heading28>{name}</Heading28>
      </div>
    </MainTitleWrapper>
  );
};

export default MainTitle;
