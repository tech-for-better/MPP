import React from "react";
import { PageWrapper, Slogan, Span, Button, Text, Arrow, Image, LogoImg, StyledLink } from "./Onboarding.styles";
import Navbar from "./NavBar";

const Progress = () => {
  return (
    <PageWrapper>
      <Slogan>
        Throw a jab. Meditate.
        <Span> Check your progress here!</Span>
      </Slogan>
      <Navbar />
    </PageWrapper>
  );
};

export default Progress;
