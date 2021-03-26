import React, { useContext } from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// context imports
import { GlobalContext } from "../../Context/GlobalContext";

// styled-components
const SkeletonDetailsWrapper = styled.div`
  position: relative;
  .skeleton-details {
    height: 250px;
  }
  .skeleton-btn {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    bottom: -14%;
    right: 8%;
  }
`;
// component

const SkeletonDetails = (props) => {
  const { darkMode } = useContext(GlobalContext);
  return (
    <SkeletonDetailsWrapper>
      <SkeletonTheme
        color={darkMode ? "#3A3B3C" : "white"}
        highlightColor={darkMode ? "#56585A" : "#F7F7F7"}
      >
        <Skeleton className="skeleton-details" />
      </SkeletonTheme>
      <SkeletonTheme
        color={darkMode ? "#56585A" : ""}
        highlightColor={darkMode ? "#3A3B3C" : "#F7F7F7"}
      >
        <Skeleton className="skeleton-btn" />
      </SkeletonTheme>
    </SkeletonDetailsWrapper>
  );
};

export default withTheme(SkeletonDetails);
