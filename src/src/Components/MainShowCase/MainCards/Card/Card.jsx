import React, { useContext } from "react";
// npm imports
import styled from "styled-components";
import { Link } from "@reach/router";
// consts imports
import { Paths } from "../../../../Consts/Paths";

// context imports
import { GlobalContext } from "../../../../Context/GlobalContext";

// component imports

// npm text imports
import { Heading20, Text20 } from "../../../../Assets/Text/Text";
// styled-components
const CardWrapper = styled.div`
  a {
    &:hover {
      text-decoration: none;
    }
  }
  .card-title {
    padding-left: 5px;
    h5 {
      color: ${(props) => props.theme.text_gray};
    }
  }
  .card-img {
    background: ${(props) => props.theme.white};
    border-radius: 16px;
    border: none;
    padding: 15px;
    margin: 15px 0;
    img {
      display: block;
      width: 100%;
      height: 150px;
      @media (min-width: 768px) {
        height: 300px;
      }
    }
  }
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    text-align: center;
    .model {
      margin-bottom: 15px;
    }
  }
`;
// component

const Card = ({ el, name }) => {
  const { route, handleDetails } = useContext(GlobalContext);
  const { img, brand, model, price } = el;
  return (
    <CardWrapper>
      <Link
        to={Paths.paths.details
          .replace("{COMPONENT}", route.replace(" ", "_").toLowerCase())
          .replace(
            "{DETAILS}",
            `${brand.replace(/ /g, "_").toLowerCase()}_${model
              .replace(/ /g, "_")
              .toLowerCase()}`
          )}
        onClick={() => {
          handleDetails(
            `${brand.replace(/ /g, "_").toLowerCase()}_${model
              .replace(/ /g, "_")
              .toLowerCase()}`
          );
        }}
      >
        <div className="card-title">
          <Heading20>{brand}</Heading20>
        </div>
        <div className="card-img">
          <img
            src={`/img/${name.replace(" ", "-").toLowerCase()}/${img}`}
            alt=""
          />
        </div>
        <div className="card-body">
          <div className="model">
            <Heading20>{model}</Heading20>
          </div>

          <div className="price">
            <Text20>${price}</Text20>
          </div>
        </div>
      </Link>
    </CardWrapper>
  );
};

export default Card;
