import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import progressIcon from "../assets/progress-icon.svg";
import homeIcon from "../assets/home-icon.svg";
import mindIcon from "../assets/mind-icon.svg";
import bodyIcon from "../assets/body-icon.svg";
import NavbarIcons from "./NavbarIcons";

interface Props {
  currentPage: string;
}

const NavBar = () => {
  const pathname: string = window.location.pathname;
  console.log(pathname);

  /* 
  function correctIcon => (pathname) => {
    if( pathname === /mind ){
     icons : {
       homeicon : svvSakwCNsewjDACIoVvAndmLs
       sijas: shujsa 
       haks : sahjsaha
     }
    }
     if (pathname == /body){
      
     }
    }
  }


  */

  return (
    <>
      <Navigation currentPage={pathname}>
        <NavLink to='/home'>
          <NavbarIcons iconName='home' currentPage={pathname} />
          <span>Home</span>
        </NavLink>

        <NavLink to='/mind'>
          {/* <Icon src={mindIcon} alt='Clickable Mind Page Navigation Icon' /> */}
          <NavbarIcons iconName='mind' currentPage={pathname} />

          <span>Mind</span>
        </NavLink>

        <NavLink to='/body'>
          {/* <Icon src={bodyIcon} alt='Clickable Body Page Navigation Icon' /> */}
          <NavbarIcons iconName='body' currentPage={pathname} />

          <span>Body</span>
        </NavLink>

        <NavLink to='/progress'>
          {/* <Icon src={progressIcon} alt='Clickable Progress Page Navigation Icon' /> */}
          <NavbarIcons iconName='progress' currentPage={pathname} />

          <span>Progress</span>
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
