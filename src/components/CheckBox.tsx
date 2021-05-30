import React from "react";
import styles from "../styles/CheckBox.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

interface IProps {
  onClick: () => void;
  label: string;
}
export default function Checkbox(props: IProps) {
  const [checkBoxState, setCheckBoxState] = useState("idle");
  const [hoverCache, setHoverCache] = useState("idle");
  const boxVariants = {
    idle: {
      backgroundColor: "#FFFFFF",
      borderColor: "var(--gray)",
    },
    selected: {
      backgroundColor: "var(--green)",
    },
    hover: {
      backgroundColor: "var(--green_hover)",
      borderColor: "var(--green_hover)",
    },
  };

  const textVariants = {
    hover: {
      color: "var(--green_hover)",
    },
    normal: {
      color: "var(--gray)",
    },
  };

  const handleClick = () => {
    if (hoverCache === "selected") {
      setHoverCache("idle");
      setCheckBoxState("idle");
    } else {
      props.onClick();
      setHoverCache("selected");
      setCheckBoxState("selected");
    }
  };
  const handleMouseEnter = () => {
    setHoverCache(checkBoxState);
    setCheckBoxState("hover");
  };
  const handleMouseLeave = () => {
    // console.log(hoverCache);
    setCheckBoxState(hoverCache);
  };

  return (
    <div
      className={styles.check_box}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={styles.box}
        animate={checkBoxState}
        variants={boxVariants}
        transition={{ duration: 0.2 }}
      ></motion.div>
      <motion.div
        variants={textVariants}
        animate={checkBoxState === "hover" ? "hover" : "normal"}
        transition={{ duration: 0.2 }}
      >
        {props.label}
      </motion.div>
    </div>
  );
}
