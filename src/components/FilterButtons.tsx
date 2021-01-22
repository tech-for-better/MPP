import React from "react";
import styled from "styled-components";

type filterButtonsProp = {
  filterBy: string;
  images: { name: string; url: string }[];
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
};

const FilterButtons = ({ images, filterBy, setFilterBy }: filterButtonsProp) => {
  const pathname = window.location.pathname;

  console.log("image", images[0].url);

  // let { slug } = useParams();
  const handleClick = (e: React.MouseEvent, image: { name: string; url: string }) => {
    e.preventDefault();
    setFilterBy(image.name);
  };
  return (
    <FilterGroup>
      {images.map(image => (
        <button className='btn' onClick={e => handleClick(e, image)}>
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
