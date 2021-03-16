import React, { useState, useContext, useEffect } from "react";

// npm imports
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
// text inports
import { Text20, Text22, Heading20 } from "../../Assets/Text/Text";

// consts imports

// context imports
import { GlobalContext } from "../../Context/GlobalContext";
import ItemDelete from "./ItemDelete/ItemDelete";

// component imports

// styled-components
const MyItemsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  .my-items-navbar {
    text-align: right;
    padding: 18px 0px;
  }
  .my-component-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;
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
    margin-bottom: 40px;
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
`;
// component

const MyItems = (props) => {
  const { deleteItem } = useContext(GlobalContext);
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
        <Text20>save</Text20>
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
            <Text22>Processor</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
            <Text22>CPU&nbsp;Cooler</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
            <Text22>Motherboard</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
            <Text22>Graphic&nbsp;Card</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
            <Text22>RAM&nbsp;Memory</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
            <Text22>SSD</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
            <Text22>Hard&nbsp;Drive</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
            <Text22>Optical&nbsp;Drive</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
            <Text22>Power&nbsp;Supply</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
            <Text22>Case</Text22>
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
            <Text22 className="my-item-brand">{el.brand}</Text22>
            <Text22 className="my-item-model">{el.model}</Text22>
            <Heading20 className="my-item-price">${el.price}</Heading20>
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
