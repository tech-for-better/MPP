import React from "react";
import { PageWrapper } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import { db } from "../connection";
import styled from "styled-components";
import { LoadingSpinner } from "./Loader";

import { Figure, AudioTitle } from "./PlayerStyles";
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

  const imagesArray = [
    { url: calm, name: "calm" },
    { url: focus, name: "focus" },
    { url: connect, name: "connect" },
    { url: switchOff, name: "switchOff" },
  ];
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
            .map(audio => {
              return (
                <Figure category={audio.category} key={audio.caption}>
                  <div className='flex-child'>
                    <AudioTitle>{audio.caption}</AudioTitle>
                  </div>
                  <div className='flex-child'>
                    <audio controls src={audio.url}>
                      Your browser does not support the
                      <code>audio</code> element.
                    </audio>
                  </div>
                </Figure>
              );
            })
        : audios.map(audio => {
            return (
              <>
                <Figure category={audio.category} key={audio.caption}>
                  <div className='flex-child'>
                    <AudioTitle>{audio.caption}</AudioTitle>
                  </div>
                  <div className='flex-child'>
                    <audio controls src={audio.url}>
                      Your browser does not support the
                      <code>audio</code> element.
                    </audio>
                  </div>
                </Figure>
              </>
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
`;

export default Mind;
