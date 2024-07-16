import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const WebSocketComponent = () => {
  //   const [socket, setSocket] = useState(
  //     io({ autoConnect: false, transports: ["websocket"] })
  //   );

  //   useEffect(() => {
  //     // Establish WebSocket connection
  //     socket.connect("ws://localhost:8000");

  //     // Emit an event immediately after establishing the connection
  //     socket.on("connect", () => {
  //       console.log("Connected to WebSocket server");
  //       socket.emit("hello", { data: "Hello, server!" });
  //     });

  //     // Cleanup on component unmount
  //     return () => socket.disconnect();
  //   }, []);

  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = io("ws://localhost:8000", { transports: ["websocket"] });
    setSocket(socket);
    socket.emit("hello", "world", (data) => {
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      WebSocket Component
      <button
        onClick={() => {
          console.log("emitting hello");
          socket.emit("hello", "world", (data) => {
            console.log(data);
          });
        }}
      >
        hello
      </button>
    </div>
  );
};

export default WebSocketComponent;
