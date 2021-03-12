import React from "react";

// npm imports
import styled from "styled-components";
import { Link } from "@reach/router";

//Const imports
import { Paths } from "../../Consts/Paths";

// npm text imports
import { Heading55, Text17, Heading22 } from "../../Assets/Text/Text";

// npm images impoirts
import HomePageBackgroundImg from "../../Assets/Images/HomeBg-Black.png";

//styled-components
const HomePageWrapper = styled.div`
  background-color: ${(props) => props.theme.main_gray2};
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.7)
    ),
    url(${HomePageBackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 77% 15%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .home-page-info {
    width: 90%;
    text-align: center;
    .home-info-title {
      color: ${(props) => props.theme.black};
      margin-bottom: 28px;
    }
    .home-info-paragraph {
      text-align: center;
    }
    .home-info-btn {
      background: ${(props) => props.theme.red};
      padding: 15px 35px 18px 35px;
      border: none;
      border-radius: 50px;
      margin-top: 28px;
      background-image: linear-gradient(10deg, #fe0190, #f31d33, #f31d33);
      background-size: 300%;
      background-position: right;
      transition: 300ms background-position ease-in-out;
      &:hover {
        background-position: left;
      }
      h5 {
        color: ${(props) => props.theme.white};
      }
    }
  }
`;

const HomePage = () => {
  return (
    <HomePageWrapper className="home-page">
      <div className="home-page-info">
        <Heading55 className="home-info-title">PC Builder</Heading55>
        <Text17 className="home-info-paragraph">
          Be your own boss and complete the system of your dreams. Pick your
          favorite parts for all components of your system.
        </Text17>
        <Link to={Paths.paths.main.replace("{COMPONENT}", "processor")}>
          <button className="home-info-btn">
            <Heading22>Start Building</Heading22>
          </button>
        </Link>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
