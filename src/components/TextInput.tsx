import React, { ChangeEvent } from "react";
import LayoutHelper, { ILayoutHelperProps } from "../Library/LayoutHelper";
import styles from "../styles/TextInput.module.css";
import EmptyDiv from "./EmptyDiv";
interface ITextInputProps extends ILayoutHelperProps {
  placeHolder: string;
  value: string;
  errorMsg?: string;
  onChange: (rvent: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: ITextInputProps) => {
  return (
    <LayoutHelper {...props}>
      <input
        type="text"
        className={styles.text_input}
        placeholder={props.placeHolder.toUpperCase()}
        onChange={props.onChange}
      />
      <EmptyDiv height="0.5rem" />
      {props.errorMsg && <div className={styles.error}>{props.errorMsg}</div>}
    </LayoutHelper>
  );
};

export default TextInput;
