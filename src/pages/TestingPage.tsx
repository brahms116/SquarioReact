import React, { useEffect, useState } from "react";
import styles from "../styles/TestingPage.module.css";
import { HubConnectionBuilder } from "@microsoft/signalr";
const TestingPage = () => {
  const [connection] = useState(
    new HubConnectionBuilder().withUrl("https://localhost:5001/game").build()
  );
  const [connectionId, setConnectionId] = useState("");
  const [roomCode, setRoomCode] = useState("");

  const handleCreateRoom = () => {
    connection.invoke("CreateRoom", connectionId, "TestUser");
  };

  const handleDirections = (isUp: boolean) => {
    connection.invoke("ChangeDirection", connectionId, isUp ? 1 : 3);
  };

  const handleJoinRoom = () => {
    connection.invoke(
      "JoinRoom",
      connectionId,
      roomCode,
      connectionId.substr(0, 5)
    );
  };

  const handleStartGame = () => {
    connection.invoke("StartGame", connectionId);
  };
  useEffect(() => {
    const init = async () => {
      await connection.start();
      connection.on("id", (data) => {
        setConnectionId(data);
        console.log(data);
      });
      connection.on("onRoomCreated", (data) => console.log(data));
      connection.on("onRoomJoined", (data) => console.log(data));
      connection.on("onPlayerJoined", (data) => console.log(data));
      connection.on("onPlayerLeave", (data) => console.log(data));
      connection.on("onGameStart", (data) => console.log(data));
      connection.on("onGameData", (data) => console.log(data));
      connection.on("onError", (data) => console.log(data));
    };
    init();
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.button} onClick={handleCreateRoom}>
        CREATE ROOM
      </div>
      <input
        className={styles.text_field}
        type="text"
        value={roomCode}
        onChange={(e) => {
          setRoomCode(e.currentTarget.value.toUpperCase());
        }}
      />
      <div className={styles.button} onClick={handleJoinRoom}>
        JOIN ROOM
      </div>
      <div className={styles.button} onClick={handleStartGame}>
        START GAME
      </div>
      <div className={styles.button}>RETRY</div>
      <div className={styles.button}>NEW LEVEL</div>
      <div
        className={styles.button}
        onClick={() => {
          handleDirections(true);
        }}
      >
        BUTTON 1
      </div>
      <div
        className={styles.button}
        onClick={() => {
          handleDirections(false);
        }}
      >
        BUTTON 2
      </div>
      <div className={styles.button}>SWITCH</div>
    </div>
  );
};

export default TestingPage;
