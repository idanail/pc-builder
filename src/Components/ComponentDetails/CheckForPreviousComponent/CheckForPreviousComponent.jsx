import React, { useContext } from "react";

// npm imports
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// consts imports

// context imports
import { GlobalContext } from "../../../Context/GlobalContext";

// npm text imports
import { Text30, Text24, Text20 } from "../../../Assets/Text/Text";

// component imports

// styled-components
const CheckForPreviousComponentWrapper = styled.div``;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    outline: "none",
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
  },
  modalTitle: {
    marginTop: "10px",
    marginBottom: "20px",
  },
  marginB: {
    marginBottom: "30px",
  },
  marginBSmall: {
    marginBottom: "12px",
  },
  wrapper: {
    textAlign: "right",
  },
  buttons: {
    background: "none",
    padding: "3px 15px",
    border: "none",
    borderRadius: "25px",
    marginLeft: "2px",
    width: "92px",
  },
}));

// component
const CheckForPreviousComponent = ({ open, handleClose, category }) => {
  const { handleItems } = useContext(GlobalContext);
  const myItems = JSON.parse(localStorage.getItem("myItems"));
  const classes = useStyles();

  return (
    <CheckForPreviousComponentWrapper>
      <Modal
        id="filter-modal"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Text24 className={classes.modalTitle} id="transition-modal-title">
              Note:
            </Text24>
            <div className={classes.marginB}>
              {
                // CPU Cooler
                category === "CPU Cooler" ? (
                  myItems["Processor"].length === 0 ? (
                    <Text20 className={classes.marginBSmall}>
                      Please add a Processor.
                    </Text20>
                  ) : (
                    ""
                  )
                ) : // Motherboard
                category === "Motherboard" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Processor</Text20>
                        </li>
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Text20 className={classes.marginBSmall}>
                      Please add a CPU Cooler"
                    </Text20>
                  )
                ) : // Graphic Card
                category === "Graphic Card" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Processor</Text20>
                        </li>
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Text20 className={classes.marginBSmall}>
                      Please add a Motherboard.
                    </Text20>
                  )
                ) : // RAM Memory
                category === "RAM Memory" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Processor</Text20>
                        </li>
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Text20 className={classes.marginBSmall}>
                      Please add a Graphic Card.
                    </Text20>
                  )
                ) : // SSD
                category === "SSD" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Processor</Text20>
                        </li>
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Text20 className={classes.marginBSmall}>
                      Please add a RAM Memory.
                    </Text20>
                  )
                ) : // Hard Drive
                category === "Hard Drive" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 &&
                  myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Processor</Text20>
                        </li>
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Text20 className={classes.marginBSmall}>
                      Please add an SSD.
                    </Text20>
                  )
                ) : // Optical Drive
                category === "Optical Drive" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 &&
                  myItems["SSD"].length === 0 &&
                  myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Processor</Text20>
                        </li>
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Text20 className={classes.marginBSmall}>
                      Please add a Hard Drive.
                    </Text20>
                  )
                ) : // Power Supply
                category === "Power Supply" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 &&
                  myItems["SSD"].length === 0 &&
                  myItems["Hard Drive"].length === 0 &&
                  myItems["Optical Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Processor</Text20>
                        </li>
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Text20 className={classes.marginBSmall}>
                      Please add an Optical Drive.
                    </Text20>
                  )
                ) : // Case
                category === "Case" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 &&
                  myItems["SSD"].length === 0 &&
                  myItems["Hard Drive"].length === 0 &&
                  myItems["Optical Drive"].length === 0 &&
                  myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Processor</Text20>
                        </li>
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                        <li>
                          <Text20>Power Supply</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>CPU Cooler</Text20>
                        </li>
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                        <li>
                          <Text20>Power Supply</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Motherboard</Text20>
                        </li>
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                        <li>
                          <Text20>Power Supply</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Graphic Card</Text20>
                        </li>
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                        <li>
                          <Text20>Power Supply</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>RAM Memory</Text20>
                        </li>
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                        <li>
                          <Text20>Power Supply</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>SSD</Text20>
                        </li>
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                        <li>
                          <Text20>Power Supply</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Hard Drive"].length === 0 &&
                    myItems["Optical Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Hard Drive</Text20>
                        </li>
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                        <li>
                          <Text20>Power Supply</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Optical Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Text20>Optical Drive</Text20>
                        </li>
                        <li>
                          <Text20>Power Supply</Text20>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Power Supply"].length === 0 ? (
                    <Text20 className={classes.marginBSmall}>
                      Please add a Power Supply.
                    </Text20>
                  ) : (
                    ""
                  )
                ) : (
                  // End
                  ""
                )
              }

              {/* Removing the {category} will reset all components. */}
            </div>
            <div className={classes.wrapper}>
              <button className={classes.buttons} onClick={() => handleClose()}>
                <Text20>OK</Text20>
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </CheckForPreviousComponentWrapper>
  );
};

export default CheckForPreviousComponent;
