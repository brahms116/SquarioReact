import React from "react";
import TypographyHelper, {
  ITypograhyHelperProps,
} from "../Library/TypographyHelper";
import styles from "../styles/H2.module.css";
interface IH2Props extends ITypograhyHelperProps {
  text: string;
}

const H2 = (props: IH2Props) => {
  return (
    <TypographyHelper {...props}>
      <h2 className={styles.text}>{props.text}</h2>
    </TypographyHelper>
  );
};

export default H2;
