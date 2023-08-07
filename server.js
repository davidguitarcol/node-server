const { tasks } = require("./modules/showMenu");
const http = require("http");
const port = 3000;
const host = "127.0.0.1";
const server = http.createServer((req, res) => {
  const url1 = req.url;
  console.log(url1);
  if (req.method === "GET" && url1 === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ tasks }));
  }
  res.end();
});

server.listen(port, host, () => {
  console.log("server listening on port " + port);
});