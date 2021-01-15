import React from "react";
import { PageWrapper, Slogan, Span } from "./Onboarding.styles";
import { MobileLogo } from "./MobileLogo";

const Homepage = () => {
  return (
    <PageWrapper>
      <MobileLogo />
      <Slogan>
        Throw a jab. Meditate.
        <Span> Live a balanced life. </Span>
      </Slogan>
    </PageWrapper>
  );
};

export default Homepage;
