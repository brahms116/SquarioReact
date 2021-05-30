import React from "react";
import GameButton from "../components/GameButton";
import Page from "../components/Page";
import styles from "../styles/GamePad.module.css";

const GamePad = () => {
  return (
    <div className={styles.game_pad}>
      <div className={styles.container}>
        <GameButton text="switch" onClick={() => {}} colour="var(--green)" />
        <div className={styles.gap}></div>
        <GameButton text="switch" onClick={() => {}} colour="var(--green)" />
        <div className={styles.gap}></div>
        <GameButton text="switch" onClick={() => {}} colour="var(--green)" />
        <div className={styles.gap}></div>
      </div>
    </div>
  );
};

export default GamePad;
