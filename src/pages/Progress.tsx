import React from "react";
import { PageWrapper } from "../components/Onboarding.styles";
import NavBar from "../components/NavBar";
import { MultipleLogos } from "../components/MultipleLogos";
import styled from "styled-components";
import Chart from "../components/Chart";
import ProgressIcon from "../assets/progress.svg";
import { auth } from "../connection";

const Progress = () => {
  const username: string = auth().currentUser?.displayName!;

  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <Banner></Banner>
        <ProgressGift draggable='false' src={ProgressIcon} alt=''></ProgressGift>
        <Title className='slogan'> Your Progress </Title>
        <TextWrapper>
          <Text>
            Well done, {username}! It looks like
            <TextSpan style={{ textAlign: "center" }}> you are on right track.</TextSpan>
          </Text>
        </TextWrapper>
        <Chart />
        <NavBar />
      </PageWrapper>
    </>
  );
};

const Banner = styled.div`
  background-color: var(--main-beige);
  width: 100%;
  height: 25vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  letter-spacing: 0.04em;
`;

const ProgressGift = styled.img`
  margin-top: -130px;
`;
const TextWrapper = styled.div`
  margin-top: 10px;
`;

const TextSpan = styled.div``;

const Text = styled.p`
  font-weight: regular;
  font-size: 12px;
`;

export default Progress;
