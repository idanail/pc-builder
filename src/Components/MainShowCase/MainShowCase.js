import React, { useState, useContext, useEffect } from "react";

// npm imports
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useLocation } from "@reach/router";
//Component imports
import NavBar from "../NavBar/NavBar";
import MainTitle from "./MainTitle/MainTitle";
import MainCards from "./MainCards/MainCards";
import Footer from "../Footer/Footer";
import MainFilter from "./MainFilter/MainFilter";

// npm text imports
import { Text17 } from "../../Assets/Text/Text";
// context imports
import { GlobalContext } from "../../Context/GlobalContext";
import FilterSelect from "./MainFilter/FilterSelect/FilterSelect";

//styled-components
const MainShowCaseWrapper = styled.div`
  .sticky-wrapper {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme.main_gray};
    padding-top: 10px;
  }

  .filter-wrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .recomended {
      color: ${(props) => props.theme.text_gray};
    }
    svg {
      font-size: ${(props) => props.theme.iconSize};
      color: ${(props) => props.theme.black};
    }
  }
  hr {
    border: 1px solid #d6d6d6;
  }
  .scroll-to-top {
    position: fixed;
    left: 22%;
    bottom: 8px;
    transform: translateX(-25%);
    width: 50px;
    height: 50px;
    display: flex;
    opacity: ${(props) => (props.scrollToTopActive ? "1" : "0")};
    z-index: ${(props) => (props.scrollToTopActive ? "1" : "-1")};
    transition: 0.2s ease-in;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.red};
    -webkit-box-shadow: 0px 0px 57px -1px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 57px -1px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 57px -1px rgba(255, 255, 255, 1);

    svg {
      color: ${(props) => props.theme.white};
      font-size: ${(props) => props.theme.iconSize};
    }
  }
`;

const MainShowCase = () => {
  const location = useLocation();
  const {
    mainData,
    filteredData,
    getRoute,
    setCurrentType,
    setCurrentColor,
    scrollToTopActive,
    setScrollToTopActive,
    searchBarActive,
    mobileMenuActive,
  } = useContext(GlobalContext);

  const currentComponent = Object.keys(mainData)
    .filter(
      (el) =>
        el.replace(" ", "_").toLowerCase() === location.pathname.split("/")[2]
    )
    .toString();

  const myItems = JSON.parse(localStorage.getItem("myItems"));

  let currentData;

  if (currentComponent === "Motherboard" && myItems.Processor.length === 1) {
    currentData = filteredData[currentComponent].filter(
      (el) => el.socket === myItems.Processor[0].socket
    );
  } else if (
    currentComponent === "CPU Cooler" &&
    myItems.Processor.length === 1
  ) {
    currentData = filteredData[currentComponent].filter((el) =>
      el.socket.includes(myItems.Processor[0].socket)
    );
  } else if (
    currentComponent === "RAM Memory" &&
    myItems.Motherboard.length === 1
  ) {
    currentData = filteredData[currentComponent].filter((el) =>
      myItems.Motherboard[0].support.includes(el.memorySpeed)
    );
  } else {
    currentData = filteredData[currentComponent];
  }

  //Model
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  //Replace the filter with empty values from the previos component
  useEffect(() => {
    getRoute(currentComponent);
    setCurrentType("");
    setCurrentColor("");
  }, [currentComponent]);

  //Back to top when the scroll button is clicked.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrollToTopActive(false);
  };

  //Show scroll to top button on scroll.
  const checkScrollTop = () => {
    if (window.pageYOffset > 600) {
      if (searchBarActive) {
        setScrollToTopActive(false);
      } else {
        setScrollToTopActive(true);
      }
    } else {
      setScrollToTopActive(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  //When search bar is clicked disable the scroll to top button.
  useEffect(() => {
    if (searchBarActive) {
      setScrollToTopActive(false);
    } else if (
      (searchBarActive && !mobileMenuActive) ||
      (!searchBarActive && mobileMenuActive)
    ) {
      setScrollToTopActive(false);
    } else if (window.pageYOffset > 600) {
      setScrollToTopActive(true);
    } else {
      return;
    }
  }, [searchBarActive]);

  //When burger menu is clicked disable the scroll to top button.
  useEffect(() => {
    if (mobileMenuActive) {
      setScrollToTopActive(false);
    } else if (
      (searchBarActive && !mobileMenuActive) ||
      (!searchBarActive && mobileMenuActive)
    ) {
      setScrollToTopActive(false);
    } else if (window.pageYOffset > 600) {
      setScrollToTopActive(true);
    } else {
      return;
    }
  }, [mobileMenuActive]);

  return (
    <MainShowCaseWrapper scrollToTopActive={scrollToTopActive}>
      <NavBar />
      <MainTitle name={currentComponent} />
      <div className="sticky-wrapper">
        <div className="filter-wrapper">
          <Text17 className="recomended">
            Sort by: <FilterSelect />
          </Text17>
          <div onClick={handleOpen}>
            <TuneIcon />
          </div>
        </div>
        <hr />
      </div>
      <MainCards data={currentData} name={currentComponent} />
      <Footer />
      <MainFilter
        open={open}
        currentData={currentData}
        handleClose={handleClose}
      />
      <div className="scroll-to-top" onClick={scrollToTop}>
        <ArrowUpwardIcon />
      </div>
    </MainShowCaseWrapper>
  );
};

export default MainShowCase;
