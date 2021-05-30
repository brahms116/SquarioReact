import React, { ChangeEvent, useContext, useEffect } from "react";
import Checkbox from "../components/CheckBox";
import EmptyDiv from "../components/EmptyDiv";
import H1 from "../components/H1";
import H2 from "../components/H2";
import IconButton from "../components/IconButton";
import Page from "../components/Page";
import TextInput from "../components/TextInput";
import styles from "../styles/LandingPage.module.css";
import arrowUrl from "../media/arrow.svg";
import { useHistory } from "react-router";
import { motion, useAnimation } from "framer-motion";
import PageSpinner from "../components/PageSpinner";
import useLandingPage, {
  ILandingPageModel,
} from "../ViewModels/useLandingPage";
import framerUtils from "../utils/framerUtils";
import useSignalRGlobalEvents from "../hooks/useSignalRGlobalEvents";

const NewGameForm = (props: { model: ILandingPageModel }) => {
  const notEmpty = props.model.state.username.length != 0;
  return (
    <React.Fragment>
      <div className={styles.form_row}>
        <TextInput
          onChange={props.model.actions.handleUsernameChange}
          placeHolder="Your Name"
          value={props.model.state.username}
          errorMsg={props.model.state.nameError}
        />
        <EmptyDiv width="0.25rem" />
        <IconButton
          src={arrowUrl}
          size="2.75rem"
          onClick={props.model.actions.onCreateRoom}
          disabled={!notEmpty}
        />
      </div>
    </React.Fragment>
  );
};
const JoinGameForm = (props: { model: ILandingPageModel }) => {
  const notEmpty =
    props.model.state.username.length != 0 &&
    props.model.state.roomCode.length != 0;
  return (
    <React.Fragment>
      <TextInput
        onChange={props.model.actions.handleRoomCodeChange}
        placeHolder="Room Code"
        value={props.model.state.roomCode}
        errorMsg={props.model.state.codeError}
      />
      <EmptyDiv height="0.6rem" />
      <div className={styles.form_row}>
        <TextInput
          onChange={props.model.actions.handleUsernameChange}
          placeHolder="Your Name"
          value={props.model.state.username}
          errorMsg={props.model.state.nameError}
        />
        <EmptyDiv width="0.25rem" />
        <IconButton
          src={arrowUrl}
          size="2.75rem"
          onClick={props.model.actions.onJoinRoom}
          disabled={!notEmpty}
        />
      </div>
      <EmptyDiv height="1rem" />
      <Checkbox
        label="SPECTATOR"
        onClick={() => {
          props.model.actions.handleCheckBoxClick(
            !props.model.state.isSpectator
          );
        }}
      ></Checkbox>
    </React.Fragment>
  );
};

const LandingPage = (props: { isHostGame: boolean }) => {
  const globalSignalr = useSignalRGlobalEvents();
  const history = useHistory();
  const model = useLandingPage();
  const pageController = useAnimation();
  const spinnerController = useAnimation();
  const hostGameBottomText = (
    <div className={styles.bottom_text}>
      Click here if you have a{" "}
      <span className={styles.link} onClick={() => history.push("/join")}>
        room code
      </span>
    </div>
  );

  const joinGameBottomText = (
    <div className={styles.bottom_text}>
      Click here to{" "}
      <span className={styles.link} onClick={() => history.push("/")}>
        host a game
      </span>
    </div>
  );

  useEffect(() => {
    if (model.state.isLoading) {
      framerUtils.swapPresence(pageController, spinnerController);
    } else {
      framerUtils.swapPresence(spinnerController, pageController);
    }
  }, [model.state.isLoading]);
  useEffect(() => {
    globalSignalr();
  }, []);
  return (
    <Page>
      <motion.div
        animate={spinnerController}
        initial={{ opacity: 0, display: "none" }}
      >
        <PageSpinner />
      </motion.div>
      <motion.div animate={pageController} initial={{ opacity: 0 }}>
        <div className={styles.landing_page}>
          <div className={styles.form_container}>
            <div className={styles.form}>
              <H1 text="Squario"></H1>
              <EmptyDiv height="4rem"></EmptyDiv>
              <H2 text={props.isHostGame ? "New Game" : "Join Game"}></H2>
              <EmptyDiv height="1.5rem" />
              {props.isHostGame ? (
                <NewGameForm model={model} />
              ) : (
                <JoinGameForm model={model} />
              )}
              <EmptyDiv height="3.25rem" />
              {props.isHostGame ? hostGameBottomText : joinGameBottomText}
            </div>
          </div>
          <div className={styles.graphic}></div>
        </div>
      </motion.div>
    </Page>
  );
};

export default LandingPage;
