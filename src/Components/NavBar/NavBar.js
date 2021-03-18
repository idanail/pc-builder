import React, { useContext, useEffect, useState } from "react";

// npm imports
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "@reach/router";

// npm text imports
import { Heading17, Text17 } from "../../Assets/Text/Text";
import { Paths } from "../../Consts/Paths";
//Context imports
import { GlobalContext } from "../../Context/GlobalContext";
//Component imports

//styled-components
const NavBarWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 18px 0px;
  .nav-bar {
    position: relative;
    svg {
      font-size: ${(props) => props.theme.iconSize};
      color: ${(props) => props.theme.red};
    }
    .nav-bar-amount {
      position: absolute;
      left: 100%;
      top: -30%;
    }
  }
`;

const NavBar = () => {
  // const { myItems } = useContext(GlobalContext);
  const myItems = JSON.parse(localStorage.getItem("myItems"));

  return (
    <NavBarWrapper>
      <div className="nav-bar">
        <Link to={Paths.paths.myItems}>
          <ShoppingCartIcon />
        </Link>
        <div className="nav-bar-amount">
          <Text17>{Object.values(myItems).flat().length}</Text17>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
