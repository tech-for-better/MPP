import React from "react";
import styled from "styled-components";
import { auth, db } from "../connection";
import { Label } from "./Registration.styles";
import { PopUpSubmit, PopUpInput } from "./PopUp";

type Props = {
  setIsSettingsOpened: (param: any) => void;
  setClickedOption: (param: any) => void;
};

export const ChangeUsername = ({ setIsSettingsOpened, setClickedOption }: Props) => {
  var user = auth().currentUser;
  const [newUsername, setNewUsername] = React.useState("");
  const uniqueUserId = auth().currentUser?.uid;
  console.log(uniqueUserId);

  const handleOnclickUpdateUsername = () => {
    if (!user) {
      return <p>Unable to update user at the moment</p>;
    } else {
      console.log(newUsername);

      db.collection("users").doc(uniqueUserId).update({
        username: newUsername,
      });
      console.log(newUsername);

      // setOldUsername(user?.displayName)
      return user
        .updateProfile({
          displayName: newUsername,
        })
        .then(function () {
          setClickedOption("");
          setIsSettingsOpened(false);
        })
        .catch(function (error: string) {
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
            maxLength={20}
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
