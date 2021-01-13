import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export const Slogan = styled.h1`
  margin-top: 4em;
  text-align: center;
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: bolder;
`;

export const Span = styled.span`
  display: block;
`;

export const Image = styled.img`
  margin-top: 10px;
  width: 300px;
  height: auto;
  margin: auto;
`;

export const LogoImg = styled.img`
  padding-top: 1rem;
  width: 300px;
  height: auto;
  position: absolute;
  left: 2vw;
  top: 2vw;
`;

// @media (max-width: 768px) {
//     flex-direction: column;
//   }

export const Button = styled.button`
  width: 323px;
  height: auto;
  background-color: var(--main-beige);
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: bolder;
  color: rgb(0, 0, 0);
`;

export const Arrow = styled.img`
  float: right;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin-top: 10vh;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
