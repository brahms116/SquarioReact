import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import React, { createContext, useEffect, useState } from "react";
import AppSettings from "../AppSettings";
import Sleep from "../utils/Sleep";

interface ISignalRService {
  state: {
    connection: HubConnection;
    connectionId: string;
    hasCompletedGlobalEventsSetup: boolean;
  };
  actions: {
    initialiseConnection: () => Promise<HubConnection>;
    clearConnectionId: () => void;
    completedGlobalEventsSetup: () => void;
  };
}

export const SignalRService = createContext({} as ISignalRService);

const SignalRServiceProvider = (props: { children: React.ReactNode }) => {
  const [connection] = useState<HubConnection>(
    new HubConnectionBuilder().withUrl(AppSettings.signalRUrl).build()
  );
  const [connectionId, setConnectionId] = useState("");
  const [hasCompletedGlobalEventsSetup, setHasCompletedSetup] = useState(false);
  useEffect(() => {
    connection.on("id", (data) => {
      setConnectionId(data);
    });
  }, []);

  const initialiseConnection = async () => {
    try {
      await connection.start();
    } catch (err) {
      throw err;
    }
    return connection;
  };

  const clearConnectionId = () => {
    setConnectionId("");
  };

  const completedGlobalEventsSetup = () => setHasCompletedSetup(true);

  return (
    <SignalRService.Provider
      value={
        {
          state: { connection, connectionId, hasCompletedGlobalEventsSetup },
          actions: {
            initialiseConnection,
            clearConnectionId,
            completedGlobalEventsSetup,
          },
        } as ISignalRService
      }
    >
      {props.children}
    </SignalRService.Provider>
  );
};

export default SignalRServiceProvider;
