import React from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
  return (
    <SkeletonDetailsWrapper>
      <SkeletonTheme color={"white"}>
        <Skeleton className="skeleton-details" />
      </SkeletonTheme>
      <Skeleton className="skeleton-btn" />
    </SkeletonDetailsWrapper>
  );
};

export default withTheme(SkeletonDetails);
