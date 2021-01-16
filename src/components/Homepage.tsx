import React from "react";
import { auth } from "../connection";
import { PageWrapper } from "./Onboarding.styles";
import { MultipleLogos } from "./MultipleLogos";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Homepage = () => {

  const username : any = auth().currentUser?.displayName;
  return (
    <PageWrapper>
      <MultipleLogos />
      <WelcomeText>
        Welcome {username},
        <Span> What do you want to work on? </Span>
      </WelcomeText>
      <IconsContainer>
        <Mind>         
          <Link to='/mind'>
          <Icon src="https://markheath.net/posts/files/font-awesome-circle-background-1.png"></Icon> 
          </Link>
        </Mind>
        <Body> 
        <Link to='/body'>
          <Icon src="https://markheath.net/posts/files/font-awesome-circle-background-1.png"></Icon>
          </Link>
          </Body>
        <Progress>          
          <Link to='/progress'>
          <Icon src="https://markheath.net/posts/files/font-awesome-circle-background-1.png"></Icon> 
          </Link>
        </Progress>
       </IconsContainer>
    </PageWrapper>
  );
};

const WelcomeText = styled.h1`
  text-align: center;
  margin-top: 150px;
  font-size: 30px;
  font-weight: bolder;
`;

const Span = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
`;

const IconsContainer = styled.section`
  margin-top: 104px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

const Icon = styled.img``;

const Mind = styled.div`
  border:  1px solid red;
  grid-area: 1 / 1 / 2 / 2;
`
const Body = styled.div`
  border:  1px solid blue;
  grid-area: 1 / 3 / 2 / 4;

`
const Progress = styled.div`
  border:  1px solid black;
  grid-area: 2 / 2 / 3 / 3;
`

export default Homepage;