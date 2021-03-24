import React, { useContext, useEffect, useState } from "react";

// npm imports
import styled from "styled-components";
import { Link } from "@reach/router";
import Skeleton from "react-loading-skeleton";

// consts imports
import { Paths } from "../../../../Consts/Paths";

// context imports
import { GlobalContext } from "../../../../Context/GlobalContext";

// component imports

// npm text imports
import {
  Heading20,
  Text20,
  Heading17,
  Text17,
  Text14,
} from "../../../../Assets/Text/Text";
import { indigo } from "@material-ui/core/colors";
// styled-components
const CardWrapper = styled.div`
  .d-hide {
    display: none;
  }
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
  const { brand, model, price, thumbnail } = el;
  const [onLoaded, setOnLoaded] = useState(false);

  const handleOnLoad = () => {
    setOnLoaded(true);
  };

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
        className={!onLoaded ? "d-hide" : ""}
      >
        <div className="card-title">
          <Text14>{brand}</Text14>
        </div>
        <div className="card-img">
          <img
            onLoad={handleOnLoad}
            src={`/img/${name.replace(" ", "-").toLowerCase()}/${thumbnail}`}
            alt=""
          />
        </div>
        <div className="card-body">
          <div className="model">
            <Text14>{model}</Text14>
          </div>

          <div className="price">
            <Text14>${price}</Text14>
          </div>
        </div>
      </Link>
      {!onLoaded && <Skeleton />}
    </CardWrapper>
  );
};

export default Card;
