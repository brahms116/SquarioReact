import React from "react";
import EmptyDiv from "../components/EmptyDiv";
import H1 from "../components/H1";
import H2 from "../components/H2";
import MenuButton from "../components/MenuButton";
import Page from "../components/Page";
import PlayerListItem from "../components/PlayerListItem";
import Sub from "../components/Sub";
import styles from "../styles/Lobby.module.css";
import useLobbyPage from "../ViewModels/useLobbyPage";
const Lobby = () => {
  const model = useLobbyPage();
  const getButtonState = () => {
    let label = "Start Game";
    let isDisabled = false;
    if (!model.utils.amIHost()) {
      isDisabled = true;
      label = "waiting for host...";
    } else if (model.state.playerList.length < 2) {
      isDisabled = true;
      label = "Waiting for players...";
    }
    return {
      label,
      isDisabled,
    };
  };

  const buttonState = getButtonState();
  return (
    <Page>
      <div className={styles.lobby}>
        <div className={styles.container}>
          <EmptyDiv height="5.75rem" />
          <H1 text="Lobby"></H1>
          <EmptyDiv height="0.75rem" />
          <Sub text={`CODE: ${model.state.code}`} />
          <EmptyDiv height="4rem" />
          <H2 text="Players" />
          <EmptyDiv height="3rem" />
          {model.state.playerList.map((e) => {
            return (
              <React.Fragment key={e.connectionId}>
                <PlayerListItem name={e.username} isHost={e.ishost} />
                <EmptyDiv height="1.5rem" />
              </React.Fragment>
            );
          })}
          <EmptyDiv height="3.25rem" />
          <MenuButton
            label={buttonState.label}
            disabled={buttonState.isDisabled}
            onClick={model.actions.startGame}
            left="-1rem"
            position="relative"
          />
          <EmptyDiv height="4rem" />
        </div>
      </div>
    </Page>
  );
};

export default Lobby;
