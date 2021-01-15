import React from "react";
import { PageWrapper, Slogan, Span, Button, Text, Arrow, Image, LogoImg, StyledLink } from "./Onboarding.styles";
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
