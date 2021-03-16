import React, { useState, useContext, useEffect } from "react";

// npm imports
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import { useLocation } from "@reach/router";

//Component imports
import NavBar from "../NavBar/NavBar";
import MainTitle from "./MainTitle/MainTitle";
import MainCards from "./MainCards/MainCards";
import Footer from "../Footer/Footer";
import MainFilter from "./MainFilter/MainFilter";

// npm text imports
import { Heading17 } from "../../Assets/Text/Text";
// context imports
import { GlobalContext } from "../../Context/GlobalContext";

//styled-components
const MainShowCaseWrapper = styled.div`
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
    border: 1px solid ${(props) => props.theme.text_gray};
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
    myItems.Processor.length === 1
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

  useEffect(() => {
    getRoute(currentComponent);
    setCurrentType("");
    setCurrentColor("");
  }, [currentComponent]);
  return (
    <MainShowCaseWrapper>
      <NavBar />
      <MainTitle name={currentComponent} />
      <div className="filter-wrapper">
        <Heading17 className="recomended">Recomended for you</Heading17>
        <div onClick={handleOpen}>
          <TuneIcon />
        </div>
      </div>
      <hr />
      <MainCards data={currentData} name={currentComponent} />
      <Footer />
      <MainFilter
        open={open}
        currentData={currentData}
        handleClose={handleClose}
      />
    </MainShowCaseWrapper>
  );
};

export default MainShowCase;
