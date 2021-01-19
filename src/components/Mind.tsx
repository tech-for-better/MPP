import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import Navbar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";

import FilterButtons from "./FilterButtons";
import calm from "../assets/Filters/calm.png";
import focus from "../assets/Filters/focus.png";
import connect from "../assets/Filters/connection.png";
import switchOff from "../assets/Filters/switch-off.png";

const Mind = () => {
  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <Slogan>Meditation page</Slogan>
      </PageWrapper>
    <PageWrapper>
      <MultipleLogos />
      <FilterButtons images={[calm, focus, connect, switchOff]} />
      {/* <VideoPlayer url={video}/> */}
      <NavBar />
    </PageWrapper>

