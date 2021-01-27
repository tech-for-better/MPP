import React from "react";
import { auth } from "./connection";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Onboarding } from "./components/Onboarding";
import Homepage from "./pages/Homepage";
import Body from "./pages/Body";
import Mind from "./pages/Mind";
import Progress from "./pages/Progress";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadingSpinner } from "./components/Loader";
import VideoPlaying from "./pages/VideoPlaying";

function App() {
  const [authStatus, setAuthStatus] = React.useState("loading");
  React.useEffect(() => {
    return auth().onAuthStateChanged(user => {
      user ? setAuthStatus("loggedIn") : setAuthStatus("loggedOut");
    });
  }, []);

  if (authStatus === "loading") {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

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

        {authStatus === "loggedIn" && (
          <>
            <Route path='/home' exact>
              <Homepage />
            </Route>
            <Route path='/body' exact>
              <Body />
            </Route>
            <Route path='/body/:video' exact>
              <VideoPlaying />
            </Route>
            <Route path='/mind' exact>
              <Mind />
            </Route>
            <Route path='/progress' exact>
              <Progress />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
