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
import { Text24, Text20 } from "../../../Assets/Text/Text";
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
    marginTop: "10px",
    marginBottom: "20px",
  },
  marginB: {
    marginBottom: "30px",
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
            <Text24 className={classes.modalTitle} id="transition-modal-title">
              Warning
            </Text24>
            <Text20 className={classes.marginB}>
              Removing the {category} will reset all components.
            </Text20>
            <div className={classes.wrapper}>
              <button className={classes.buttons} onClick={() => handleClose()}>
                <Text20>CANCEL</Text20>
              </button>
              <button
                className={classes.buttons}
                onClick={() => {
                  handleItems();
                  handleClose();
                }}
              >
                <Text20>DELETE</Text20>
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </ItemDeleteWrapper>
  );
};

export default ItemDelete;
