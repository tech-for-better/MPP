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
        <NavLink to='/home'>
          <NavbarIcons iconName='home' currentPage={pathname} />
          <NavText>Home</NavText>
        </NavLink>

        <NavLink to='/mind'>
          <NavbarIcons iconName='mind' currentPage={pathname} />

          <NavText>Mind</NavText>
        </NavLink>

        <NavLink to='/body'>
          <NavbarIcons iconName='body' currentPage={pathname} />

          <NavText>Body</NavText>
        </NavLink>

        <NavLink to='/progress'>
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

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #3f4553;
  font-weight: bold;
  margin-bottom: 15px;
`;

const NavText = styled.span`

`;

export default NavBar;
