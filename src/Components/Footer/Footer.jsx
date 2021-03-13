import React, { useContext, useState } from "react";

// npm imports
import styled, { css, withTheme } from "styled-components";
import { Link } from "@reach/router";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
// consts imports
import { Paths } from "../../Consts/Paths";

// npm text imports
import { Heading20 } from "../../Assets/Text/Text";

// context imports
import { GlobalContext } from "../../Context/GlobalContext";
// component imports
import SearchBar from "./SearchBar/SearchBar";

// styled-components
const FooterWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: -0.3%;
  left: 0;
  width: 100%;

  .search-bar {
    transition: 0.2s ease-in;
    background-color: ${(props) => props.theme.red};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51%;
    position: absolute;
    height: 100%;
    bottom: 0;
    z-index: -1;
    opacity: ${(props) => (props.searchBarActive ? "1" : "0")};
    left: ${(props) => (props.searchBarActive ? "0" : "100%")};
    // left: ${(props) => props.searchBarActive && "-100%"};
    input {
      width: 90%;
      padding: 8px;
      border: none;
      border-radius: 5px;
      color: ${(props) => props.theme.black};
    }
  }

  .mobile-menu {
    z-index: -1;
    .navigation-links {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 50px;
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      bottom: ${(props) => (props.mobileMenuActive ? "0%" : "-110%")};
      background-color: ${(props) => props.theme.main_gray};
      ${(props) =>
        props.mobileMenuActive &&
        css`
          transition: bottom 0.3s ease-in-out;
        `}
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: flex-center;
      text-align: center;
      li {
        margin-bottom: 15px;
      }
      h5 {
        padding: ${(props) => (props.mobileMenuActive ? "8px 15px" : "15px 0")};
      }
    }
  }

  .right-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.red};
    width: 50%;
    border-top-left-radius: ${(props) =>
      props.searchBarActive ? "0px" : "40px"};
    padding: 18px 25px;
    position: relative;
    transition: 0.2s ease-in;
    .search-icon {
      svg {
        font-size: 27px;
      }
    }
    .info {
      svg {
        font-size: 27px;
      }
    }
    .burger-menu {
      display: flex;
      flex-direction: column;
      span {
        width: 26px;
        height: 3px;
        background-color: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.white};
        margin: 3px 0;
        border-radius: 2px;
        transition: 0.5s;
      }
      span.active:nth-child(1) {
        transform: rotateY(180deg) rotateZ(45deg) translate(3px, 3px);
      }
      span.active:nth-child(2) {
        transform: rotateY(180deg) rotateZ(-45deg) translate(3px, -3px);
      }
    }
  }
`;
// component

const Footer = (props) => {
  const { mainData } = useContext(GlobalContext);

  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const [searchBarActive, setSearchBarActive] = useState(false);

  return (
    <FooterWrapper
      mobileMenuActive={mobileMenuActive}
      searchBarActive={searchBarActive}
      className="footer"
    >
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="mobile-menu">
        <ul className="navigation-links">
          {mainData &&
            Object.keys(mainData).map((el, i) => (
              <li key={i}>
                <Link
                  onClick={() => setMobileMenuActive(false)}
                  to={Paths.paths.main.replace(
                    "{COMPONENT}",
                    el.replace(" ", "_").toLocaleLowerCase()
                  )}
                >
                  <Heading20>{el.toUpperCase()}</Heading20>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="right-wrapper">
        <div
          className="search-icon"
          onClick={() => {
            setSearchBarActive(!searchBarActive);
          }}
        >
          <SearchIcon />
        </div>
        <div className="info">
          <HelpOutlineIcon />
        </div>
        <div
          className="burger-menu"
          onClick={() => {
            setMobileMenuActive(!mobileMenuActive);
          }}
        >
          <span className={mobileMenuActive ? "active" : ""}></span>
          <span className={mobileMenuActive ? "active" : ""}></span>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default withTheme(Footer);
