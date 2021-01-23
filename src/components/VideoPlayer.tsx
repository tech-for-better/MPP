import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import thumbnail from "../assets/thumbnail.png";
import { auth, db, firebaseFirestore } from "../connection";

export const ResponsiveVideoPlayer = ({ videoData, onProgress }: any) => {
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

  return (
    <div>
      <VideoContainer>
        {videoData.topic}
        <SCReactPlayer
          url={videoData.url}
          className='react-player'
          controls
          playsinline
          onEnded={handleWatchComplete}
          poster={thumbnail}
          light={thumbnail}
        />
        <Marker className={watchComplete ? "marker marker-complete" : "marker marker-not-complete"}>Completed! 🎊</Marker>
      </VideoContainer>
    </div>
  );
};

const VideoContainer = styled.div`
  /* position: relative;
  padding-top: 56.25%;
  margin-top: 10%;
  margin-bottom: 20%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  // add media queries for mobile
`;

const SCReactPlayer = styled(ReactPlayer)`
  border-radius: 20px 20px 20px 20px;
  overflow: hidden;
  /* position: absolute; */
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
`;

const Marker = styled.div`
  overflow: hidden;
`;
