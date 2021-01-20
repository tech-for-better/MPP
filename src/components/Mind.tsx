import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import { storage, db } from "../connection";
// import ReactAudioPlayer from 'react-audio-player';
// import AudioPlayer from "./AudioPlayer";

import FilterButtons from "./FilterButtons";
import calm from "../assets/Filters/calm.png";
import focus from "../assets/Filters/focus.png";
import connect from "../assets/Filters/connection.png";
import switchOff from "../assets/Filters/switch-off.png";

const Mind = () => {
  const [audios, setAudios] = React.useState({});
  const [captions, setCaptions] = React.useState({});

  var storageRef = storage.ref();

  React.useEffect(() => {
    const audiosArray: string[] = [];
    const captionsArray: string[] = [];
    storageRef
      .listAll()
      .then(function (res) {
        res.prefixes.forEach(function (folderRef) {
          console.log(folderRef.fullPath);
          folderRef.listAll().then(function (audiofiles) {
            audiofiles.items.forEach(function (itemRef) {
              itemRef.getDownloadURL().then(url => {
                audiosArray.push(url);
              });
              setAudios(audiosArray);
              itemRef
                .getMetadata()
                .then(function (metadata) {
                  captionsArray.push(metadata.customMetadata);
                  // Metadata now contains the metadata for 'images/forest.jpg'
                })
                .catch(function (error) {
                  // Uh-oh, an error occurred!
                });
              setCaptions(captionsArray);
            });
          });
        });
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
      });
  }, []);

  console.log("captions", captions);
  console.log("audios", audios);


  return (
    <PageWrapper>
      <MultipleLogos />
      <FilterButtons images={[calm, focus, connect, switchOff]} />
      {/* <VideoPlayer url={video}/> */}
      <NavBar />
    </PageWrapper>
  );
};
export default Mind;
