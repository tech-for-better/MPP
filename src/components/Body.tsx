import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";

const Body = () => {
  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <Slogan>Boxing Page</Slogan>
        <NavBar />
      </PageWrapper>
    </>
  );
};

export default Body;
