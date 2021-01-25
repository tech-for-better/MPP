import React from "react";
import styled from "styled-components";
import { auth } from "../connection";
import { Input, SubmitButton, Label } from "./Registration.styles";
import { PopUpSubmit, PopUpInput } from "./PopUp";

export const ChangePassword = ({ setIsSettingsOpened, setClickedOption }: any) => {
  const [newPassword, setNewPassword] = React.useState("");
  var user = auth().currentUser;
  const handleOnclickUpdatePassword = () => {
    if (!user) {
      return <p>Unable to update user at the moment</p>;
    } else {
      return user
        .updatePassword(newPassword)
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
        <Label htmlFor='newPassword'>
          Enter you new password
          <PopUpInput
           required
           type='password'
           placeholder='New Password'
            name='newPassword'
            id='newPassword'
            onChange={e => {
              setNewPassword(e.target.value);
            }}
          />
        </Label>
        <PopUpSubmit onClick={handleOnclickUpdatePassword}>Update</PopUpSubmit>
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
