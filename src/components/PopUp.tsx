import React from "react";
import styled from "styled-components";

import { Input, SubmitButton } from "./Registration.styles";
import { Logout } from "./Logout";
import { ChangeUsername } from "./ChangeUsername";

type popupProps = {
  isSettingsOpened: boolean;
};

type Props = {
  setIsSettingsOpened: (param: any) => void;
  isSettingsOpened: boolean;
};

export const PopUp = ({ setIsSettingsOpened, isSettingsOpened }: Props) => {
  const [clickedOption, setClickedOption] = React.useState("");

  const handleClickClose = () => {
    setIsSettingsOpened(!isSettingsOpened);
    setClickedOption("");
  };
  const handleClickOptions = (e: any) => {
    setClickedOption(e.target.id);
  };

  return (
    <Modal isSettingsOpened={isSettingsOpened}>
      <ModalContent>
        <Close onClick={handleClickClose}>&times; </Close>
        {clickedOption === "" ? (
          <ButtonsWrapper>
            <Button id='logout' onClick={handleClickOptions}>
              Logout
            </Button>
            <Button id='changeUsername' onClick={handleClickOptions}>
              Change Username
            </Button>
          </ButtonsWrapper>
        ) : clickedOption === "changeUsername" ? (
          <ChangeUsername setIsSettingsOpened={setIsSettingsOpened} setClickedOption={setClickedOption} />
        ) : (
          <Logout setIsSettingsOpened={setIsSettingsOpened} setClickedOption={setClickedOption} />
        )}
      </ModalContent>
    </Modal>
  );
};

const Modal = styled.section<popupProps>`
  display: ${p => (p.isSettingsOpened ? "block" : "none")};
  z-index: 1;
  box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.5);
  position: fixed;
  margin: 0 auto;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.article`
  background-color: #ffffff;
  position: absolute;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  border: 3px solid #eceeef;
  border-radius: 5px;
  top: 30%;
  margin: 10vw;
  width: 220px;
  padding-left: 20px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 10px;
  left: 40%;
  margin-right: -50%;

  transform: translate(-50%, -50%);
  @media (min-width: 675px) {
    width: 40vw;
  }
  @media (max-width: 400px) {
    top: 40%;
  }
`;
const Button = styled.button`
  width: 30%;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-bottom: 2em;
  border-radius: 1em;
  border: none;
  background-color: var(--main-beige);
  transition: all 0.2s;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.25));
  &:active {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 400px) {
    width: 60%;
  }
`;

const ButtonsWrapper = styled.article`
  margin: 10% 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Close = styled.span`
  color: Black;
  float: right;
  font-weight: bold;
  font-size: 20px;
  margin-top: -10px;
  &:hover {
    color: #364747;
    cursor: pointer;
  }
  &:active {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }
`;

export const PopUpInput = styled(Input)`
  display: flex;
  width: 90%;
  margin-top: 5px;
  margin-bottom: 30px;
@media (min-width: 675px) {
    width: 36vw;
    margin-left: 2px;
  }
`;

export const PopUpSubmit = styled(SubmitButton)`
  width: 200px;
  font-weight: bold;
  letter-spacing: 0.1em;
  margin-left: 2px;
  margin-bottom: 30px;

  @media (min-width: 675px) {
    width: 36vw;
    margin-left: 2px;
  }

`;
