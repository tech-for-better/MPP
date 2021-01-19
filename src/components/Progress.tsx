import React from "react";
import { PageWrapper, Slogan, Span } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";

const Progress = () => {
  return (
    <PageWrapper>
      <MultipleLogos />
      <Slogan>
        Throw a jab. Meditate.
        <Span> Check your progress here!</Span>
      </Slogan>
      <NavBar />
    </PageWrapper>
  );
};

export default Progress;
