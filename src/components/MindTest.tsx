import React from "react";
import { PageWrapper } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import styled from "styled-components";

import FilterButtons from "./FilterButtons";
import calm from "../assets/Filters/calm.png";
import focus from "../assets/Filters/focus.png";
import connect from "../assets/Filters/connection.png";
import switchOff from "../assets/Filters/switch-off.png";

export const MindTest = () => {
    return (
    <PageWrapper>
      <MultipleLogos />
      <FilterButtons images={[calm, focus, connect, switchOff]} />
        <figure>
            <Audio id="player-content">
                <div id="album-art">
                    <img className="thumbnail" src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg">    
                    </img>
                </div>
                {/* // controls
                // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
                //     Your browser does not support the
                //     <code>audio</code> element. */}
            </Audio>
        </figure>
        <NavBar/>
    </PageWrapper>
    )
}

const Audio = styled.div`


`;