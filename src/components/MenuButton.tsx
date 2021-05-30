import React from "react";
import LayoutHelper, { ILayoutHelperProps } from "../Library/LayoutHelper";
import styles from "../styles/MenuButton.module.css";
import ButtonText from "./ButtonText";
export interface IIconButtonProps extends ILayoutHelperProps {
  disabled?: boolean;
  label: string;
  onClick: () => void;
}

const IconButton = (props: IIconButtonProps) => {
  let className = `${styles.button}`;
  if (props.disabled) {
    className += ` ${styles.disabled}`;
  }
  return (
    <LayoutHelper {...props}>
      <div className={className} onClick={props.onClick}>
        <ButtonText text={props.label} />
      </div>
    </LayoutHelper>
  );
};

export default IconButton;
