import React from "react";
import LayoutHelper, { ILayoutHelperProps } from "../Library/LayoutHelper";
import styles from "../styles/Spinner.module.css";

const Spinner = (props: ILayoutHelperProps) => {
  return (
    <LayoutHelper {...props}>
      <div className={styles.spinner}></div>
    </LayoutHelper>
  );
};

export default Spinner;
