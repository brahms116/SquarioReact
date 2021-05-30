import React from "react";
import TypographyHelper, {
  ITypograhyHelperProps,
} from "../Library/TypographyHelper";
import styles from "../styles/P.module.css";
interface IPProps extends ITypograhyHelperProps {
  text: string;
}

const P = (props: IPProps) => {
  return (
    <TypographyHelper {...props}>
      <div className={styles.text}>{props.text}</div>
    </TypographyHelper>
  );
};

export default P;
