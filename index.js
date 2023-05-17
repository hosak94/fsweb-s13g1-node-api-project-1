const server = require("./api/server");
console.log("hello world!");
const port = 9000;

server.listen(port, () => {
  console.log("server is listening on" + port);
});
// START YOUR SERVER HERE
