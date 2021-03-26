import React from "react";

// npm imports
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "@reach/router";

// npm text imports
import { Text17 } from "../../Assets/Text/Text";
import { Paths } from "../../Consts/Paths";

//Context imports

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
      color: ${(props) => props.theme.shoppingCard};
    }
    .nav-bar-amount {
      position: absolute;
      background-color: ${(props) => props.theme.amount};
      p {
        color: ${(props) => props.theme.amountText};
        font-size: ${(props) => props.theme.extraSmallText};
      }
      opacity: 0.5;
      padding: 0 4px;
      left: 65%;
      top: -30%;
      border-radius: 3px;
    }
  }
`;

const NavBar = () => {
  const myItems = JSON.parse(localStorage.getItem("myItems"));

  return (
    <NavBarWrapper>
      <div className="nav-bar">
        <Link to={Paths.paths.myItems}>
          <ShoppingCartIcon />
        </Link>
        {Object.values(myItems).flat().length > 0 && (
          <div className="nav-bar-amount">
            <Text17>{Object.values(myItems).flat().length}</Text17>
          </div>
        )}
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
