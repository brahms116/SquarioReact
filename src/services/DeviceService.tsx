import React, { createContext, ReactNode, useState } from "react";

export interface IDeviceService {
  state: {
    hasShownSDMessage: boolean;
  };
  actions: {
    shownSDMessage: () => boolean;
    isSmallDevice: () => boolean;
  };
}

export const DeviceService = createContext({} as IDeviceService);

export default function DeviceServiceProvider(props: { children: ReactNode }) {
  const [hasMessageShown, setSetHasMessageShown] = useState(false);

  const shownSDMessage = () => {
    setSetHasMessageShown(true);
    return true;
  };

  const isSmallDevice = () => {
    return window.innerWidth > 1000;
  };

  return (
    <DeviceService.Provider
      value={
        {
          state: { hasShownSDMessage: hasMessageShown },
          actions: { shownSDMessage, isSmallDevice },
        } as IDeviceService
      }
    >
      {props.children}
    </DeviceService.Provider>
  );
}
