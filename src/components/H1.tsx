import React from "react";
import TypographyHelper, {
  ITypograhyHelperProps,
} from "../Library/TypographyHelper";
import styles from "../styles/H1.module.css";
interface IH1Props extends ITypograhyHelperProps {
  text: string;
}

const H1 = (props: IH1Props) => {
  return (
    <TypographyHelper {...props}>
      <h1 className={styles.text}>{props.text}</h1>
    </TypographyHelper>
  );
};

export default H1;
