import React from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";

// type SvgProps = {
//   currentPage: string;
// };

type IconsProps = {
  iconName: string;
  currentPage: string;
};

const NavbarIcons = ({ iconName, currentPage }: IconsProps) => {
  console.log(iconName, currentPage);

  return (
    <>
      <HomeIcon fill='#5652BF' />
    </>
  );
};

// const Svg = styled.svg.attrs((props: SvgProps) => ({
//   width: "30",
//   height: "31",
//   viewBox: "0 0 30 31",
//   fill: "none",
//   xmlns: "http://www.w3.org/2000/Svg",
// }))<SvgProps>`
//   & path {
//     stroke: ${p => (p.currentPage === "/home" ? "#5652BF" : "#000")};
//     fill: ${p => (p.currentPage === "/home" ? "#f790c4" : "#bf9052")};
//     stroke-linecap: round;
//     animation: dash 1.5s ease-in-out infinite;
//   }
// `;
export default NavbarIcons;
