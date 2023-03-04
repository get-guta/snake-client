const net = require('net');
const {IP, PORT} = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", () => {
    // code that does something when the connection is first established
    console.log("Ended cuz you idled");
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    setTimeout(() => { conn.write('Name: GLA'); }, 50);
    setTimeout(() => { conn.write('Move: up'); }, 100);
    setTimeout(() => { conn.write('Move: down'); }, 150);
    setTimeout(() => { conn.write('Move: left'); }, 200);
    setTimeout(() => { conn.write('Move: right'); }, 250);


    //up = setInterval(() => {conn.write('Move: up')}, 500)
    //clearInterval(up);
  })

  return conn;

};

module.exports = connect;