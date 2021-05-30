import React from "react";
import LayoutHelper, { ILayoutHelperProps } from "../Library/LayoutHelper";
import styles from "../styles/IconButton.module.css";

export interface IIconButtonProps extends ILayoutHelperProps {
  size: string;
  src: string;
  disabled?: boolean;
  onClick: () => void;
}

const IconButton = (props: IIconButtonProps) => {
  let className = `${styles.button}`;
  if (props.disabled) {
    className += ` ${styles.disabled}`;
  }
  return (
    <LayoutHelper {...props}>
      <div
        style={{
          height: props.size,
          width: props.size,
        }}
        className={className}
        onClick={props.onClick}
      >
        <img src={props.src} className={styles.icon} />
      </div>
    </LayoutHelper>
  );
};

export default IconButton;
