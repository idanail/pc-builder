import { Link } from "@reach/router";
import React, { useContext, useEffect, useRef } from "react";

// npm imports
import styled, { css, withTheme } from "styled-components";
import { Heading20 } from "../../../Assets/Text/Text";
import { Paths } from "../../../Consts/Paths";
import { GlobalContext } from "../../../Context/GlobalContext";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

// consts imports

// context imports

// component imports

// styled-components
const MobileMenuWrapper = styled.div`
  .mobile-menu {
    z-index: -1;
    .navigation-links {
      display: flex;
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
      flex-direction: column;
      align-items: flex-center;
      text-align: center;
      li {
        margin-bottom: 15px;
      }
      li:last-child {
        margin-bottom: 0;
      }

      h5 {
        padding: ${(props) => (props.mobileMenuActive ? "8px 15px" : "15px 0")};
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    position: absolute;
    top: 60%;
    left: -37px;
    /* height: 50vh; */
    z-index: 1;

    .mobile-menu {
      display: ${(props) => (props.mobileMenuActive ? "flex" : "none")};
      background-color: ${(props) => props.theme.gray3};
      padding: 30px 0;
      border-radius: 15px;
      .navigation-links {
        display: flex;
        justify-content: center;
        width: unset;
        height: unset;
        position: unset;
        left: unset;
        bottom: unset;
        background-color: ${(props) => props.theme.gray3};
        overflow: unset;
        align-items: flex-start;
        padding: 0;
        text-align: left;
        display: ${(props) => (props.mobileMenuActive ? "flex" : "none")};
        ${(props) =>
          props.mobileMenuActive &&
          css`
            transition: 0.3s ease-in-out;
          `};
        li {
          width: 100%;
          padding: 10px 0 10px 37px;
          margin-right: 130px;
        }
        li {
          margin-bottom: 0;
        }
        li:hover {
          background-color: ${(props) => props.theme.main_gray};
          h5 {
            color: ${(props) => props.theme.red};
          }
        }
        h5 {
          padding: 0;
        }
      }
    }
  }
`;
// component

const MobileMenu = ({ ref }) => {
  const {
    mainData,
    setCurrentObj,
    clickedPurpose,
    setSearchBarActive,
    mobileMenuActive,
    setMobileMenuActive,
  } = useContext(GlobalContext);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    mobileMenuActive && setSearchBarActive(false);
  }, [mobileMenuActive]);

  // const wrapperRef = useRef();

  // Handle click outside of the mobile menu
  // useEffect(() => {
  //   console.log(wrapperRef);
  //   function handleClickOutside(event) {
  //     !ref && setMobileMenuActive(false);
  //   }
  //   // Bind the event listener
  //   document.addEventListener("mouseup", () => {
  //     handleClickOutside();
  //     setMobileMenuActive(false);
  //   });
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mouseup", () => {
  //       handleClickOutside();
  //       setMobileMenuActive(false);
  //     });
  //   };
  // }, [ref]);

  return (
    <MobileMenuWrapper mobileMenuActive={mobileMenuActive}>
      <div className="mobile-menu">
        <ul
          className="navigation-links"
          // ref={wrapperRef}
        >
          {mainData &&
            Object.keys(mainData).map((el, i) => (
              <li key={i}>
                <Link
                  onClick={() => {
                    clickedPurpose.length > 0
                      ? setCurrentObj({ purpose: clickedPurpose })
                      : setCurrentObj({});

                    setMobileMenuActive(false);
                  }}
                  to={Paths.paths.main.replace(
                    "{COMPONENT}",
                    el.replace(" ", "_").toLocaleLowerCase()
                  )}
                >
                  <Heading20>{width >= 1024 ? el : el.toUpperCase()}</Heading20>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </MobileMenuWrapper>
  );
};

export default withTheme(MobileMenu);
