import React, { useContext, useEffect, useState } from "react";

// npm imports
import styled from "styled-components";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// consts imports

// context imports
import { GlobalContext } from "../../Context/GlobalContext";
import Footer from "../Footer/Footer";

// component imports
import NavBar from "../NavBar/NavBar";
import CheckForPreviousComponent from "./CheckForPreviousComponent/CheckForPreviousComponent";

// npm text imports
import { Heading20, Heading28, Text20 } from "../../Assets/Text/Text";
import { useLocation } from "@reach/router";

// styled-components
const ComponentDetailsWrapper = styled.div`
  .cores-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 20px;
    .left {
      margin-right: 15px;
    }
    p {
      margin-bottom: 4px;
    }
  }
  .more-details {
    padding-bottom: 110px;
    width: 90%;
    margin: 0 auto;
    p {
      margin-bottom: 4px;
    }
  }
  .details-img {
    position: relative;
    width: 100%;
    background: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    .add-to-cart {
      border: none;
      background: linear-gradient(
        338deg,
        ${(props) => props.theme.pink},
        ${(props) => props.theme.red}
      );
      width: 76px;
      height: 76px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: ${(props) => props.theme.white};
      text-align: center;
      position: absolute;
      bottom: -9%;
      right: 8%;
      svg {
        font-size: 35px;
      }
    }
    img {
      padding: 20px 0;
      width: 90%;
    }
  }
  .details-model {
    width: 90%;
    padding-top: 30px;
    margin: 0 auto;
    .brand-detail {
      color: ${(props) => props.theme.text_gray};
      margin-bottom: 10px;
    }
  }
  .price-and-rating {
    width: 90%;
    padding-bottom: 60px;
    padding-top: 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price {
      flex: 1;
    }
    .rating {
      display: flex;
      flex: 1.3;
      align-items: center;
      justify-content: space-between;
      .progress-bar-wrapper {
        .progress-bar {
          width: 150px;
          border: 1px solid ${(props) => props.theme.dark_gray};
          border-radius: 25px;
          .progress {
            padding: 8px;
            max-width: ${(props) => props.rating}%;
            background: linear-gradient(
              157deg,
              ${(props) => props.theme.pink},
              ${(props) => props.theme.red}
            );
            border-radius: 25px;
          }
        }
      }
    }
  }
`;
// component

const ComponentDetails = (props) => {
  const { route, details, myItems, addItem, removeItem } = useContext(
    GlobalContext
  );

  const {
    img,
    brand,
    model,
    price,
    rating,
    socket,
    clockSpeed,
    turboSpeed,
    cores,
    threads,
    tdpTypical,
    type,
    color,
    fanQuantity,
    fanSpeed,
    fanNoiseLevel,
    warranty,
    formFactor,
    maxCapacity,
    cpuSupport,
  } = details[0];
  const procentOfRating = Math.floor((rating / 70000) * 100);

  //Model
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <ComponentDetailsWrapper rating={procentOfRating}>
      <NavBar />
      <div className="details-img">
        <img
          src={`/img/${route.replace(" ", "-").toLowerCase()}/${img}`}
          alt=""
        />

        <button
          className="add-to-cart"
          disabled={
            route === "RAM Memory"
              ? myItems[route].length >= myItems.Motherboard.slots
              : route === "SSD" || route === "Hard Drive"
              ? myItems[route].length >= 2
              : myItems[route].length >= 1
          }
          onClick={() => {
            // CPU Cooler
            route === "CPU Cooler"
              ? myItems["Processor"].length === 1
                ? addItem(details[0])
                : handleOpen()
              : // Motherboard
              route === "Motherboard"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1
                ? addItem(details[0])
                : handleOpen()
              : // Graphic Card
              route === "Graphic Card"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1
                ? addItem(details[0])
                : handleOpen()
              : // RAM Memory
              route === "RAM Memory"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1
                ? addItem(details[0])
                : handleOpen()
              : // SSD
              route === "SSD"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length === 1
                ? addItem(details[0])
                : handleOpen()
              : // Hard Drive
              route === "Hard Drive"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length === 1 &&
                myItems["SSD"].length === 1
                ? addItem(details[0])
                : handleOpen()
              : // Optical Drive
              route === "Optical Drive"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length === 1 &&
                myItems["SSD"].length === 1 &&
                myItems["Hard Drive"].length === 1
                ? addItem(details[0])
                : handleOpen()
              : // Power Supply
              route === "Power Supply"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length === 1 &&
                myItems["SSD"].length === 1 &&
                myItems["Hard Drive"].length === 1 &&
                myItems["Optical Drive"].length === 1
                ? addItem(details[0])
                : handleOpen()
              : // Case
              route === "Case"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length === 1 &&
                myItems["SSD"].length === 1 &&
                myItems["Hard Drive"].length === 1 &&
                myItems["Optical Drive"].length === 1 &&
                myItems["Case"].length === 1
                ? addItem(details[0])
                : handleOpen()
              : // Else
                addItem(details[0]);
          }}
        >
          <AddShoppingCartIcon />
        </button>
      </div>
      <div className="details-model">
        <Heading20 className="brand-detail">{brand}</Heading20>
        <Heading28>{model}</Heading28>
      </div>
      <div className="price-and-rating">
        <div className="price">
          <Heading20>${price}</Heading20>
        </div>
        <div className="rating">
          <div className="progress-bar-wrapper">
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="rating-num">
            <Heading20>{rating}</Heading20>
          </div>
        </div>
      </div>
      {route === "Processor" ? (
        <>
          <div className="cores-details">
            <div className="left">
              <Text20>Cores: {cores}</Text20>
            </div>
            <div>
              <Text20>Threads: {threads}</Text20>
            </div>
          </div>
          <div className="more-details">
            <div>
              <Text20>Socket: {socket}</Text20>
              <Text20>Clock speed: {clockSpeed}</Text20>
              <Text20>Turbo speed: {turboSpeed}</Text20>
              <Text20>Typical TDP: {tdpTypical} W &sup3;</Text20>
            </div>
          </div>
        </>
      ) : route === "CPU Cooler" ? (
        <div className="more-details">
          <Text20>Type: {type}</Text20>
          <Text20>Color: {color}</Text20>
          <Text20>Fan quantity: {fanQuantity}</Text20>
          <Text20>Fan speed: {fanSpeed}</Text20>
          <Text20>Fan noise level: {fanNoiseLevel}</Text20>
          <Text20>Warranty: {warranty}</Text20>
          <Text20 className="socket">
            Sockets:
            {socket && socket.map((el, i) => <span key={i}> {el}, </span>)}
          </Text20>
        </div>
      ) : route === "Motherboard" ? (
        <div className="more-details">
          <Text20>Socket: {socket}</Text20>
          <Text20>Form factor: {formFactor}</Text20>
          <Text20>Max capacity: {maxCapacity}</Text20>
        </div>
      ) : (
        <div className=""></div>
      )}
      <Footer />
      <CheckForPreviousComponent
        open={open}
        handleClose={handleClose}
        category={route}
      />
    </ComponentDetailsWrapper>
  );
};

export default ComponentDetails;
