import React from "react";
import TypographyHelper, {
  ITypograhyHelperProps,
} from "../Library/TypographyHelper";
import styles from "../styles/ButtonText.module.css";
interface IButtonTextProps extends ITypograhyHelperProps {
  text: string;
  colour?: string;
}

const ButtonText = (props: IButtonTextProps) => {
  const colourStyle = {
    color: props.colour ? props.colour : "#ffffff",
  };
  return (
    <TypographyHelper {...props}>
      <h3 className={styles.text} style={colourStyle}>
        {props.text.toUpperCase()}
      </h3>
    </TypographyHelper>
  );
};

export default ButtonText;
