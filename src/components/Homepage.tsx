import React from "react";
import { auth } from "../connection";
import { PageWrapper } from "./Onboarding.styles";
import { MultipleLogos } from "./MultipleLogos";
import styled from "styled-components";
import { Link } from "react-router-dom";
import meditationIcon from "../assets/HomePage/meditation.svg";
import boxingIcon from "../assets/HomePage/boxing.svg";
import progressIcon from "../assets/HomePage/progress.svg";

const Homepage = () => {
  const username: any = auth().currentUser?.displayName;
  return (
    <PageWrapper>
      <MultipleLogos />
      <WelcomeText>
        Welcome {username},<Span> What do you want to work on? </Span>
      </WelcomeText>
      <IconsContainer>
        <Mind>
          <Link to='/mind'>
            <Icon src={meditationIcon} alt=''></Icon>
          </Link>
        </Mind>
        <Body>
          <Link to='/body'>
            <Icon src={boxingIcon} alt=''></Icon>
          </Link>
        </Body>
        <Progress>
          <Link to='/progress'>
            <Icon src={progressIcon} alt=''></Icon>
          </Link>
        </Progress>
      </IconsContainer>
    </PageWrapper>
  );
};

const WelcomeText = styled.h1`
  text-align: center;
  margin-top: 150px;
  font-size: 30px;
  font-weight: bolder;
`;

const Span = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
`;

const IconsContainer = styled.section`
  padding: 10px 20px 20px 20px;
  margin-top: 104px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Icon = styled.img`
  height: 160px;
  width: 160px;
  margin: 0 auto;
  display: flex;
  transition: 0.2s all;
  text-align: center;
  justify-content: center;
  background-color: #fcfeff;
  border: none;
  outline: none;
  border-radius: 50%;
`;

const Mind = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  border-radius: 50%;
  -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 4px 6px 20px 0 rgba(0, 0, 0, 0.3);
`;
const Body = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  border-radius: 50%;
  -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 4px 6px 20px 0 rgba(0, 0, 0, 0.3);
`;
const Progress = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  border-radius: 50%;
  -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 4px 6px 20px 0 rgba(0, 0, 0, 0.3);
`;

export default Homepage;
