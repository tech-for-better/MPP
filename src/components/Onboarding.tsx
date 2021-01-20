import React from "react";
import RightArrow from "../assets/Registration/RightArrow.svg";
import Meditation from "../assets/Registration/onboarding.svg";
import logo from "../assets/desktop-logo.png";
import { ButtonDiv, PageWrapper, Slogan, Span, Button, Text, Arrow, Image, LogoImg, StyledLink } from "./Onboarding.styles";

export const Onboarding = () => {
  return (
    <PageWrapper>
      <LogoImg alt='Mindful Peak Performance Logo' src={logo}></LogoImg>
      <Slogan>
        Throw a jab. Meditate.
        <Span> Live a balanced life. </Span>
      </Slogan>
      <Image alt='Meditating Illustration' src={Meditation}></Image>
      <ButtonDiv>
      <StyledLink to='/login'>
        <Button style={{ height: "58.7px" }}>
          <Text>
            GET STARTED <Arrow alt='arrow' src={RightArrow}></Arrow>
          </Text>
        </Button>
      </StyledLink>
      </ButtonDiv>
    </PageWrapper>
  );
};
