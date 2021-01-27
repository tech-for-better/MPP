import React from "react";
import { auth } from "../connection";
import RightArrow from "../assets/Registration/RightArrow.svg";
import Meditation from "../assets/Registration/onboarding.svg";
import { MultipleLogos } from "./MultipleLogos";

import { ButtonDiv, PageWrapper, Slogan, Span, Button, Text, Arrow, Image, LogoImg, StyledLink } from "./Onboarding.styles";

export const Onboarding = () => {
  const [goToPage, setGoToPage] = React.useState("/home");
  var user = auth().currentUser;
  React.useEffect(() => {
    if (!user) setGoToPage("/login");
  }, [user]);

  return (
    <PageWrapper>
      <MultipleLogos />
      <Slogan>
        Throw a jab. Meditate.
        <Span> Live a balanced life. </Span>
      </Slogan>
      <Image alt='Meditating Illustration' src={Meditation}></Image>
      <ButtonDiv>
        <StyledLink to={goToPage}>
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
