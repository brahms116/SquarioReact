import React from "react";
import DeviceServiceProvider from "./DeviceService";
import MessagePageSericeProvider from "./MessagePageService";
import NavigationServiceProvider from "./NavigationService";
import RoomServiceProvider from "./RoomService";
import SignalRServiceProvider from "./SignalRService";

const ServiceProvider = (props: { children: React.ReactNode }) => {
  return (
    <NavigationServiceProvider>
      <MessagePageSericeProvider>
        <SignalRServiceProvider>
          <RoomServiceProvider>{props.children}</RoomServiceProvider>
        </SignalRServiceProvider>
      </MessagePageSericeProvider>
    </NavigationServiceProvider>
  );
};

export default ServiceProvider;
