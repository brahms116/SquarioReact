import { HubConnection } from "@microsoft/signalr";
import React, { createContext, ReactNode, useState } from "react";

export interface IPlayer {
  username: string;
  ishost: boolean;
  connectionId: string;
}

export interface IRoomService {
  state: {
    playerList: IPlayer[];
    roomCode: string;
  };
  actions: {
    getPlayerList: (cnn: HubConnection, id: string) => void;
    setPlayerList: (list: IPlayer[]) => IPlayer[];
    initialiseRoomCode: (code: string) => string;
  };
}

export const RoomService = createContext({} as IRoomService);

export default function RoomServiceProvider(props: { children: ReactNode }) {
  const [playerList, setList] = useState<IPlayer[]>([]);
  const [roomCode, setRoomCode] = useState("");

  const getPlayerList = (cnn: HubConnection, id: string) => {
    cnn.invoke("PlayerList", id);
  };
  const setPlayerList = (data: IPlayer[]) => {
    setList(data);
    return data;
  };

  const initialiseRoomCode = (code: string) => {
    setRoomCode(code);
    return code;
  };
  return (
    <RoomService.Provider
      value={{
        state: { playerList, roomCode },
        actions: { getPlayerList, setPlayerList, initialiseRoomCode },
      }}
    >
      {props.children}
    </RoomService.Provider>
  );
}
