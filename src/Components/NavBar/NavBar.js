import React, { useContext, useEffect } from "react";

// npm imports
import styled, { css } from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "@reach/router";

// npm text imports
import { Text17 } from "../../Assets/Text/Text";
import { Paths } from "../../Consts/Paths";
import MainTitle from "../MainShowCase/MainTitle/MainTitle";
import { GlobalContext } from "../../Context/GlobalContext";
import DarkModeIcon from "../Footer/DarkModeIcon/DarkModeIcon";

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
    .main-title-wrapper {
      display: none;
    }
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
      padding: 0 4px;
      left: 65%;
      top: -30%;
      border-radius: 3px;
    }
    .dark-mode-icon {
      display: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    .nav-bar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .main-title-wrapper {
        display: flex;
        justify-content: space-between;
        width: 240px;
        cursor: pointer;
        .main-title-dropdown {
          display: flex;
          align-items: center;
          flex-direction: column;
          .active {
            svg {
              transform: rotate(180deg);
            }
          }
          span {
            svg {
              transition: 0.2s ease-in-out;
            }
            color: white;
            margin-left: 20px;
          }
        }
      }
      .icons-wrapper {
        display: flex;
      }
      svg {
        margin: 10px auto 40px;
      }
      .dark-mode-icon {
        display: flex;
        margin-right: 20px;
      }
    }
  }
`;

const NavBar = ({ currentComponent }) => {
  const myItems = JSON.parse(localStorage.getItem("myItems"));

  const {
    setSearchBarActive,
    mobileMenuActive,
    setMobileMenuActive,
  } = useContext(GlobalContext);

  useEffect(() => {
    mobileMenuActive && setSearchBarActive(false);
  }, [mobileMenuActive]);

  return (
    <NavBarWrapper>
      <div className="nav-bar">
        <div
          className="main-title-wrapper"
          onClick={() => {
            setMobileMenuActive(!mobileMenuActive);
          }}
        >
          <MainTitle name={currentComponent} />
          <div className="main-title-dropdown">
            <span className={mobileMenuActive ? "active" : ""}>
              <ArrowDropDownIcon />
            </span>
          </div>
        </div>
        <div className="icons-wrapper">
          <div className="dark-mode-icon">
            <DarkModeIcon />
          </div>
          <Link to={Paths.paths.myItems}>
            <ShoppingCartIcon />
          </Link>
        </div>
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
