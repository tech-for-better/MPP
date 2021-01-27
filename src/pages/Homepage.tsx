import React from "react";
import { auth } from "../connection";
import { PageWrapper } from "../components/Onboarding.styles";
import { MultipleLogos } from "../components/MultipleLogos";
import styled from "styled-components";
import { Link } from "react-router-dom";
import meditationIcon from "../assets/HomePage/meditation.svg";
import boxingIcon from "../assets/HomePage/boxing.svg";
import progressIcon from "../assets/HomePage/progress.svg";
import Emoji from "../components/Emoji";
import { PopUp } from "../components/PopUp";
import { ReactComponent as SettingsIcon } from "../assets/settings.svg";

const Homepage = () => {
  const [isSettingsOpened, setIsSettingsOpened] = React.useState(false);
  const isBackgroundBeige = true;
  // Display username of user via Firebase Auth -->
  const username: any = auth().currentUser?.displayName;

  return (
    <div className={isBackgroundBeige ? "background-beige" : ""}>
      <SettingsButton
        onClick={() => {
          setIsSettingsOpened(!isSettingsOpened);
        }}
      >
        <StyledSettingsIcon />
      </SettingsButton>
      <PopUp isSettingsOpened={isSettingsOpened} setIsSettingsOpened={setIsSettingsOpened} />

      <PageWrapper>
        <MultipleLogos />
        <WelcomeText>
          Welcome {username} <Emoji symbol='👋' label='wave' />
          <Span> What do you want to work on? </Span>
        </WelcomeText>
        <IconsContainer>
          <Mind>
            <Link to='/mind'>
              <Icon className='icon' draggable='false' src={meditationIcon} alt=''></Icon>
            </Link>
          </Mind>
          <Body>
            <Link to='/body'>
              <Icon className='icon' draggable='false' src={boxingIcon} alt=''></Icon>
            </Link>
          </Body>
          <Progress>
            <Link to='/progress'>
              <Icon className='icon' draggable='false' src={progressIcon} alt=''></Icon>
            </Link>
          </Progress>
        </IconsContainer>
      </PageWrapper>
    </div>
  );
};

const WelcomeText = styled.h1`
  text-align: center;
  margin-top: 80px;
  font-size: 28px;
  font-weight: bolder;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  height: 30px;
  width: 30px;
`;

const Span = styled.span`
  display: block;
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
`;
const SettingsButton = styled.button`
  margin-top: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  display: block;
  position: absolute;
  right: 0;
  @media (max-width: 767px) {
    display: block;
    position: absolute;
    left: 0;
  }
`;

const IconsContainer = styled.section`
  padding: 10px 20px 20px 20px;
  margin-top: 70px;
  margin-bottom: 90px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0px;
`;

const Icon = styled.img`
  height: 160px;
  width: 160px;
  margin: 0 auto;
  display: flex;
  transition: 0.2s all;
  text-align: center;
  justify-content: center;
  background-color: #fcfeff;
  border: none;
  border-radius: 50%;
  @media (max-width: 500px) {
    height: 30vw;
    width: 30vw;
  }
`;

const Mind = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const Body = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const Progress = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default Homepage;
