import { createContext } from "node:vm";
import React, { ReactNode } from "react";

export interface IGameService {
  state: {
    levelData: string;
    button1: number;
    button2: number;
  };
  actions: {
    setLevelData: (json: string) => void;
  };
}

export const GameService = createContext({} as IGameService);

export default function GameServiceProvider(props: { children: ReactNode }) {}
