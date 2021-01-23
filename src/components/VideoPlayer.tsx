import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import thumbnail from "../assets/MPP-thumbnail.jpg";

export const ResponsiveVideoPlayer = ({ url, onProgress }: any) => {
  const [watchComplete, setWatchComplete] = useState(false);

  const handleWatchComplete = ({ played }: any) => {
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true);
    }
  };

  return (
    <div>
      <VideoContainer>
        <ReactPlayer
          url={url}
          className='react-player'
          controls
          playsinline
          width='30%'
          height='auto'
          onProgress={handleWatchComplete}
          poster={thumbnail}
          light={thumbnail}
        />
        <Marker className={watchComplete ? "marker marker-complete" : "marker marker-not-complete"}>Completed! 🎊</Marker>
      </VideoContainer>
    </div>
  );
};

const VideoContainer = styled.div`
  margin-top: 10%;
  margin-bottom: 20%;
  display: flex;
  justify-content: center;
  align-content: center;
  // add media queries for mobile
`;

const Marker = styled.div`
  overflow: hidden;
`;
