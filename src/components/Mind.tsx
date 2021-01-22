import React from "react";
import { PageWrapper } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import { storage, db } from "../connection";
// import ReactAudioPlayer from 'react-audio-player';
// import AudioPlayer from "./AudioPlayer";
import styled from "styled-components";

import FilterButtons from "./FilterButtons";
import calm from "../assets/Filters/calm.png";
import focus from "../assets/Filters/focus.png";
import connect from "../assets/Filters/connection.png";
import switchOff from "../assets/Filters/switch-off.png";

const Mind = () => {
  const [content, setContent] = React.useState({});

  React.useEffect(() => {
    const mediaArray: any[] = [];

    db.collection("body")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          mediaArray.push(doc.data());
          const result = doc.data();
          return result[0];
        });
        // const videonames = Object.entries(videos);
        setContent(mediaArray);
      });
  }, []);

  console.log("videos", content);

  var storageRef = storage.ref("calm/anger-01.wav");

  console.log(storageRef.storage);
  // console.log(imagesRef);

  return (
    <PageWrapper>
      <MultipleLogos />
      <Banner>

      </Banner>
      <FilterButtons images={[calm, focus, connect, switchOff]} />
      {/* <VideoPlayer url={video}/> */}
      <NavBar />
    </PageWrapper>
  );
};

const Banner = styled.div`
  background-color: var(--bg-blue);
  width: 100%;
  height: 25vh;
`;

export default Mind;
