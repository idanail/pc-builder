import React from "react";

// npm imports
import styled from "styled-components";

// consts imports

// context imports
import Card from "./Card/Card";
// component imports

// styled-components
const MainCardsWrapper = styled.div`
  width: 90%;
  padding: 30px 0 80px;
  margin: 0 auto;
  // display: flex;
  // flex-wrap: wrap;
  // flex-direction: row;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 40px 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
// component

const MainCards = ({ data, name }) => {
  return (
    <MainCardsWrapper>
      {data.length === 0
        ? "No results found."
        : data.map((el, i) => <Card key={i} el={el} name={name} />)}
    </MainCardsWrapper>
  );
};

export default MainCards;
