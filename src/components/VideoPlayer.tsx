import ReactPlayer from "react-player";
import styled from "styled-components";

export const VideoPlayer = ({ url }: any) => {
  return (
    <VideoContainer>
      <ReactPlayer url={url} controls width='60%' height='auto' />
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  margin: 0;
`;
