import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import progressIcon from "../assets/progress-icon.svg";
import homeIcon from "../assets/home-icon.svg";
import mindIcon from "../assets/mind-icon.svg";
import bodyIcon from "../assets/body-icon.svg";

const NavBar = () => {
  // const pathname: string = window.location.pathname;

  return (
    <>
      <Navigation>
        <NavLink to='/home'>
          <Icon src={homeIcon} alt='Clickable Home Page Navigation Icon' />
          <span>Home</span>
        </NavLink>

        <NavLink to='/mind'>
          <Icon src={mindIcon} alt='Clickable Mind Page Navigation Icon' />
          <span>Mind</span>
        </NavLink>

        <NavLink to='/body'>
          <Icon src={bodyIcon} alt='Clickable Body Page Navigation Icon' />
          <span>Body</span>
        </NavLink>

        <NavLink to='/progress'>
          <Icon src={progressIcon} alt='Clickable Progress Page Navigation Icon' />
          <span>Progress</span>
        </NavLink>
      </Navigation>
      {/* </PageWrapper> */}
    </>
  );
};

const Navigation = styled.nav`
  position: absolute;
  display: flex;
  background-color: #d9f0fd;
  width: 100%;
  height: auto;
  justify-content: space-evenly;
  bottom: 0;
`;

const Icon = styled.img`
  margin-top: 15px;
  margin-bottom: 10px;
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #3f4553;
  font-weight: bold;
  margin-bottom: 15px;
`;

export default NavBar;
