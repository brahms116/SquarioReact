import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { importWasm } from "../importWasm";
import {
  NavigationLevel,
  NavigationService,
} from "../services/NavigationService";
import { RoomService } from "../services/RoomService";
import { SignalRService } from "../services/SignalRService";

const useLobbyPage = () => {
  const sgr = useContext(SignalRService);
  const roomService = useContext(RoomService);
  const navService = useContext(NavigationService);
  const history = useHistory();
  const amIHost = () => {
    const index = roomService.state.playerList.findIndex(
      (e) => e.connectionId === sgr.state.connectionId
    );
    if (index == -1) return false;
    else return roomService.state.playerList[index].ishost;
  };
  const startGame = () => {
    sgr.state.connection.invoke("StartGame", sgr.state.connectionId);
  };
  const wasm_test = async (data: string) => {
    const obj = await importWasm();
    const TestStruct = new obj.TestStruct(JSON.stringify(data));
    console.log(TestStruct.get_value());
  };
  useEffect(() => {
    if (sgr.state.connectionId !== "") {
      roomService.actions.getPlayerList(
        sgr.state.connection,
        sgr.state.connectionId
      );
      sgr.state.connection.on("onGameStart", async (data) => {
        console.log(data);
        await wasm_test(data);
        navService.actions.changeNavLevel(NavigationLevel.game);
        history.push("/game");
      });
    }
  }, [sgr.state.connectionId]);

  return {
    state: {
      playerList: roomService.state.playerList,
      code: roomService.state.roomCode,
    },
    actions: {
      startGame,
    },
    utils: {
      amIHost,
    },
  };
};
export default useLobbyPage;
