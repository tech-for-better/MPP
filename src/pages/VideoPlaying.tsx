import React from "react";
import NavBar from "../components/NavBar";
import { MultipleLogos } from "../components/MultipleLogos";
import { PageWrapper } from "../components/Onboarding.styles";
import styled from "styled-components";
import thumbnail from "../assets/thumbnail.png";
import { auth, db, firebaseFirestore } from "../connection";

const VideoPlaying = () => {
  const [watchComplete, setWatchComplete] = React.useState(false);

  const uniqueUserId = auth().currentUser?.uid;

  const watchedVideo = () => {
    var boxing101 = db.collection("users").doc(uniqueUserId);
    boxing101.update({
      bodyprogress: firebaseFirestore.FieldValue.increment(1),
    });
  };

  const handleWatchComplete = () => {
    setWatchComplete(true);
    watchedVideo();
  };

  const selectedVideo: string = localStorage.getItem("selectedVideo")!;
  const videoData = JSON.parse(selectedVideo);
  return (
    <PageWrapper className='work'>
      <MultipleLogos />
      <Banner></Banner>
      <VideoWrapper>
        <TopicWrapper
          style={{ marginTop: "50px", textTransform: "uppercase", fontWeight: "bold", fontSize: "25px" }}
          className='flex-child'
        >
          {videoData.topic}
          <VideoPlayer
            style={{ width: "100%", marginTop: "5vh", borderRadius: "20px 20px 20px 20px" }}
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
        </TopicWrapper>

        <Marker className={watchComplete ? "marker marker-complete" : "marker marker-not-complete"}>Completed! 🎊</Marker>
      </VideoWrapper>
      <NavBar />
    </PageWrapper>
  );
};

export default VideoPlaying;
const Banner = styled.div`
  background-color: var(--boxing-orange);
  width: 100%;
  height: 15vh;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20vh;
`;
const TopicWrapper = styled.div`
  margin-top: 1000px;
  font-weight: bold;
  width: fit-content;
`;

const VideoPlayer = styled.video`
  margin-top: 50px;
`;

const Marker = styled.div`
  overflow: hidden;
  margin-left: 40vw;
`;
