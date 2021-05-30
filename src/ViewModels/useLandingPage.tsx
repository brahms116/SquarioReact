import { HubConnection } from "@microsoft/signalr";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useSignalRGlobalEvents from "../hooks/useSignalRGlobalEvents";
import { MessagePageService } from "../services/MessagePageService";
import {
  NavigationLevel,
  NavigationService,
} from "../services/NavigationService";
import { RoomService } from "../services/RoomService";
import { SignalRService } from "../services/SignalRService";

export interface ILandingPageModel {
  state: {
    isLoading: boolean;
    roomCode: string;
    username: string;
    nameError: string;
    codeError: string;
    isSpectator: boolean;
  };
  actions: {
    handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRoomCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCreateRoom: () => void;
    onJoinRoom: () => void;
    handleCheckBoxClick: (value: boolean) => boolean;
  };
}

const useLandingPage = () => {
  const history = useHistory();
  const signalRService = useContext(SignalRService);
  const navService = useContext(NavigationService);
  const roomService = useContext(RoomService);
  const msgService = useContext(MessagePageService);
  const [username, setUsername] = useState("");
  const [nameError, setNameError] = useState("");
  const [codeError, setCodeError] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [isSpectator, setIsSpectator] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (signalRService.state.connectionId !== "") {
      setIsLoading(false);
    }
  }, [signalRService.state.connectionId]);

  useEffect(() => {
    if (signalRService.state.connectionId !== "") {
      const toLobby = () => {
        navService.actions.changeNavLevel(NavigationLevel.lobby);
        history.push("/lobby");
      };

      const toWarning = () => {
        msgService.actions.setMessagePageProperties(
          "Your Device is too small to display the game, you can continue to use this device as a controller/gamepad, but will need to join the game with a larger device as a spectator to view the game screen",
          "ok",
          toLobby
        );
        navService.actions.changeNavLevel(NavigationLevel.error);
        history.push("/msg");
      };

      signalRService.state.connection.on("onRoomCreated", (code: string) => {
        roomService.actions.initialiseRoomCode(code);
        window.innerWidth < 1000 ? toWarning() : toLobby();
      });

      signalRService.state.connection.on("onRoomJoined", (code: string) => {
        roomService.actions.initialiseRoomCode(code);
        window.innerWidth < 1000 ? toWarning() : toLobby();
      });
    }
  }, [signalRService.state.connectionId]);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const handleRoomCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomCode(e.currentTarget.value);
  };

  const onCreateRoom = () => {
    signalRService.state.connection.invoke(
      "CreateRoom",
      signalRService.state.connectionId,
      username
    );
    setIsLoading(true);
  };

  const onJoinRoom = () => {
    signalRService.state.connection.invoke(
      isSpectator ? "JoinAsSpectator" : "JoinRoom",
      signalRService.state.connectionId,
      roomCode,
      username
    );
    setIsLoading(true);
  };

  const handleCheckBoxClick = (value: boolean) => {
    setIsSpectator(true);
    return value;
  };

  return {
    state: { isLoading, roomCode, username, nameError, codeError, isSpectator },
    actions: {
      handleUsernameChange,
      handleRoomCodeChange,
      onCreateRoom,
      onJoinRoom,
      handleCheckBoxClick,
    },
  } as ILandingPageModel;
};

export default useLandingPage;
