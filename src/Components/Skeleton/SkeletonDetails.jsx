import React from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// styled-components
const SkeletonDetailsWrapper = styled.div`
  .skeleton-details {
    color: black;
    height: 250px;
  }
  .skeleton-btn {
    width: 70px;
    height: 35px;
    border-bottom-left-radius: 150px;
    border-bottom-right-radius: 150px;
    margin-left: calc(92% - 70px);
  }
`;
// component

const SkeletonDetails = (props) => {
  return (
    <SkeletonTheme>
      <SkeletonDetailsWrapper>
        <Skeleton className="skeleton-details" />
        <Skeleton className="skeleton-btn" />
      </SkeletonDetailsWrapper>
    </SkeletonTheme>
  );
};

export default withTheme(SkeletonDetails);
