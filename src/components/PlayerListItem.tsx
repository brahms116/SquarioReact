import React from "react";
import LayoutHelper, { ILayoutHelperProps } from "../Library/LayoutHelper";
import EmptyDiv from "./EmptyDiv";
import styles from "../styles/PlayerListItem.module.css";
import P from "./P";
import ButtonText from "./ButtonText";

interface IPlayerListItemProps extends ILayoutHelperProps {
  isHost?: boolean;
  name: string;
}

const PlayerListItem = (props: IPlayerListItemProps) => {
  const hostTag = (
    <React.Fragment>
      <EmptyDiv width="1rem" />
      <ButtonText text="HOST" colour="var(--blue)" />
    </React.Fragment>
  );
  return (
    <LayoutHelper {...props}>
      <div className={styles.container}>
        <P text={props.name}></P>
        {props.isHost && hostTag}
      </div>
    </LayoutHelper>
  );
};

export default PlayerListItem;
