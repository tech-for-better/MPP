import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Slogan = styled.h1`
  margin-top: 4em;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
`;

export const Span = styled.span`
  display: block;
`;

export const Image = styled.img`
  padding: 50px;
  width: 300px;
  height: auto;
  text-align: center;
`;

export const LogoImg = styled.img`
  width: 300px;
  height: auto;
  position: absolute;
  left: 2vw;
  top: 2vw;
`;

export const Button = styled.button`
  width: 323px;
  height: auto;
  background-color: var(--main-beige);
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  :hover, :focus, :active {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    :active {
      position: relative;
      top: 2px;
      left: 2px;
    }
}
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: bolder;
  color: rgb(0, 0, 0);
`;

export const Arrow = styled.img`
  float: right;
  margin-right: 10px;
`;

export const StyledLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ButtonDiv = styled.div`
  padding-right: 20px;
  padding-bottom: 20px;
`;