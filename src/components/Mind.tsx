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
  const [folders, setFolders] = React.useState<any[]>([]);

  React.useEffect(() => {
    getAudioFiles().then(result => {
      console.log(result);
      setFolders(result);
    });
  }, []);

  async function getAudioFiles() {
    var storageRef = storage.ref();

    const response = await storageRef.listAll();
    const folders: any[] = [];
    response.prefixes.forEach(folder => folders.push(folder.listAll()));
    // folders now contains a promise for the contents of each folder

    // use map to create a new array of promises
    // each promise will eventually resolve to the final data we want
    // an object with the URL and metadata for each file { url: "/first", metadata: "blah" }
    const files = folders.map(async folderPromise => {
      // we need to wait for the promise to resolve before we can access the files
      const audioFiles = await folderPromise;
      const files: any[] = [];
      // create a new array containing an object for each file
      audioFiles.items.forEach(async (file: any) => {
        // wait for both url and metadata promises to resolve
        const [url, metadata] = await Promise.all([file.getDownloadURL(), file.getMetadata()]);
        files.push({ url, metadata });
      });
      return files;
    });
    // return a single promise that will eventually resolve to our array of folders
    return Promise.all(files);
  }

  console.log(folders[0]);
  if (!folders) return <h1>Loading...</h1>;
  // return <pre>{JSON.stringify(folders, null, 2)}</pre>;

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
