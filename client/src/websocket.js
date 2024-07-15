import { Socket } from "socket.io";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:8000";

const socket = Socket(URL);

// const socket = {};

export default socket;

// // create socket
// const socket = io({
//   autoConnect: false,
// });
// socket.connect("http://localhost:8000");

// // socket listeners
// socket.on("message", ({ author, content }) => app.addMessage(author, content));
// socket.on("newUser", (userName) =>
//   app.addMessage("Chat Bot", `${userName} has joined the conversation!`, true)
// );
// socket.on("removeUser", (userName) =>
//   app.addMessage("Chat Bot", `${userName} has left the conversation!`, true)
// );
