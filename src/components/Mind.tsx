import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import { storage, db } from "../connection";
// import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from "./AudioPlayer";

import FilterButtons from "./FilterButtons";
import calm from "../assets/Filters/calm.png";
import focus from "../assets/Filters/focus.png";
import connect from "../assets/Filters/connection.png";
import switchOff from "../assets/Filters/switch-off.png";

// interface Provider {
//   connected: boolean;
//   type: string;
// }

const Mind = () => {
  // const [content, setContent] = React.useState({});
  // const [audios, setAudios] = React.useState<Provider>([]);
  const [audios, setAudios] = React.useState<Array<any>>([]);
  const [captions, setCaptions] = React.useState<Array<any>>([]);

  var storageRef = storage.ref();

  const result: Array<any> = [];
  const audiosArray: Array<any> = [];

  React.useEffect(() => {
    storageRef
      .listAll()
      .then(function (res) {
        res.prefixes.forEach(function (folderRef) {
          folderRef.listAll().then(function (audiofiles) {
            audiofiles.items.forEach(function (itemRef) {
              itemRef.getDownloadURL().then(url => {
                return audiosArray.push(url);
              });
              itemRef
                .getMetadata()
                .then(function (metadata) {
                  result.push(metadata.customMetadata);
                })
                .catch(function (error) {
                  console.error(error);
                });
              // setCaptions(captionsArray);
            });
          });
        });
      })
      .catch(function (error) {
        console.error(error);
      });
    setCaptions(result);
    setAudios(audiosArray);
    // console.log("captions", captionsArray);
    console.log("audios", audios);
    console.log("captions", captions);
  }, []);
  // console.log("1", audios.length);
  // const totalCount = audios.length;
  // if (totalCount === undefined) return <div>Loading...</div>;
  if (!captions) return <div>Loading...</div>;
  console.log("capions length", captions.length);

  return (
    <PageWrapper>
      <MultipleLogos />
      <FilterButtons images={[calm, focus, connect, switchOff]} />
      {audios.map((audio: string) => {
        return (
          <audio controls src={audio}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        );
      })}
      {captions.length > 0 &&
        captions.map((caption: any) => {
          return <p>caption[caption]</p>;
        })}
      <NavBar />
    </PageWrapper>
  );
};
export default Mind;
