import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";

const Progress = () => {
  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <Slogan>progress page</Slogan>
        <NavBar />
      </PageWrapper>
    </>
  );
};

export default Progress;
