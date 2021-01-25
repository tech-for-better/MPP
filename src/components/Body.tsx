import React from "react";
import { useHistory } from "react-router-dom";
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
import styled from "styled-components";
import { Figure, AudioTitle, StyledPlayIcon } from "./PlayerStyles";
type videoType = {
  topic: string;
  url: string;
  difficulty: string;
};

const Body = () => {
  const [filterBy, setFilterBy] = React.useState<string>("");
  const [content, setContent] = React.useState<any[]>([]);
  // const [videoPlaying, setVideoPlaying] = React.useState(false);
  const history = useHistory();
  const imagesArray = [
    { url: beginner, name: "beginner" },
    { url: intermediate, name: "intermediate" },
    { url: advanced, name: "advanced" },
    { url: tips, name: "tips" },
  ];

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
      <PageWrapper className='work'>
        <MultipleLogos />
        <Banner></Banner>
        <FilterButtons images={imagesArray} filterBy={filterBy} setFilterBy={setFilterBy} />
        {content.map((video: videoType) => {
          return (
            <BodyFigure
              onClick={e => {
                localStorage.setItem("selectedVideo", JSON.stringify(video));
                history.push("body/" + video.topic.replace(/\s/g, ""));
              }}
              category={video.difficulty}
              key={video.topic}
            >
              <VideoTitle>{video.topic}</VideoTitle>
              <StyledPlayIcon />
            </BodyFigure>
          );
          // return <ResponsiveVideoPlayer videoData={video} />;
        })}
        <NavBar />
      </PageWrapper>
    </>
  );
};

const Banner = styled.div`
  background-color: var(--boxing-orange);
  width: 100%;
  height: 25vh;
`;

const VideoTitle = styled(AudioTitle)`
  padding-right: 20vw;
`;
const BodyFigure = styled(Figure)`
  padding: 3% 2% 3% 3%;
  margin-bottom: 2vh;
  @media screen and (max-width: 650px) {
    padding: 5%;
    margin-left: 30px;
    margin-right: 30px;
    overflow-y: hidden;
  }
`;
export default Body;
