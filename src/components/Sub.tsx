import React from "react";
import TypographyHelper, {
  ITypograhyHelperProps,
} from "../Library/TypographyHelper";
import styles from "../styles/Sub.module.css";
interface ISubProps extends ITypograhyHelperProps {
  text: string;
}

const Sub = (props: ISubProps) => {
  return (
    <TypographyHelper {...props}>
      <h4 className={styles.text}>{props.text}</h4>
    </TypographyHelper>
  );
};

export default Sub;
