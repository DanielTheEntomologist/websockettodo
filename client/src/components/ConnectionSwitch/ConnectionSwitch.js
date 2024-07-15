import styles from "./ConnectionSwitch.module.scss";
import socket from "../../websocket.js";
import { useState, useEffect } from "react";

import Button from "../Button/Button.js";

const ConnectionSwitch = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const toggleConnect = () => {
    if (isConnected) {
      socket.disconnect();
    } else {
      socket.connect();
    }
    setIsConnected(!isConnected);
  };

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  let className = styles.connected;

  return (
    <Button className={className} onClick={toggleConnect}>
      {props.children}
    </Button>
  );
};

export default ConnectionSwitch;
