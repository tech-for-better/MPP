import React from "react";
import styled from "styled-components";

type ImageProp = {
  images: string[];
};

const FilterButtons = ({ images }: ImageProp) => {
  const pathname = window.location.pathname;

  return (
    <>
    <FilterGroup>
      {images.map(image => (
        <button className='btn'>
          <img draggable='false' src={image} alt='' width={pathname === "/mind" ? "40px" : "auto"}></img>
        </button>
      ))}
    </FilterGroup>
    </>
  );
};

const FilterGroup = styled.section`
  margin-top: -40px;
`;

export default FilterButtons;
