import React from "react";
import styled from "styled-components";
import { auth } from "../connection";
import { useHistory } from "react-router-dom";

export const Logout = ({ setIsSettingsOpened, setClickedOption }: any) => {
  const history = useHistory();
  const handleOnclickOk = () => {
    auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleOnclickCancel = () => {
    setClickedOption("");
    setIsSettingsOpened(false);
  };

  return (
    <LogoutConfirmation>
      <H3>Confirm</H3>
      <Message> Are you sure you'd like to log out?</Message>
      <Options onClick={handleOnclickOk}>OK</Options>
      <Options onClick={handleOnclickCancel}>CANCEL</Options>
    </LogoutConfirmation>
  );
};

const H3 = styled.h3`
  color: #16212c;
  margin-bottom: 1rem;
`;
const Options = styled.button`
  border: none;
  background-color: transparent;
  color: #056959;
  font-weight: 500;
  padding-left: 3.2rem;
`;
const Message = styled.p`
  margin-bottom: 2rem;
  color: #424646;
`;
const LogoutConfirmation = styled.div`
  overflow: hidden;
`;
