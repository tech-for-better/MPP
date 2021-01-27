import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { db } from "../connection";
import { PageWrapper } from "../components/Onboarding.styles";
import { LoadingSpinner } from "../components/Loader";
import NavBar from "../components/NavBar";
import { MultipleLogos } from "../components/MultipleLogos";
import FilterButtons from "../components/FilterButtons";
import { Figure, AudioTitle, StyledPlayIcon } from "../components/PlayerStyles";

import beginner from "../assets/Filters/beginner.svg";
import intermediate from "../assets/Filters/intermediate.svg";
import advanced from "../assets/Filters/advanced.svg";
import tips from "../assets/Filters/tips.svg";

type videoType = {
  topic: string;
  url: string;
  difficulty: string;
};

const Body = () => {
  const [filterBy, setFilterBy] = React.useState<string>("");
  const [content, setContent] = React.useState<videoType[]>([]);
  const history = useHistory();

  const imagesArray = [
    { url: beginner, name: "beginner" },
    { url: intermediate, name: "intermediate" },
    { url: advanced, name: "advanced" },
    { url: tips, name: "tips" },
  ];

  React.useEffect(() => {
    const mediaArray: any[] = [];
    db.collection("body")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          mediaArray.push(doc?.data());
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

        {filterBy !== ""
          ? content
              .filter((video: videoType) => {
                return video.difficulty === filterBy;
              })
              .map((video: videoType, i) => {
                return (
                  <BodyFigure
                    onClick={e => {
                      localStorage.setItem("selectedVideo", JSON.stringify(video));
                      history.push("body/" + video.topic.replace(/\s/g, ""));
                    }}
                    category={video.difficulty}
                    key={video.topic}
                    style={{ marginTop: i === 0 ? "60px" : "", marginBottom: i === content.length - 1 && !(i < 2) ? "200px" : "" }}
                  >
                    <VideoTitle>{video.topic}</VideoTitle>
                    <StyledPlayIcon />
                  </BodyFigure>
                );
              })
          : content.map((video: videoType, i) => {
              return (
                <BodyFigure
                  onClick={e => {
                    localStorage.setItem("selectedVideo", JSON.stringify(video));
                    history.push("body/" + video.topic.replace(/\s/g, ""));
                  }}
                  category={video.difficulty}
                  key={video.topic}
                  style={{ marginTop: i === 0 ? "60px" : "", marginBottom: i === content.length - 1 && !(i < 2) ? "200px" : "" }}
                >
                  <VideoTitle>{video.topic}</VideoTitle>
                  <StyledPlayIcon />
                </BodyFigure>
              );
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
  @media (max-width: 600px) {
    height: 20vh;
  }
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
