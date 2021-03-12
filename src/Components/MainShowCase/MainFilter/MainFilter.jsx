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

// component imports
import BrandsRender from "./BrandsRender/BrandsRender";
import FilterSelect from "./FilterSelect/FilterSelect";

// npm text imports
import { Text30, Text24, Text22 } from "../../../Assets/Text/Text";

// styled-components
const MainFilterWrapper = styled.div``;

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
    marginBottom: "10px",
  },
  marginB: {
    marginBottom: "10px",
  },
}));

const MainFilter = ({ open, handleClose, currentData }) => {
  const { brands, type, color } = useContext(GlobalContext);
  const classes = useStyles();
  return (
    <MainFilterWrapper>
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
              Filters
            </Text24>
            <div className="brand">
              <Text22 className={classes.marginB}>Brand:</Text22>
              {brands &&
                brands.map((el, i) => <BrandsRender key={i} brand={el} />)}
            </div>
            <div className="filter-select">
              {currentData[0].type && (
                <FilterSelect query={type} title="Type" />
              )}
              {currentData[0].color && (
                <FilterSelect query={color} title="Color" />
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </MainFilterWrapper>
  );
};

export default MainFilter;
