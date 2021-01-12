import React from "react";
import { auth } from "./connection";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Onboarding } from "./components/Onboarding";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  // const [authStatus, setAuthStatus] = React.useState(false);

  // auth().onAuthStateChanged(user => {
  //   user ? setAuthStatus(true) : setAuthStatus(false);
  // });
  return (
    <Router>
      <Onboarding />
    </Router>
  );
}

export default App;
