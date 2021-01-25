import React from "react";
import styled from "styled-components";
import { Input, SubmitButton } from "./Registration.styles";

import { Logout } from "./Logout";
import { ChangeUsername } from "./ChangeUsername";
import { ChangePassword } from "./ChangePassword";

type popupProps = {
  isSettingsOpened: boolean;
};

export const PopUp = ({ setIsSettingsOpened, isSettingsOpened }: any) => {
  const [clickedOption, setClickedOption] = React.useState("");

  const handleClickClose = () => {
    setIsSettingsOpened(!isSettingsOpened);
    setClickedOption("");
  };
  const handleClickOptions = (e: any) => {
    console.log(e.target.id);

    console.log(clickedOption);

    setClickedOption(e.target.id);
    console.log(clickedOption);
  };
  console.log(clickedOption);

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
            <Button id='changePassword' onClick={handleClickOptions}>
              Change Password
            </Button>
          </ButtonsWrapper>
        ) : clickedOption === "changeUsername" ? (
          <ChangeUsername setIsSettingsOpened={setIsSettingsOpened} setClickedOption={setClickedOption} />
        ) : clickedOption === "logout" ? (
          <Logout setIsSettingsOpened={setIsSettingsOpened} setClickedOption={setClickedOption} />
        ) : (
          <ChangePassword setIsSettingsOpened={setIsSettingsOpened} setClickedOption={setClickedOption} />
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
  top: 40%;
  margin: 10vw;
  width: 220px;
  padding: 30px;
  border-radius: 5px;
  left: 40%;
  margin-right: -50%;

  transform: translate(-50%, -50%);
  @media (min-width: 675px) {
    width: 40vw;
  }
`;
const Button = styled.button`
  display: inline-block;
  padding: 0.9em 1.3em;
  margin: 0 0.3em 0.3em;
  margin-top: 0.4em;
  border-radius: 1em;
  border: none;
  box-sizing: border-box;
  font-weight: 500;
  background-color: var(--main-beige);
  text-align: center;
  transition: all 0.2s;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
`;

const ButtonsWrapper = styled.article`
  margin: 10% 2%;
  display: flex;

  flex-direction: column;
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
`;

export const PopUpInput = styled(Input)`
  width: 200px;
  margin-left: 2px;
  @media (min-width: 675px) {
    width: 36vw;
    margin-left: 2px;
  }
`;

export const PopUpSubmit = styled(SubmitButton)`
  width: 200px;
  margin-left: 2px;
  @media (min-width: 675px) {
    width: 36vw;
    margin-left: 2px;
  }
`;
