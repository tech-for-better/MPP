import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import Chart from "./Chart";

const Progress = () => {
  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <Slogan>progress page</Slogan>
        <NavBar />
        <Chart />
      </PageWrapper>
    </>
  );
};

export default Progress;
