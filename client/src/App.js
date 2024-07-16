import "./App.css";
import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Column from "./components/Column/Column";
import ConnectionSwitch from "./components/ConnectionSwitch/ConnectionSwitch";
import WebSocketComponent from "./testComp";

// import socket from "./websocket";

import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL =
//   process.env.NODE_ENV === "production" ? undefined : "http://localhost:8000";

// create socket without connecting

const App = () => {
  const serverURL = "ws://localhost:8000";

  const [socket] = useState(io({ autoConnect: false }));

  const unusedEffect =
    (() => {
      console.log("creating socket");

      socket.connect(serverURL);

      console.log("listening for connection");
      socket.on("connect", () => {
        console.log("connected");
      });

      socket.on("disconnect", () => {
        console.log("disconnected");
      });

      socket.on("updateData", (data) => {
        console.log("updateData", data);
      });

      socket.on("hello", (data) => {
        console.log("hello", data);
      });

      // console.log("connecting");
      // socket.connect("http://localhost:8000");

      return () => {
        console.log("removing listeners");
        socket.disconnect();
        socket.off("connect");
        socket.off("disconnect");
        socket.off("updateData");
        socket.off("hello");
      };
    },
    [socket]);

  return (
    <div>
      {/* <ConnectionSwitch socket={socket}>Connect</ConnectionSwitch> */}
      <button
        onClick={() => {
          console.log("disconnecting");
          socket.disconnect();
        }}
      >
        disconnect
      </button>
      <button
        onClick={() => {
          console.log("connecting");
          socket.connect();
        }}
      >
        connect
      </button>
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
      <Container>
        <Column title="To Do List" icon="star" id="todolist"></Column>
      </Container>
      <WebSocketComponent />
    </div>
  );
};

export default App;
