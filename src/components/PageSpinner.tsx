import React from "react";
import styles from "../styles/PageSpinner.module.css";
import Spinner from "./Spinner";

const PageSpinner = () => {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
};

export default PageSpinner;
