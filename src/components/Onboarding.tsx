import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../assets/RightArrow.svg";
import Meditation from "../assets/onboarding.svg";
import logo from "../assets/mindful-peak.png";
import { PageWrapper, Slogan, Span, Button, Text, Arrow, Image, LogoImg, StyledLink } from "./Onboarding.styles";

export const Onboarding = () => {
  return (
    <PageWrapper>
      <LogoImg alt='Mindful Peak Performance Logo' src={logo}></LogoImg>
      <Slogan>
        Throw a jab. Meditate.
        <Span> Live a balanced life. </Span>
      </Slogan>
      <Image alt='Meditating Illustration' src={Meditation}></Image>
        <StyledLink to='/login'>
        <Button>
          <Text>
            GET STARTED <Arrow alt='arrow' src={RightArrow}></Arrow>
          </Text>
        </Button>
        </StyledLink>
    </PageWrapper>
  );
};
