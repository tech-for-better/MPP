import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import styled from "styled-components";
import Chart from "./Chart";
import ProgressIcon from "../assets/progress.svg";
import { auth } from "../connection";

const Progress = () => {
  const username: any = auth().currentUser?.displayName;

  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <Banner></Banner>
        <ProgressGift draggable='false' src={ProgressIcon} alt=''></ProgressGift>
        <Slogan className="slogan"> Your Progress </Slogan>
        <TextWrapper> 
          <Text>
            Well done, {username}! It looks like 
            <TextSpan style={{textAlign: 'center'}}> you are on right track.</TextSpan> 
          </Text>
        </TextWrapper>
        <NavBar />
        <Chart />
      </PageWrapper>
    </>
  );
};

const Banner = styled.div`
  background-color: var(--main-beige);
  width: 100%;
  height: 25vh;
`;
const ProgressGift = styled.img``;
const TextWrapper = styled.div``;
const TextSpan = styled.div``;

const Text = styled.p`
  font-weight: regular;
  font-size: 12px;
`;

export default Progress;
