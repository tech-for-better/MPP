import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mobileLogo from "../assets/peak-icon.svg";
import desktopLogo from "../assets/desktop-logo.png";

export const MultipleLogos = () => {
  return (
    <>
      <Link to='/'>
        <MobileLogo src={mobileLogo} />
      </Link>
      <Link to='/'>
        <DesktopLogo src={desktopLogo} />
      </Link>
    </>
  );
};

const DesktopLogo = styled.img`
  margin-top: 25px;
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    left: 0;
    margin-top: 20px;
    margin-left: 10px;
    width: 20%;
  }
`;

const MobileLogo = styled.img`
  margin-top: 25px;

  display: none;
  @media (max-width: 767px) {
    display: block;
    position: absolute;
    right: 0;
  }
`;
