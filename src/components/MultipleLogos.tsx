import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import peakIcon from "../assets/Registration/peak-icon.svg";
import mindfulPeak from "../assets/mindful-peak-mobile.png";

export const MultipleLogos = () => {
  return (
    <>
      <Link to='/'>
        <MobileLogo src={peakIcon} />
      </Link>
      <Link to='/'>
      <DesktopLogo src={mindfulPeak} />
      </Link>
    </>
  );
};

const DesktopLogo = styled.img`
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
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: absolute;
    right: 0;
  }
`;
