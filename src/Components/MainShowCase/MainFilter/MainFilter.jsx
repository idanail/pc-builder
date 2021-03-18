import React, { useContext } from "react";

// npm imports
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// consts imports

// context imports
import { GlobalContext } from "../../../Context/GlobalContext";

// component imports
import FilterRender from "./FilterRender/FilterRender";
import PriceRange from "./PriceRange/PriceRange";

// npm text imports
import { Text30, Text17, Text14 } from "../../../Assets/Text/Text";
import { red } from "@material-ui/core/colors";

// styled-components
const MainFilterWrapper = styled.div``;

const useStyles = makeStyles((theme) => ({
  // Accordion
  root: {
    width: "100%",
  },

  heading: {
    fontSize: "14px",
    color: "black",
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionStyle: {
    boxShadow: "none !important",
    position: "unset !important",
    borderBottom: `1px solid #D2D4D8`,
    margin: "0 !important",
    borderRadius: "0 !important",
  },
  accordionSummary: {
    padding: "0 !important",
  },
  borderTop: {
    borderTop: `1px solid #D2D4D8`,
  },
  // Modal
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
  marginB20: {
    marginBottom: "20px",
  },
  marginT: {
    marginTop: "20px",
  },
  resetButton: {
    width: "100%",
    textAlign: "right",
  },
}));

const MainFilter = ({ open, handleClose, currentData }) => {
  const {
    mainData,
    brands,
    type,
    color,
    clickedBrands,
    clickedTypes,
    clickedColors,
    handleReset,
  } = useContext(GlobalContext);
  const classes = useStyles();
  const route = localStorage.getItem("route");

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
            <Text17
              className={`${classes.modalTitle} ${classes.marginB20}`}
              id="transition-modal-title"
            >
              Filter by:
            </Text17>
            <div className={classes.root}>
              <Accordion
                className={`${classes.accordionStyle} ${classes.borderTop}`}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.accordionSummary}
                >
                  <Typography className={`${classes.heading} brand`}>
                    Brand
                  </Typography>
                </AccordionSummary>
                {brands &&
                  brands.map((el, i) => (
                    <FilterRender
                      clickedElement={clickedBrands}
                      filterType="brand"
                      key={i}
                      element={el}
                    />
                  ))}
              </Accordion>
              <Accordion className={classes.accordionStyle}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className={classes.accordionSummary}
                >
                  <Typography className={classes.heading}>Type</Typography>
                </AccordionSummary>
                {mainData[route][0].type && (
                  <>
                    {type &&
                      type.map((el, i) => (
                        <FilterRender
                          clickedElement={clickedTypes}
                          filterType="type"
                          key={i}
                          element={el}
                        />
                      ))}
                  </>
                )}
              </Accordion>
              <Accordion className={classes.accordionStyle}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className={classes.accordionSummary}
                >
                  <Typography className={classes.heading}>Color</Typography>
                </AccordionSummary>
                {mainData[route][0].color && (
                  <>
                    {color &&
                      color.map((el, i) => (
                        <FilterRender
                          clickedElement={clickedColors}
                          filterType="color"
                          key={i}
                          element={el}
                        />
                      ))}
                  </>
                )}
              </Accordion>
            </div>

            {/*  */}
            <div className={`price-range ${classes.marginT}`}>
              <Text14 className={classes.marginB}>Price range</Text14>
              <PriceRange />
            </div>
            <div className={classes.resetButton}>
              <Text17
                onClick={() => {
                  handleClose();
                  handleReset();
                }}
              >
                Reset
              </Text17>
            </div>
          </div>
        </Fade>
      </Modal>
    </MainFilterWrapper>
  );
};

export default MainFilter;
