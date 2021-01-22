import React from "react";
import { PageWrapper } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import FilterButtons from "./FilterButtons";
import beginner from "../assets/Filters/beginner.svg";
import intermediate from "../assets/Filters/intermediate.svg";
import advanced from "../assets/Filters/advanced.svg";
import tips from "../assets/Filters/tips.svg";

// import { ResponsiveVideoPlayer } from "./VideoPlayer";

const Body = () => {
  const [filterBy, setFilterBy] = React.useState<string>("");

  const imagesArray = [
    { url: beginner, name: "beginner" },
    { url: intermediate, name: "intermediate" },
    { url: advanced, name: "advanced" },
    { url: tips, name: "tips" },
  ];

  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <FilterButtons images={imagesArray} filterBy={filterBy} setFilterBy={setFilterBy} />
        {/* <VideoPlayer url={video}/> */}
        <NavBar />
      </PageWrapper>
    </>
  );
};

export default Body;
