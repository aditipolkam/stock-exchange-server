require("dotenv").config();
var express = require("express");
var http = require("http");
const cors = require("cors");

var userRouter = require("./routes/user");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter);

app.set("port", port);

var server = http.createServer(app);

server.listen(port, function () {
  console.log("Server listening on port 3000!");
});
