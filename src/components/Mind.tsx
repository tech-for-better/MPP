import React from "react";
import { PageWrapper } from "./Onboarding.styles";
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

  // const result: Array<any> = [];
  // const audiosArray: Array<any> = [];

  React.useEffect(() => {
    storageRef
      .listAll()
      .then((res: any) => {
        let resultPromises: any = [];
        res.prefixes.forEach((folderRef: any) => {
          folderRef.listAll().then((audiofiles: any) => {
            audiofiles.items.forEach((itemRef: any) => {
              resultPromises.push(itemRef);
            });
            Promise.all(resultPromises).then((results: any) => {
              const audiosArray: Array<any> = [];

              results.map((result: any) => {
                return result.getDownloadURL().then((url: any) => {
                  audiosArray.push(url);
                  setAudios(audiosArray);
                });
              });
            });
          });
        });
      })
      .catch(function (error) {
        console.error(error);
      });

    // setCaptions(result);
    // console.log("captions", captionsArray);
    console.log("audios", audios[0]);
    // console.log("captions", captions);
  }, []);

  // console.log("audios", audios[0]);
  // console.log("1", audios.length);
  // const totalCount = audios.length;
  // if (totalCount === undefined) return <div>Loading...</div>;
  if (!captions) return <div>Loading...</div>;
  // console.log("capions length", captions.length);

  return (
    <PageWrapper>
      <MultipleLogos />
      <FilterButtons images={[calm, focus, connect, switchOff]} />
      {/* {audios.map((audio: string) => {
        return (
          <audio controls src={audio}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        );
      })} */}
      {captions.length > 0 &&
        captions.map((caption: any) => {
          return <p>caption[caption]</p>;
        })}
      <NavBar />
    </PageWrapper>
  );
};
export default Mind;
