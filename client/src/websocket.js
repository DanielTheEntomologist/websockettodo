import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL =
//   process.env.NODE_ENV === "production" ? undefined : "http://localhost:8000";

// create socket without connecting
// const socket = io({ autoConnect: false });
const socket = {};

export default socket;
