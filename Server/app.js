const { Socket } = require("dgram");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Sup Dumbass");
});

app.get("/video", (req, res) => {
  res.send("Hey!");
});

io.on("connection", (socket) => {
  console.log("made connection");
  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});
