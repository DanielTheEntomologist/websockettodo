// import express from "express";
// import path from "path";
// import cors from "cors";
import { Server } from "socket.io";

// set app and express settings
// const app = express();

// set paths
// const __dirname = path.resolve();
// const staticPath = path.join(__dirname, "/client");

// const corsOptions = { origin: "http://localhost:8000/*" };

// set middleware
// app.use(express.static(staticPath));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cors(corsOptions));

// create server state
const tasks = [];

// app.use("*", (req, res) => {
//   res.status(404);
// });

// const server = app.listen(8000, () => {
//   console.log("Server is running on port: 8000");
// });

const io = new Server(8000);
// const websocket = io.listen(server);

io.on("connection", (socket) => {
  console.log("New client! Its id – " + socket.id);
  socket.on("hello", (data) => {
    console.log("hello");
    socket.emit("hello", "world");
  });
  socket.on("disconnect", () => {
    console.log("Oh, socket " + socket.id + " has left");
  });
});

// io.on("connection", (socket) => {
//   console.log("New client! Its id – " + socket.id);
//   console.log(socket.conn.transport.name);
//   socket.broadcast.emit("updateData", tasks);

//   socket.on("disconnect", () => {
//     console.log("Oh, socket " + socket.id + " has left");
//   });
// });

// socket.on("removeTask", (taskId) => {
//   const index = tasks.find((task) => {
//     task.id === taskId;
//   });
//   tasks.splice(index, 1);

//   socket.broadcast.emit("updateData", tasks);
// });
// socket.on("addTask", (task) => {
//   tasks.push(task);
//   socket.broadcast.emit("updateData", tasks);
// });
