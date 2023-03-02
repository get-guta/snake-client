const net = require('net')
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.27',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8")
  conn.on("data", () => {
    // code that does something when the connection is first established
    console.log("Ended cuz you idled");
  });

return conn; 
};

module.exports = connect;