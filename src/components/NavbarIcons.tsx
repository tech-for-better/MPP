import React from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../assets/NavBar/home-icon.svg";
import { ReactComponent as ProgressIcon } from "../assets/NavBar/progress-icon.svg";
import { ReactComponent as MindIcon } from "../assets/NavBar/mind-icon.svg";
import { ReactComponent as BodyIcon } from "../assets/NavBar/body-icon.svg";

type SvgIconProps = {
  currentPage: string;
};

type NavbarIconsProps = {
  iconName: string;
  currentPage: string;
};

const NavbarIcons = ({ iconName, currentPage }: NavbarIconsProps) => {
  return (
    <>
      {iconName === "home" ? (
        <ReusableHomeIcon currentPage={currentPage} />
      ) : iconName === "mind" ? (
        <ReusableMindIcon currentPage={currentPage} />
      ) : iconName === "body" ? (
        <ReusableBodyIcon currentPage={currentPage} />
      ) : (
        <ReusableProgressIcon currentPage={currentPage} />
      )}
    </>
  );
};

const ReusableHomeIcon = styled(HomeIcon)<SvgIconProps>`
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 10px;
  fill: ${p => (p.currentPage.startsWith("/body") ? "var(--off-white)" : p.currentPage === "/mind" ? "var(--main-blue)" : "var(--black")};
`;

const ReusableMindIcon = styled(MindIcon)<SvgIconProps>`
  margin-top: 15px;
  margin-left: 5px;
  margin-bottom: 10px;
  fill: ${p => (p.currentPage.startsWith("/body") ? "var(--off-white)" : p.currentPage === "/mind" ? "var(--main-blue)" : "var(--black")};
`;

const ReusableBodyIcon = styled(BodyIcon)<SvgIconProps>`
  margin-top: 15px;
  margin-left: 2px;
  margin-bottom: 10px;
  fill: ${p => (p.currentPage.startsWith("/body") ? "var(--off-white)" : p.currentPage === "/mind" ? "var(--main-blue)" : "var(--black")};
`;

const ReusableProgressIcon = styled(ProgressIcon)<SvgIconProps>`
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
  fill: ${p => (p.currentPage.startsWith("/body") ? "var(--off-white)" : p.currentPage === "/mind" ? "var(--main-blue)" : "var(--black")};
`;

export default NavbarIcons;
