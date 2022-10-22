import { Server } from "socket.io";

const runIO = () => {
  const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  console.log('some goodies please')
});
}


export default runIO