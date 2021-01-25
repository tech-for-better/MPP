import React from "react";
import { PageWrapper } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import styled from "styled-components";
import { LoadingSpinner } from "./Loader";
import { auth, db, firebaseFirestore } from "../connection";

import { AudioFigure, AudioTitle } from "./PlayerStyles";
import FilterButtons from "./FilterButtons";
import calm from "../assets/Filters/calm.png";
import focus from "../assets/Filters/focus.png";
import connect from "../assets/Filters/connection.png";
import switchOff from "../assets/Filters/switch-off.png";

interface CategoryProp {
  category: string;
}

const Mind = () => {
  const [filterBy, setFilterBy] = React.useState<string>("");
  const [audios, setAudios] = React.useState<{ url: string; category: string; caption: string }[]>([]);
  const [isCurrentAudio, setIsCurrentAudio] = React.useState();
  const username: any = auth().currentUser?.displayName;

  const watchedVideo = () => {
    var mindProgress = db.collection("users").doc(username);
    mindProgress.update({
      mindprogress: firebaseFirestore.FieldValue.increment(1),
    });
  };

  const handleWatchComplete = () => {
    watchedVideo();
  };
  const handleOnPlay = (e: any) => {
    setIsCurrentAudio(e.target);
  };
  const handleOnProgress = (e: any) => {
    if (e.target !== isCurrentAudio) {
      e.target.pause();
    }
  };
  const imagesArray = [
    { url: calm, name: "calm" },
    { url: focus, name: "focus" },
    { url: connect, name: "connect" },
    { url: switchOff, name: "switchOff" },
  ];
  React.useEffect(() => {
    const audiosArray: any = [];
    db.collection("mind")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          audiosArray.push(doc.data());
          return doc.data();
        });
        return audiosArray;
      })
      .then(mediaArray => {
        setAudios(mediaArray);
      });
  }, []);

  if (audios.length === 0 || audios === undefined) return <LoadingSpinner />;
  return (
    <PageWrapper>
      <MultipleLogos />
      <Banner></Banner>
      <FilterButtons images={imagesArray} filterBy={filterBy} setFilterBy={setFilterBy} />
      {filterBy !== ""
        ? audios
            .filter((audio: { category: string; url: string; caption: string }) => {
              return audio.category === filterBy;
            })
            .map((audio, i) => {
              return (
                <AudioFigure
                  category={audio.category}
                  key={audio.caption}
                  style={{ marginTop: i === 0 ? "80px" : "", marginBottom: i === audios.length - 1 && !(i < 2) ? "200px" : "" }}
                >
                  <div className='flex-child'>
                    <AudioTitle>{audio.caption}</AudioTitle>
                  </div>
                  <div className='flex-child'>
                    <audio controls src={audio.url} onPlay={handleOnPlay} onProgress={handleOnProgress} onEnded={handleWatchComplete}>
                      Your browser does not support the
                      <code>audio</code> element.
                    </audio>
                  </div>
                </AudioFigure>
              );
            })
        : audios.map((audio, i) => {
            return (
              <AudioFigure
                category={audio.category}
                key={audio.caption}
                style={{ marginTop: i === 0 ? "30px" : "", marginBottom: i === audios.length - 1 && !(i < 2) ? "200px" : "" }}
              >
                <div className='flex-child'>
                  <AudioTitle>{audio.caption}</AudioTitle>
                </div>
                <div className='flex-child'>
                  <audio controls src={audio.url} onPlay={handleOnPlay} onProgress={handleOnProgress} onEnded={handleWatchComplete}>
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </div>
              </AudioFigure>
            );
          })}

      <NavBar />
    </PageWrapper>
  );
};

const Banner = styled.div`
  background-color: var(--bg-blue);
  width: 100%;
  height: 25vh;
  @media (max-width: 600px) {
    height: 20vh;
  }
`;

export default Mind;
