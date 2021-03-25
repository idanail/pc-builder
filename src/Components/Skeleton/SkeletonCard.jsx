import React from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// styled-components
const SkeletonCardWrapper = styled.div`
  .skeleton-brand {
    width: 50%;
    margin-bottom: 15px;
  }
  .skeleton-img {
    border-radius: 15px;
    width: 100%;
    height: 150px;
    margin-bottom: 15px;
  }
  .skeleton-model {
    width: 90%;
    height: 22px;
    margin: 0 5% 15px;
  }
  .skeleton-price {
    width: 50%;
    margin: 0 25% 15px;
  }
`;
// component

const SkeletonCard = (props) => {
  return (
    <SkeletonTheme>
      <SkeletonCardWrapper>
        <Skeleton className="skeleton-brand" />
        <Skeleton className="skeleton-img" />
        <Skeleton className="skeleton-model" />
        <Skeleton className="skeleton-price" />
      </SkeletonCardWrapper>
    </SkeletonTheme>
  );
};

export default withTheme(SkeletonCard);
