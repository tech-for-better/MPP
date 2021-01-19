import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = (audio: any): JSX.Element => {
  return (
    <ReactAudioPlayer src={audio} autoPlay controls />
    //      <figure>
    //     <figcaption>Listen to a calming video</figcaption>
    //     <audio
    //         controls
    //         src={audio}>
    //             Your browser does not support the
    //             <code>audio</code> element.
    //     </audio>
    // </figure>
  );
};

export default AudioPlayer;
