import React from "react";
import { PageWrapper } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import FilterButtons from "./FilterButtons";
import beginner from "../assets/Filters/beginner.svg";
import intermediate from "../assets/Filters/intermediate.svg";
import advanced from "../assets/Filters/advanced.svg";
import tips from "../assets/Filters/tips.svg";
import styled from "styled-components";

// import { ResponsiveVideoPlayer } from "./VideoPlayer";

const Body = () => {
  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <Banner>

        </Banner>
        <FilterButtons images={[beginner, intermediate, advanced, tips]} />
        {/* <VideoPlayer url={video}/> */}
        <NavBar />
      </PageWrapper>
    </>
  );
};

const Banner = styled.div`
  background-color: var(--boxing-orange);
  width: 100%;
  height: 20vh;
`;

export default Body;
