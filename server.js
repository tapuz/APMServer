
const serverPort = 3000;
const io = require("socket.io");
const server = io.listen(serverPort);

server.on("connection", function(socket) {
  console.log("user connected");
  socket.emit("welcome", "welcome man");
});