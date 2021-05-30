import React, { useContext } from "react";
import { useHistory } from "react-router";
import {
  NavigationLevel,
  NavigationService,
} from "../services/NavigationService";

const useRouteGuard = () => {
  const navigationService = useContext(NavigationService);
  const navLevel = navigationService.state.navLevel;
  const history = useHistory();
  const pathName = history.location.pathname;
  return () => {
    if (
      navLevel === NavigationLevel.notInRoom &&
      pathName !== "/" &&
      pathName !== "/join"
    )
      history.push("/");
    else if (navLevel === NavigationLevel.game && pathName !== "/game")
      history.push("/game");
    else if (navLevel === NavigationLevel.lobby && pathName !== "/lobby")
      history.push("/lobby");
    else if (
      (navLevel === NavigationLevel.gameLose ||
        navLevel === NavigationLevel.gameWin ||
        navLevel === NavigationLevel.error) &&
      pathName !== "/msg"
    )
      history.push("/msg");
  };
};

export default useRouteGuard;
