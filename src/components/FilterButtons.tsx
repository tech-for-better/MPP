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
        <FilterButtonWrapper>
          <FilterButton
            key={image.name}
            className='btn'
            style={{ backgroundColor: image.name === filterBy ? "#57adc7" : "#ffff" }}
            onClick={(e: React.MouseEvent) => handleClick(e, image)}
          >
            <img
              draggable='false'
              src={image.url}
              alt={"filter button for" + image.name + "audios category"}
              width={pathname === "/mind" ? "40px" : "auto"}
            ></img>
          </FilterButton>
          <FilterText> {image.name.replace(/([A-Z])/g, " $1").trim()}</FilterText>
        </FilterButtonWrapper>
      ))}
    </FilterGroup>
  );
};

const FilterGroup = styled.section`
  display: flex;
  margin-top: -40px;
`;
const FilterText = styled.span`
  color: #043c6f;
`;
const FilterButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 14px;
`;
const FilterButton = styled.button`
  width: 65.34px;
  height: 65px;
  border-radius: 20px;
  margin: 10px 13px 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  display: block;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 02s;
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
  @media (max-width: 375px) {
    margin: 10px 13px 10px 10px;
  }
`;

export default FilterButtons;
