require("dotenv").config();
var express = require("express");
var http = require("http");
const cors = require("cors");

var userRouter = require("./routes/user");
var tradeRouter = require("./routes/trade");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter);
app.use("/", tradeRouter);

app.set("port", port);

var server = http.createServer(app);

server.listen(port, function () {
  console.log("Server listening on port 3000!");
});
