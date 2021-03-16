import React, { useEffect, useState } from "react";

// npm imports
import styled from "styled-components";
import Slider, { Range, SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";

// consts imports

// context imports

// component imports

// styled-components
const PriceRangeWrapper = styled.div``;
// component

const PriceRange = (props) => {
  const [value, setValue] = useState("");
  const { createSliderWithTooltip } = Slider;
  //   const Range = createSliderWithTooltip(Slider.Range);
  //   const { Handle } = Range;

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <PriceRangeWrapper>
      <Range
        min={0}
        max={100}
        marks={{
          0: 0,
          100: "asd",
        }}
        defaultValue={[3, 10]}
        tipFormatter={(value) => setValue(value)}
      />
    </PriceRangeWrapper>
  );
};

export default PriceRange;
