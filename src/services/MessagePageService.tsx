import React, { createContext, useState } from "react";

interface IMessagePageService {
  state: {
    message: string;
    callback: () => void;
    buttonLabel: string;
  };
  actions: {
    setMessagePageProperties: (
      message: string,
      label: string,
      callback: () => void
    ) => IMessagePageService["state"];
  };
}

export const MessagePageService = createContext({} as IMessagePageService);

const MessagePageSericeProvider = (props: { children: React.ReactNode }) => {
  const [message, setMessage] = useState("");
  const [buttonLabel, setButtonLabel] = useState("");
  const [callback, setCallBack] = useState<() => void>(() => () => {});

  const setMessagePageProperties = (
    msg: string,
    label: string,
    call: () => void
  ) => {
    setCallBack(() => () => call());
    setMessage(msg);
    setButtonLabel(label);
    return {
      message: msg,
      callback: call,
      buttonLabel: label,
    };
  };

  return (
    <MessagePageService.Provider
      value={
        {
          state: { message, callback, buttonLabel },
          actions: { setMessagePageProperties },
        } as IMessagePageService
      }
    >
      {props.children}
    </MessagePageService.Provider>
  );
};

export default MessagePageSericeProvider;
