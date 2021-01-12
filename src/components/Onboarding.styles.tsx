import styled from "styled-components";

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
  height: 58.7px;
  background-color: var(--main-beige);
  border-radius: 20px;
  border: none;
  margin-top: 10vh;
`;

export const Text = styled.p`
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: bolder;
`;

export const Arrow = styled.img`
  float: right;
`;
