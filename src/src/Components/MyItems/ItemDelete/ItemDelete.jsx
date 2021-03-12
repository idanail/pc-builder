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
const ItemDeleteWrapper = styled.div``;

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
    textAlign: "center",
    marginBottom: "20px",
  },
  marginB: {
    marginBottom: "30px",
  },
  wrapper: {
    textAlign: "center",
  },
  buttons: {
    background: "#F7F7F7",
    padding: "3px 15px",
    border: "1px solid#707070",
    borderRadius: "25px",
    marginLeft: "10px",
    width: "92px",
  },
}));

// component
const ItemDelete = ({ open, handleClose, category, id }) => {
  const { deleteItem, handleItems } = useContext(GlobalContext);
  const classes = useStyles();
  return (
    <ItemDeleteWrapper>
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
            <Text30 className={classes.modalTitle} id="transition-modal-title">
              WARNING:
            </Text30>
            <Text24 className={classes.marginB}>
              Removing the {category} will reset all components.
            </Text24>
            <div className={classes.wrapper}>
              <button className={classes.buttons} onClick={() => handleClose()}>
                <Text20>Cancel</Text20>
              </button>
              <button
                className={classes.buttons}
                onClick={() => {
                  handleItems();
                  handleClose();
                }}
              >
                <Text20>OK</Text20>
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </ItemDeleteWrapper>
  );
};

export default ItemDelete;
