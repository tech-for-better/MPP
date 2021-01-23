import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import styled from "styled-components";
import Chart from "./Chart";
import ProgressIcon from "../assets/progress.svg";

const Progress = () => {
  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <ProgressGift draggable='false' src={ProgressIcon} alt=''></ProgressGift>
        <Banner></Banner>
        <Slogan style={{ marginTop: 25 }}> Your Progress </Slogan>
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
  border: 2px solid red;
`;

const ProgressGift = styled.img``;

export default Progress;
