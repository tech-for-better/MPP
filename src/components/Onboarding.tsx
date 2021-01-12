import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../assets/RightArrow.svg";
import { PageWrapper, Slogan, Button, Text, Arrow, Image } from "./Onboarding.styles";

export const Onboarding = () => {
  return (
    <PageWrapper>
      <Slogan>Throw a jab. Meditate. Live a balanced life.</Slogan>
      <Image></Image>
      <Link to='/login'>
        <Button>
          <Text>
            GET STARTED <Arrow alt='arrow' src={RightArrow}></Arrow>
          </Text>
        </Button>
      </Link>
    </PageWrapper>
  );
};
