import React, { createContext, useState } from "react";

export enum NavigationLevel {
  notInRoom,
  lobby,
  game,
  gameLose,
  gameWin,
  error,
}

export interface INavigationService {
  state: {
    navLevel: NavigationLevel;
  };
  actions: {
    changeNavLevel: (level: number) => number;
  };
}

export const NavigationService = createContext({} as INavigationService);

const NavigationServiceProvider = (props: { children: React.ReactNode }) => {
  const [navLevel, setNavLevel] = useState(NavigationLevel.notInRoom);

  const changeNavLevel = (level: number) => {
    setNavLevel(level);
    return level;
  };

  return (
    <NavigationService.Provider
      value={
        {
          state: { navLevel },
          actions: { changeNavLevel },
        } as INavigationService
      }
    >
      {props.children}
    </NavigationService.Provider>
  );
};

export default NavigationServiceProvider;
