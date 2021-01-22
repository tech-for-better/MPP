import React from "react";
import { PageWrapper } from "./Onboarding.styles";
import { LoadingSpinner } from "./Loader";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import { useHistory } from "react-router-dom";

import { ResponsiveVideoPlayer } from "./VideoPlayer";

type selectedVideoProps = {
  selectedVideo: { topic: string; url: string };
  setSelectedVideo: React.Dispatch<React.SetStateAction<string>>;
};

const VideoPlaying = ({ selectedVideo, setSelectedVideo }: selectedVideoProps) => {
  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <ResponsiveVideoPlayer video={selectedVideo} />
        <NavBar />
      </PageWrapper>
    </>
  );
};

export default VideoPlaying;
