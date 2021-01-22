import React from "react";
import styled from "styled-components";

type filterButtonsProp = {
  filterBy: string;
  images: { name: string; url: string }[];
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
};

const FilterButtons = ({ images, filterBy, setFilterBy }: filterButtonsProp) => {
  const pathname = window.location.pathname;

  const handleClick = (e: React.MouseEvent, image: { name: string; url: string }) => {
    e.preventDefault();
    if (filterBy !== "" || filterBy === image.name) {
      return setFilterBy("");
    } else {
      return setFilterBy(image.name);
    }
  };

  return (
    <FilterGroup>
      {images.map(image => (
        <FilterButton
          key={image.name}
          className='btn'
          style={{ backgroundColor: image.name === filterBy ? "#2596be" : "#ffff" }}
          onClick={(e: React.MouseEvent) => handleClick(e, image)}
        >
          <img
            draggable='false'
            src={image.url}
            alt={"filter button for" + image.name + "audios category"}
            width={pathname === "/mind" ? "40px" : "auto"}
          ></img>
        </FilterButton>
      ))}
    </FilterGroup>
  );
};

const FilterGroup = styled.section`
  margin-top: 100px;
`;

const FilterButton = styled.button`
  width: 65.34px;
  height: 65px;
  border-radius: 20px;
  margin: 10px 13px 10px 10px;
  background: rgba(255, 255, 255, 0.9);
  display: inline-block;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  &:hover&:focus {
    opacity: 0.8;
  }
  &:active {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }
`;

export default FilterButtons;
