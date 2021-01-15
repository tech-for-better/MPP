import React from "react";
import { auth } from "./connection";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Onboarding } from "./components/Onboarding";
import Homepage from "./components/Homepage";
import Body from "./components/Body";
import Mind from "./components/Mind";
import Progress from "./components/Progress";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [authStatus, setAuthStatus] = React.useState(false);

  auth().onAuthStateChanged(user => {
    user ? setAuthStatus(true) : setAuthStatus(false);
  });
  console.log(authStatus);
  if (authStatus) {
    return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <Onboarding />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/signup' exact>
            <Signup />
          </Route>
          <Route path='/home' exact>
            <Homepage />
          </Route>
          <Route path='/body' exact>
            <Body />
          </Route>
          <Route path='/mind' exact>
            <Mind />
          </Route>
          <Route path='/progress' exact>
            <Progress />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <Onboarding />
          </Route>
          <Route path='/home'>
            <Redirect to='/login' />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
