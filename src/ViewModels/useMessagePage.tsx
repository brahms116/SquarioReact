import React, { useContext } from "react";
import { MessagePageService } from "../services/MessagePageService";

const useMessagePage = () => {
  const service = useContext(MessagePageService);

  return { state: { ...service.state } };
};

export default useMessagePage;
