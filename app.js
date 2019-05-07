const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  console.log("server started");
  res.end("Hello there!");
});

server.listen(port, error => {
  {
    if (error) {
      console.log("Hello error!");
    }
    console.log("Server started listening on ${port}");
  }
});
