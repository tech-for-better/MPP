import React from "react";
import styled from "styled-components";

type ImageProp = {
  images: { name: string; url: string }[];
};

const FilterButtons = ({ images }: ImageProp) => {
  const pathname = window.location.pathname;

  console.log("image", images[0].url);

  // let { slug } = useParams();
  /* 
  const handleClick = (e) => {
    e.preventDefault();
    console.log('The button was clicked.');
    history.push("/mind/{name}")
    
  }

*/
  return (
    <FilterGroup>
      {images.map(image => (
        <button className='btn'>
          <img
            draggable='false'
            src={image.url}
            alt={"filter button for" + image.name + "audios category"}
            width={pathname === "/mind" ? "40px" : "auto"}
          ></img>
        </button>
      ))}
    </FilterGroup>
  );
};

const FilterGroup = styled.section`
  margin-top: 100px;
`;

export default FilterButtons;
