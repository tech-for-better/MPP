import styled from "styled-components";

interface CategoryProp {
  category: string;
}

export const Figure = styled.figure<CategoryProp>`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 100px;
  border-radius: 12px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: 80px;
  height: 80px;
  max-height: 100%;
  max-width: 100%;
  object-fit: content;
  display: inline-flex;
  @media screen and (max-width: 650px) {
    display: block;
    padding-right: 0;
    padding-left: 0;
    margin-left: 30px;
    margin-right: 30px;
    overflow-y: hidden;
  }
`;

export const AudioTitle = styled.figcaption`
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
