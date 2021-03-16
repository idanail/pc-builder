import React, { useContext, useEffect, useState } from "react";

// npm imports
import styled from "styled-components";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useParams } from "@reach/router";

// data imports
import { data } from "../../Data/data";

// consts imports

// context imports
import { GlobalContext } from "../../Context/GlobalContext";
import Footer from "../Footer/Footer";

// component imports
import NavBar from "../NavBar/NavBar";
import CheckForPreviousComponent from "./CheckForPreviousComponent/CheckForPreviousComponent";

// npm text imports
import {
  Heading20,
  Heading22,
  Heading17,
  Heading28,
  Text17,
} from "../../Assets/Text/Text";
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
    height: 250px;
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
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: ${(props) => props.theme.white};
      text-align: center;
      position: absolute;
      bottom: -14%;
      right: 8%;
      svg {
        font-size: ${(props) => props.theme.iconSize};
      }
    }
    img {
      padding: 20px 0;
      width: 50%;
      max-height: 100%;
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
    align-items: flex-end;
    justify-content: space-between;
    .price {
      flex: 1;
    }
    .rating {
      display: flex;
      flex: 1.3;
      align-items: flex-end;
      justify-content: space-between;
      .progress-bar-wrapper {
        text-align: center;
        margin-right: 15px;
        h5 {
          margin-bottom: 3px;
          color: ${(props) => props.theme.text_gray};
        }
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
  const { details, addItem, removeItem } = useContext(GlobalContext);
  const [prevUrl, setPrevUrl] = useState(useParams());

  // console.log(`${prevUrl.currentComponent}/${prevUrl.componentDetails}`);

  const currentCategory = Object.keys(data).filter(
    (el) => el.replace(/ /g, "_").toLowerCase() === prevUrl.currentComponent
  );

  const currentObj = data[currentCategory].filter(
    (el) =>
      `${el.brand.replace(/ /g, "_").toLowerCase()}_${el.model
        .replace(/ /g, "_")
        .toLowerCase()}` === prevUrl.componentDetails
  );

  const route = currentCategory.toString();
  const myItems = JSON.parse(localStorage.getItem("myItems"));

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
  } = currentObj[0];
  const procentOfRating = Math.floor((rating / 70000) * 100);

  //Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(myItems.Motherboard[0].slots);

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
              ? myItems["Motherboard"].length === 1 &&
                myItems[route].length >= myItems.Motherboard[0].slots
              : route === "SSD" || route === "Hard Drive"
              ? myItems[route].length >= 2
              : myItems[route].length >= 1
          }
          onClick={() => {
            // CPU Cooler
            route === "CPU Cooler"
              ? myItems["Processor"].length === 1
                ? addItem(currentObj[0])
                : handleOpen()
              : // Motherboard
              route === "Motherboard"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1
                ? addItem(currentObj[0])
                : handleOpen()
              : // Graphic Card
              route === "Graphic Card"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1
                ? addItem(currentObj[0])
                : handleOpen()
              : // RAM Memory
              route === "RAM Memory"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1
                ? addItem(currentObj[0])
                : handleOpen()
              : // SSD
              route === "SSD"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length >= 1
                ? addItem(currentObj[0])
                : handleOpen()
              : // Hard Drive
              route === "Hard Drive"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length >= 1 &&
                myItems["SSD"].length >= 1
                ? addItem(currentObj[0])
                : handleOpen()
              : // Optical Drive
              route === "Optical Drive"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length >= 1 &&
                myItems["SSD"].length >= 1 &&
                myItems["Hard Drive"].length >= 1
                ? addItem(currentObj[0])
                : handleOpen()
              : // Power Supply
              route === "Power Supply"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length >= 1 &&
                myItems["SSD"].length >= 1 &&
                myItems["Hard Drive"].length >= 1 &&
                myItems["Optical Drive"].length === 1
                ? addItem(currentObj[0])
                : handleOpen()
              : // Case
              route === "Case"
              ? myItems["Processor"].length === 1 &&
                myItems["CPU Cooler"].length === 1 &&
                myItems["Motherboard"].length === 1 &&
                myItems["Graphic Card"].length === 1 &&
                myItems["RAM Memory"].length >= 1 &&
                myItems["SSD"].length >= 1 &&
                myItems["Hard Drive"].length >= 1 &&
                myItems["Optical Drive"].length === 1 &&
                myItems["Case"].length === 1
                ? addItem(currentObj[0])
                : handleOpen()
              : // Else
                addItem(currentObj[0]);
          }}
        >
          <AddShoppingCartIcon />
        </button>
      </div>
      <div className="details-model">
        <Heading17 className="brand-detail">{brand}</Heading17>
        <Heading22>{model}</Heading22>
      </div>
      <div className="price-and-rating">
        <div className="price">
          <Heading17>${price}</Heading17>
        </div>
        <div className="rating">
          <div className="progress-bar-wrapper">
            <Heading17>Rating</Heading17>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="rating-num">
            <Heading17>{rating}</Heading17>
          </div>
        </div>
      </div>
      {route === "Processor" ? (
        <>
          <div className="cores-details">
            <div className="left">
              <Text17>Cores: {cores}</Text17>
            </div>
            <div>
              <Text17>Threads: {threads}</Text17>
            </div>
          </div>
          <div className="more-details">
            <div>
              <Text17>Socket: {socket}</Text17>
              <Text17>Clock speed: {clockSpeed}</Text17>
              <Text17>Turbo speed: {turboSpeed}</Text17>
              <Text17>Typical TDP: {tdpTypical} W &sup3;</Text17>
            </div>
          </div>
        </>
      ) : route === "CPU Cooler" ? (
        <div className="more-details">
          <Text17>Type: {type}</Text17>
          <Text17>Color: {color}</Text17>
          <Text17>Fan quantity: {fanQuantity}</Text17>
          <Text17>Fan speed: {fanSpeed}</Text17>
          <Text17>Fan noise level: {fanNoiseLevel}</Text17>
          <Text17>Warranty: {warranty}</Text17>
          <Text17 className="socket">
            Sockets:
            {socket && socket.map((el, i) => <span key={i}> {el}, </span>)}
          </Text17>
        </div>
      ) : route === "Motherboard" ? (
        <div className="more-details">
          <Text17>Socket: {socket}</Text17>
          <Text17>Form factor: {formFactor}</Text17>
          <Text17>Max capacity: {maxCapacity}</Text17>
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
