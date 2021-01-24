import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import thumbnail from "../assets/thumbnail.png";
import { auth, db, firebaseFirestore } from "../connection";


export const ResponsiveVideoPlayer = ({ videoData }: any) => {
  const [watchComplete, setWatchComplete] = useState(false);

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
  console.log(videoData.url)

  return (
    <VideoWrapper>
      <TopicWrapper className='flex-child'>
        {videoData.topic}
      </TopicWrapper>
      {/* <VideoContainer className='flex-child'> */}
        <video
          src={videoData.url}
          className='player'
          controls
          playsInline
          onEnded={handleWatchComplete}
          poster={thumbnail}
          width="300"
        />
        <iframe 
        src='https://www.youtube.com/embed/E7wJTI-1dvQ' 
        frameBorder='0' 
        allow='autoplay; 
        encrypted-media' 
        allowFullScreen title='video' /> 


        {/* <VideoPlayer controls autoPlay poster={thumbnail} onEnded={handleWatchComplete}>
          <source src="https://www.youtube.com/watch?v=7sDY4m8KNLc" type="video/mp4"></source>
        Your browser does not support the video tag.
        </VideoPlayer> */}
      {/* </VideoContainer> */}
      <Marker 
      className={watchComplete ? "marker marker-complete" : "marker marker-not-complete"}>
        Completed! 🎊
      </Marker> 
    </VideoWrapper>
  );
};

const VideoWrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;
const TopicWrapper = styled.div`
  margin-top: 100px;
  font-weight: bold;
  border: 1px solid red;
  width: fit-content;
`;
const VideoContainer = styled.div`
  background-color:#F7F3F0;
  margin-bottom: 280px;
  margin-top: 100px;

`;
const VideoPlayer = styled.video`
  border-radius: 20px 20px 20px 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  border: 1px solid red;

`;

const Marker = styled.div`
  overflow: hidden;
`;
