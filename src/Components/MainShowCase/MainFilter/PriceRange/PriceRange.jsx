import React, { useContext, useEffect, useState } from "react";

// npm imports
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

// consts imports

// context imports
import { GlobalContext } from "../../../../Context/GlobalContext";

// component imports

// styled-components
const PriceRangeWrapper = styled.div`
  .MuiSlider-thumb {
    width: 20px;
    height: 20px;
    margin-top: -9px;
  }
  .MuiSlider-rail,
  .MuiSlider-rail {
    height: 3px;
  }
`;
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  slider: {
    color: "#FD0405",
  },
  price: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function valuetext(value) {
  return `${value}`;
}

// component
const PriceRange = (props) => {
  const { mainData, route, handlePriceRange, currentPriceRange } = useContext(
    GlobalContext
  );
  const classes = useStyles();
  let maxVal = Math.round(
    Math.max.apply(
      Math,
      mainData[route].map(function (o) {
        return o.price;
      })
    )
  );

  // const [value, setValue] = useState([0, maxVal]);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  //   handlePriceRange(newValue);
  // };

  return (
    <PriceRangeWrapper className={classes.root}>
      <div className={classes.price}>
        <p>${currentPriceRange[0]}</p>
        <p>${currentPriceRange[1]}</p>
      </div>
      <Slider
        className={classes.slider}
        value={currentPriceRange}
        max={maxVal}
        onChange={handlePriceRange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </PriceRangeWrapper>
  );
};

export default PriceRange;
