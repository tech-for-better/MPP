import React from "react";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import { PageWrapper } from "./Onboarding.styles";
import styled from "styled-components";
import thumbnail from "../assets/thumbnail.png";
import { auth, db, firebaseFirestore } from "../connection";

const VideoPlaying = () => {
  const [watchComplete, setWatchComplete] = React.useState(false);

  const username: any = auth().currentUser?.displayName;

  const watchedVideo = () => {
    var boxing101 = db.collection("users").doc(username);
    boxing101.update({
      bodyprogress: firebaseFirestore.FieldValue.increment(1),
    });
  };

  const handleWatchComplete = () => {
    setWatchComplete(true);
    watchedVideo();
  };

  const selectedVideo: any = localStorage.getItem("selectedVideo");
  const videoData = JSON.parse(selectedVideo);
  return (
    <PageWrapper className='work'>
      <MultipleLogos />
      <VideoWrapper>
        <TopicWrapper
          style={{ marginTop: "50px", textTransform: "uppercase", fontWeight: "bold", fontSize: "25px" }}
          className='flex-child'
        >
          <VideoPlayer
            style={{ width: "100%", marginTop: "20vh", borderRadius: "20px 20px 20px 20px" }}
            controls
            className='player'
            playsInline
            onEnded={handleWatchComplete}
            poster={thumbnail}
          >
            <source src={videoData.url} type='video/webm' />
            <source src={videoData.url} type='video/mp4' />
            Sorry, your browser doesn't support embedded videos.
          </VideoPlayer>
          {videoData.topic}
        </TopicWrapper>

        <Marker className={watchComplete ? "marker marker-complete" : "marker marker-not-complete"}>Completed! 🎊</Marker>
      </VideoWrapper>
      <NavBar />
    </PageWrapper>
  );
};

export default VideoPlaying;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  margin-bottom: 20vh;
`;
const TopicWrapper = styled.div`
  margin-top: 1000px;
  font-weight: bold;
  border: 1px solid red;
  width: fit-content;
`;
const VideoContainer = styled.div`
  background-color: #f7f3f0;
  margin-bottom: 200px;
  margin-top: 100px;
`;
const VideoPlayer = styled.video`
  margin-top: 50px;
`;

const Marker = styled.div`
  overflow: hidden;
`;