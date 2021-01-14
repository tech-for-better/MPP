import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import NavBar from "./NavBar";

const Body = () => {
  return (
    <PageWrapper>
      <Slogan>Boxing Page</Slogan>

      <NavBar />
    </PageWrapper>
  );
};

export default Body;
