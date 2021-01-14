import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import styled from "styled-components";

const NavBar = () => {
  return (
      <>
    <PageWrapper>
      <Slogan>
        The Navigation Bar 🧭 ✨
      </Slogan>
      <Navigation>

      </Navigation>
    </PageWrapper>
    </>
  );
};

const Navigation = styled.footer``;

export default NavBar;