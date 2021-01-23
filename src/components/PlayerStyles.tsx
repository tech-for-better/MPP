import styled from "styled-components";

interface CategoryProp {
  category: string;
}

export const Figure = styled.figure<CategoryProp>`
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 100px;
  border-radius: 12px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 30px;
  margin-top: 80px;
  height: 80px;
  max-height: 100%;
  max-width: 100%;
  object-fit: content;
  display: inline-flex;
`;

export const AudioTitle = styled.figcaption`
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
