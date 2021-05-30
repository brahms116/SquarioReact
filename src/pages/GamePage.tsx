import React from "react";
import Page from "../components/Page";
import GamePad from "./GamePad";
import GameScreen from "./GameScreen";

const GamePage = () => {
  return <Page>{window.innerWidth < 1000 ? <GamePad /> : <GameScreen />}</Page>;
};

export default GamePage;
