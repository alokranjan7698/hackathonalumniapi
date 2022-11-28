const { urlencoded, json } = require("express");
const express = require("express");
const alumniRouter = require("./src/routes/alumniRoutes");
const studentRouter = require("./src/routes/studentRoutes");
const mongodbConnection=require("./src/db/connection");
mongodbConnection();
const app = express();

const port = 9000;

//New imports
const http = require('http').Server(app);
const cors = require('cors');
app.use(cors());

//New imports
const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://localhost:3000"
  }
});

let users = [];

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
  });

  socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data));

  //Listens when a new user joins the server
  socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/student", studentRouter);
app.use("/alumni", alumniRouter);

// console.log(JSON.stringify(568));

http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
