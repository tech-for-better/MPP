import React from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";
import { ReactComponent as ProgressIcon } from "../assets/progress-icon.svg";
import { ReactComponent as MindIcon } from "../assets/mind-icon.svg";
import { ReactComponent as BodyIcon } from "../assets/body-icon.svg";

type SvgIconProps = {
  currentPage: string;
};

type NavbarIconsProps = {
  iconName: string;
  currentPage: string;
};

const NavbarIcons = ({ iconName, currentPage }: NavbarIconsProps) => {
  console.log(iconName, currentPage);

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
  margin-left: 2px;
  margin-bottom: 10px;
  fill: ${p => (p.currentPage === "/body" ? "var(--off-white)" : p.currentPage === "/mind" ? "var(--main-blue)" : "var(--black")};
`;

const ReusableMindIcon = styled(MindIcon)<SvgIconProps>`
  margin-top: 15px;
  margin-left: 2px;
  margin-bottom: 10px;
  fill: ${p => (p.currentPage === "/body" ? "var(--off-white)" : p.currentPage === "/mind" ? "var(--main-blue)" : "var(--black")};
`;

const ReusableBodyIcon = styled(BodyIcon)<SvgIconProps>`
  margin-top: 15px;
  margin-left: 2px;
  margin-bottom: 10px;
  fill: ${p => (p.currentPage === "/body" ? "var(--off-white)" : p.currentPage === "/mind" ? "var(--main-blue)" : "var(--black")};
`;

const ReusableProgressIcon = styled(ProgressIcon)<SvgIconProps>`
  margin-top: 15px;
  margin-left: 2px;
  margin-bottom: 10px;
  fill: ${p => (p.currentPage === "/body" ? "var(--off-white)" : p.currentPage === "/mind" ? "var(--main-blue)" : "var(--black")};
`;

export default NavbarIcons;
