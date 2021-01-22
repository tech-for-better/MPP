import React from "react";
import { PageWrapper } from "./Onboarding.styles";
import { db } from "../connection";
import { LoadingSpinner } from "./Loader";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import FilterButtons from "./FilterButtons";
import beginner from "../assets/Filters/beginner.svg";
import intermediate from "../assets/Filters/intermediate.svg";
import advanced from "../assets/Filters/advanced.svg";
import tips from "../assets/Filters/tips.svg";
import { useHistory } from "react-router-dom";

import { ResponsiveVideoPlayer } from "./VideoPlayer";

type videoType = {
  topic: string;
  url: string;
};

const Body = () => {
  const [filterBy, setFilterBy] = React.useState<string>("");
  const [content, setContent] = React.useState<any[]>([]);
  // const [videoPlaying, setVideoPlaying] = React.useState(false);

  const imagesArray = [
    { url: beginner, name: "beginner" },
    { url: intermediate, name: "intermediate" },
    { url: advanced, name: "advanced" },
    { url: tips, name: "tips" },
  ];

  // const handleClick = (e: React.MouseEvent, video: videoType) => {
  //   setVideoPlaying(!videoPlaying);
  //   e.preventDefault();
  // };
  React.useEffect(() => {
    const mediaArray: any = [];
    db.collection("body")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          mediaArray.push(doc.data());
          return doc.data();
        });
        return mediaArray;
      })
      .then(mediaArray => {
        setContent(mediaArray);
      });
  }, []);
  if (content.length === 0) return <LoadingSpinner />;

  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <FilterButtons images={imagesArray} filterBy={filterBy} setFilterBy={setFilterBy} />
        {content.map((video: videoType) => {
          console.log(video.url);
          return <ResponsiveVideoPlayer videoData={video} />;
        })}

        <NavBar />
      </PageWrapper>
    </>
  );
};

export default Body;
