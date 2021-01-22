import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavbarIcons from "./NavbarIcons";

type Props = {
  currentPage: string;
};

const NavBar = () => {
  const pathname: string = window.location.pathname;
  console.log(pathname);

  return (
    <>
      <Navigation currentPage={pathname}>
        <NavLink currentPage={pathname} to='/home'>
          <NavbarIcons iconName='home' currentPage={pathname} />
          <NavText>Home</NavText>
        </NavLink>

        <NavLink currentPage={pathname} to='/mind'>
          {/* <Icon src={mindIcon} alt='Clickable Mind Page Navigation Icon' /> */}
          <NavbarIcons iconName='mind' currentPage={pathname} />

          <NavText>Mind</NavText>
        </NavLink>

        <NavLink currentPage={pathname} to='/body'>
          {/* <Icon src={bodyIcon} alt='Clickable Body Page Navigation Icon' /> */}
          <NavbarIcons iconName='body' currentPage={pathname} />

          <NavText>Body</NavText>
        </NavLink>

        <NavLink currentPage={pathname} to='/progress'>
          {/* <Icon src={progressIcon} alt='Clickable Progress Page Navigation Icon' /> */}
          <NavbarIcons iconName='progress' currentPage={pathname} />

          <NavText>Progress</NavText>
        </NavLink>
      </Navigation>
    </>
  );
};

const Navigation = styled.nav<Props>`
  position: absolute;
  display: flex;
  background-color: ${p =>
    p.currentPage === "/body" ? "var(--boxing-orange)" : p.currentPage === "/mind" ? "var(--bg-blue)" : "var( --main-beige)"};
  width: 100%;
  height: auto;
  justify-content: space-evenly;
  bottom: 0;
`;

const NavLink = styled(Link)<Props>`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  /* color: #3f4553; */
  color: ${p => (p.currentPage === "/body" ? "var(--off-white)" : p.currentPage === "/mind" ? "var(--main-blue)" : "var(--black)")};

  font-weight: bold;
  margin-bottom: 15px;
`;

const NavText = styled.span`

`;

export default NavBar;
