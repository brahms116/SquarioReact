import React from "react";
import TypographyHelper, {
  ITypograhyHelperProps,
} from "../Library/TypographyHelper";
import styles from "../styles/MessageText.module.css";
interface IMessageTextProps extends ITypograhyHelperProps {
  text: string;
}

const MessageText = (props: IMessageTextProps) => {
  return (
    <TypographyHelper {...props}>
      <h1 className={styles.text}>{props.text}</h1>
    </TypographyHelper>
  );
};

export default MessageText;
