import React from "react";
import LayoutHelper, { ILayoutHelperProps } from "../Library/LayoutHelper";
import styles from "../styles/GameButton.module.css";
interface IGameButtonProps extends ILayoutHelperProps {
  onClick: () => void;
  text: string;
  colour: string;
}

const GameButton = (props: IGameButtonProps) => {
  return (
    <LayoutHelper {...props}>
      <div className={styles.game_button} style={{ background: props.colour }}>
        {props.text.toUpperCase()}
      </div>
    </LayoutHelper>
  );
};

export default GameButton;
