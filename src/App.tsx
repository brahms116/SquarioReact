import React from "react";
import "./styles/global.css";
import TestingPage from "./pages/TestingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Lobby from "./pages/Lobby";
import MessagePage from "./pages/MessagePage";
import ServiceProvider from "./services/ServiceProvider";
import GamePage from "./pages/GamePage";
const App = () => {
  return (
    <div className="app">
      <ServiceProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/game" exact>
              <GamePage />
            </Route>
            <Route path="/msg" exact>
              <MessagePage />
            </Route>
            <Route path="/lobby" exact>
              <Lobby />
            </Route>
            <Route path="/join" exact>
              <LandingPage isHostGame={false} />
            </Route>
            <Route path="/">
              <LandingPage isHostGame />
            </Route>
          </Switch>
        </BrowserRouter>
      </ServiceProvider>
      {/* <TestingPage /> */}
    </div>
  );
};

export default App;
