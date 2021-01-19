import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import Navbar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";

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

