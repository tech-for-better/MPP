import React from "react";
import styled from "styled-components";
import { auth } from "../connection";
import { Label } from "./Registration.styles";
import { PopUpSubmit, PopUpInput } from "./PopUp";

export const ChangeUsername = ({ setIsSettingsOpened, setClickedOption }: any) => {
  const [newUsername, setNewUsername] = React.useState("");
  var user = auth().currentUser;

  const handleOnclickUpdateUsername = () => {
    if (!user) {
      return <p>Unable to update user at the moment</p>;
    } else {
      return user
        .updateProfile({
          displayName: newUsername,
        })
        .then(function () {
          setClickedOption("");
          setIsSettingsOpened(false);
        })
        .catch(function (error: any) {
          console.error(error);
        });
    }
  };

  return (
    <Confirmation>
      <H3>Confirm</H3>
      <form>
        <Label htmlFor='newUsername'>
          Enter you new username
          <PopUpInput
            type='text'
            name='newUsername'
            id='newUsername'
            maxLength={11}
            onChange={e => {
              setNewUsername(e.target.value);
            }}
          />
        </Label>
        <PopUpSubmit onClick={handleOnclickUpdateUsername}>Update</PopUpSubmit>
      </form>
    </Confirmation>
  );
};

const H3 = styled.h3`
  color: #16212c;
  margin-bottom: 1rem;
`;

const Confirmation = styled.div`
  overflow: hidden;
`;
