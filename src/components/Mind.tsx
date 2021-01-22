import React from "react";
import { PageWrapper } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import { storage } from "../connection";
import styled from "styled-components";

import FilterButtons from "./FilterButtons";
import calm from "../assets/Filters/calm.png";
import focus from "../assets/Filters/focus.png";
import connect from "../assets/Filters/connection.png";
import switchOff from "../assets/Filters/switch-off.png";

interface CategoryProp {
  category: string;
}

const data = [
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/calm%2Ffear-01.wav?alt=media&token=c6003506-bbe0-436d-84b8-116b2bcae029",
    caption: "Fear",
    category: "calm",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/calm%2FUnder%20Pressure-.wav?alt=media&token=226ee084-c06a-4a1e-8278-2cd888c21691",
    caption: "Under Pressure",
    category: "calm",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/calm%2FMorning%20Calm%202-.wav?alt=media&token=7935acb2-28bc-4f09-b102-2993a3dc7afb",
    caption: "Morning Calm",
    category: "calm",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/calm%2Fanger-01.wav?alt=media&token=df245ff7-b28f-48b4-9c5b-eabefabd10c9",
    caption: "Anger",
    category: "Calm",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/connect%2FBREDTH.wav?alt=media&token=537718f5-1129-4e92-8945-ff5fe786d594",
    caption: "Breadth",
    category: "connect",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/connect%2FMANAGING%20CONFLICT%20BEST.wav?alt=media&token=893486b1-9efe-4404-9e83-cb228f16f196",
    caption: "Managing conflict best",
    category: "connect",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/focus%2FBODYSCAN.wav?alt=media&token=4c6d96b4-4a10-46db-93d4-d9f01066db5f",
    caption: "Bodyscan",
    category: "focus",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/focus%2Ffocus%20mini-.wav?alt=media&token=a843f0c2-111e-4293-96a9-89e2e4ddc130",
    caption: "focus",
    category: "focus",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/focus%2Fintentions.wav?alt=media&token=6838acba-19ce-4636-afcf-395cd3521a6c",
    caption: "Intentions",
    category: "focus",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/focus%2FSETBACKS.wav?alt=media&token=dd6494db-a2e7-4ab4-ae53-0e279751707c",
    caption: "Setbacks",
    category: "focus",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/switch-off%2FPAIN.wav?alt=media&token=21309acb-f674-43ce-b177-a3ee1426440e",
    caption: "Pain",
    category: "switchOff",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/switch-off%2FPysical%20Pain%20-.wav?alt=media&token=4db1f53b-b81a-4652-a0bd-d9537e7bf0ad",
    caption: "",
    category: "switchOff",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/mindful-peak-performance-7c8d4.appspot.com/o/switch-off%2FSLEEP.wav?alt=media&token=7be5e327-c226-489e-beb6-5233261ff612",
    caption: "Sleep",
    category: "switch-off",
  },
];

const Mind = () => {
  return (
    <PageWrapper>
      <MultipleLogos />
      <FilterButtons images={[calm, focus, connect, switchOff]} />
      {data.map((audio: any) => {
        return (
          <Figure category={audio.category}>
            <figcaption>{audio.caption}</figcaption>
            <audio controls src={audio.url}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </Figure>
        );
      })}
      {/* {captions.length > 0 &&
        captions.map((caption: any) => {
          return <p>caption[caption]</p>;
        })} */}
      <NavBar />
    </PageWrapper>
  );
  // }
};

const Figure = styled.figure<CategoryProp>``;

export default Mind;
