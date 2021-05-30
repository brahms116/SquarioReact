import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import IPlayerListResponse from "../ResponseModels/IPlayerListReponse";
import { MessagePageService } from "../services/MessagePageService";
import {
  NavigationLevel,
  NavigationService,
} from "../services/NavigationService";
import { IPlayer, RoomService } from "../services/RoomService";
import { SignalRService } from "../services/SignalRService";

const useSignalRGlobalEvents = () => {
  const signalRService = useContext(SignalRService);
  const messasgeService = useContext(MessagePageService);
  const navService = useContext(NavigationService);
  const roomService = useContext(RoomService);
  const history = useHistory();
  const returnToHome = () => {
    navService.actions.changeNavLevel(NavigationLevel.notInRoom);
    history.push("/");
  };
  const handleConnectionError = (msg: string) => {
    messasgeService.actions.setMessagePageProperties(
      msg,
      "retry",
      returnToHome
    );
    navService.actions.changeNavLevel(NavigationLevel.error);
    history.push("/msg");
  };
  const init = async () => {
    if (history.location.pathname === "/msg") return;
    if (signalRService.state.connectionId === "") {
      try {
        await signalRService.actions.initialiseConnection();
      } catch (err) {
        handleConnectionError("Oops... Failed to connect");
      }
    }
  };
  useEffect(() => {
    if (
      signalRService.state.connectionId !== "" &&
      !signalRService.state.hasCompletedGlobalEventsSetup
    ) {
      signalRService.state.connection.onclose(() => {
        messasgeService.actions.setMessagePageProperties(
          "You have been disconnected",
          "ok",
          returnToHome
        );
        signalRService.actions.clearConnectionId();
        navService.actions.changeNavLevel(NavigationLevel.error);
        history.push("/msg");
      });
      signalRService.state.connection.on("onPlayerJoined", () => {
        roomService.actions.getPlayerList(
          signalRService.state.connection,
          signalRService.state.connectionId
        );
      });
      signalRService.state.connection.on("onPlayerLeave", () => {
        roomService.actions.getPlayerList(
          signalRService.state.connection,
          signalRService.state.connectionId
        );
      });

      signalRService.state.connection.on("error", (data) => console.log(data));

      signalRService.state.connection.on(
        "onPlayerList",
        (data: IPlayerListResponse) => {
          let list: IPlayer[] = [];
          if (data.players) {
            data.players.forEach((d) => {
              list.push({
                username: d.name,
                ishost: d.connectionId === data.host.connectionId,
                connectionId: d.connectionId,
              });
            });
            roomService.actions.setPlayerList(list);
          } else {
            messasgeService.actions.setMessagePageProperties(
              "Your room has been removed",
              "ok",
              () => {
                navService.actions.changeNavLevel(NavigationLevel.notInRoom);
                history.push("/");
              }
            );
            navService.actions.changeNavLevel(NavigationLevel.error);
            history.push("/msg");
          }
        }
      );
      signalRService.actions.completedGlobalEventsSetup();
    }
  }, [
    signalRService.state.connectionId,
    signalRService.state.hasCompletedGlobalEventsSetup,
  ]);
  return init;
};

export default useSignalRGlobalEvents;
