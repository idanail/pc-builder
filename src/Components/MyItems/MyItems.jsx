import React, { useState, useContext, useEffect } from "react";

// npm imports
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import PowerIcon from "@material-ui/icons/Power";

// text inports
import { Text20, Text22, Text14, Text17 } from "../../Assets/Text/Text";

// consts imports

// context imports
import { GlobalContext } from "../../Context/GlobalContext";
import ItemDelete from "./ItemDelete/ItemDelete";
import MainTitle from "../MainShowCase/MainTitle/MainTitle";

// component imports

// styled-components
const MyItemsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  .my-items-navbar {
    text-align: right;
    padding: 25px 0px;
  }
  .my-component-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    .component-name-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 15px;
      .checked {
        flex-basis: 20%;
        margin-right: 10px;
      }
      .component-name {
        flex-basis: 80%;
      }
    }
    hr {
      width: 100%;
    }
  }
  .component-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .component-img {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme.white};
      border-radius: 15px;
      padding: 0 10px;
      height: 120px;
      flex-basis: 35%;
      margin-right: 40px;
      img {
        display: block;
        width: 100%;
      }
    }
    .component-detail {
      flex-basis: 65%;
      .my-item-brand {
        color: ${(props) => props.theme.text_gray};
        margin-bottom: 10px;
      }
      .my-item-model {
        margin-bottom: 10px;
      }
      .delete-item {
        text-align: right;
        button {
          border: none;
          background: none;
          svg {
            font-size: 27px;
          }
        }
      }
    }
  }
  .power-calculator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .total-wattage {
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }
  }
`;
// component

const MyItems = (props) => {
  const { deleteItem, totalPower } = useContext(GlobalContext);
  const [clickedCategory, setClickedCategory] = useState("");
  const [clickedId, setClickedId] = useState("");
  const myItems = JSON.parse(localStorage.getItem("myItems"));

  //Model
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MyItemsWrapper>
      <div className="my-items-navbar">
        <Text17>SAVE</Text17>
      </div>
      <div>
        <MainTitle
          name={`${Object.values(myItems).flat().length}/${
            Object.keys(myItems).flat().length
          } 
          parts piched`}
        />
        <div className="power-calculator">
          <Text17>For this build you will need</Text17>
          <div className="total-wattage">
            <PowerIcon />
            <Text17>{totalPower}W</Text17>
          </div>
        </div>
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-processor">
            <CheckIcon
              style={{
                visibility: `${
                  myItems.Processor.length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>Processor</Text17>
          </div>
        </div>
        <hr />
      </div>
      {myItems.Processor.map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
            <div className="delete-item">
              <button
                onClick={() => {
                  setClickedCategory(el.category);
                  setClickedId(el.id);
                  handleOpen();
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-cpu-cooler">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["CPU Cooler"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>CPU&nbsp;Cooler</Text17>
          </div>
        </div>

        <hr />
      </div>
      {myItems["CPU Cooler"].map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
            <div className="delete-item">
              <button
                onClick={() => {
                  deleteItem(el.category, el.id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-motherboard">
            <CheckIcon
              style={{
                visibility: `${
                  myItems.Motherboard.length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>Motherboard</Text17>
          </div>
        </div>
        <hr />
      </div>
      {myItems.Motherboard.map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
            <div className="delete-item">
              <button
                onClick={() => {
                  setClickedCategory(el.category);
                  setClickedId(el.id);
                  handleOpen();
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-graphic-card">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["Graphic Card"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>Graphic&nbsp;Card</Text17>
          </div>
        </div>
        <hr />
      </div>
      {myItems["Graphic Card"].map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
            <div className="delete-item">
              <button
                onClick={() => {
                  deleteItem(el.category, el.id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-ram-memory">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["RAM Memory"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>RAM&nbsp;Memory</Text17>
          </div>
        </div>

        <hr />
      </div>
      {myItems["RAM Memory"].map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
            <div className="delete-item">
              <button
                onClick={() => {
                  deleteItem(el.category, el.id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-ssd">
            <CheckIcon
              style={{
                visibility: `${
                  myItems.SSD.length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>SSD</Text17>
          </div>
        </div>
        <hr />
      </div>
      {myItems.SSD.map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
            <div className="delete-item">
              <button
                onClick={() => {
                  deleteItem(el.category, el.id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-hard-drive">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["Hard Drive"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>Hard&nbsp;Drive</Text17>
          </div>
        </div>
        <hr />
      </div>
      {myItems["Hard Drive"].map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
            <div className="delete-item">
              <button
                onClick={() => {
                  deleteItem(el.category, el.id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-optical-drive">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["Optical Drive"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>Optical&nbsp;Drive</Text17>
          </div>
        </div>

        <hr />
      </div>
      {myItems["Optical Drive"].map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
          </div>
        </div>
      ))}
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-power-supply">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["Power Supply"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>Power&nbsp;Supply</Text17>
          </div>
        </div>
        <hr />
      </div>
      {myItems["Power Supply"].map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
            <div className="delete-item">
              <button
                onClick={() => {
                  deleteItem(el.category, el.id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-case">
            <CheckIcon
              style={{
                visibility: `${
                  myItems.Case.length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Text17>Case</Text17>
          </div>
        </div>
        <hr />
      </div>
      {myItems.Case.map((el, i) => (
        <div key={i} className="component-wrapper">
          <div className="component-img">
            <img
              src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                el.img
              }`}
              alt=""
            />
          </div>
          <div className="component-detail">
            <Text14 className="my-item-brand">{el.brand}</Text14>
            <Text14 className="my-item-model">{el.model}</Text14>
            <Text14 className="my-item-price">${el.price}</Text14>
            <div className="delete-item">
              <button
                onClick={() => {
                  deleteItem(el.category, el.id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <ItemDelete
        open={open}
        handleClose={handleClose}
        category={clickedCategory}
        id={clickedId}
      />
    </MyItemsWrapper>
  );
};

export default MyItems;
