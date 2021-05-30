import React from "react";
import EmptyDiv from "../components/EmptyDiv";
import MenuButton from "../components/MenuButton";
import MessageText from "../components/MessageText";
import Page from "../components/Page";
import styles from "../styles/MessagePage.module.css";
import useMessagePage from "../ViewModels/useMessagePage";

const MessagePage = () => {
  const model = useMessagePage();
  return (
    <Page>
      <div className={styles.message_page}>
        <div className={styles.container}>
          <MessageText text={model.state.message} textAlign="center" />
          <EmptyDiv height="3.75rem" />
          <MenuButton
            label={model.state.buttonLabel}
            onClick={() => {
              model.state.callback();
            }}
          />
        </div>
      </div>
    </Page>
  );
};

export default MessagePage;
