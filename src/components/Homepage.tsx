import React from "react";
import { PageWrapper, Slogan, Span } from "./Onboarding.styles";
import { MultipleLogos } from "./MultipleLogos";

const Homepage = () => {
  return (
    <PageWrapper>
      <MultipleLogos />
      <Slogan>
        Throw a jab. Meditate.
        <Span> Live a balanced life. </Span>
      </Slogan>
    </PageWrapper>
  );
};

export default Homepage;
