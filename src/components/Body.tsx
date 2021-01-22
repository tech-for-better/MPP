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

type selectedVideoProps = {
  selectedVideo: [{ topic: string; url: string }];
  setSelectedVideo: React.Dispatch<React.SetStateAction<[]>;
};

type videoType = {
  topic: string;
  url: string;
};

const Body = ({ selectedVideo, setSelectedVideo }: selectedVideoProps) => {
  const [filterBy, setFilterBy] = React.useState<string>("");
  const [content, setContent] = React.useState<any[]>([]);
  const videoDataArray : any[]= []
  const history = useHistory();

  const imagesArray = [
    { url: beginner, name: "beginner" },
    { url: intermediate, name: "intermediate" },
    { url: advanced, name: "advanced" },
    { url: tips, name: "tips" },
  ];

  const handleClick = (e: React.MouseEvent, video: videoType) => {
    e.preventDefault();
    videoDataArray.push(video)
    setSelectedVideo(videoDataArray)
    history.push(video.topic);
  };
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
          return (
            <>
              <button onClick={e => handleClick(e, video)}></button>
              <h1>video will playe here</h1>
            </>
          );
        })}

        <NavBar />
      </PageWrapper>
    </>
  );
};

export default Body;
