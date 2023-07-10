var express = require("express");
require("dotenv").config();
const db = require("../config/firebaseConfig.js");

var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post(
  "/register",
  function (req, res, next) {
    req.body.name = req.body.name.trim();
    req.body.email = req.body.email.trim();
    req.body.dob = req.body.dob.trim();
    next();
  },
  function (req, res, next) {
    if (req.body.name !== "" || req.body.email !== "" || req.body.dob !== "") {
      return next();
    }
  },
  function (req, res, next) {
    db.collection("users")
      .where("email", "==", req.body.email)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          next();
        } else {
          res.status(400).send({ message: "Email already exists" });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  },
  function (req, res, next) {
    db.collection("users")
      .add({
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
      })
      .then((docRef) => {
        res.status(201).send({ message: "User created successfully" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
);

module.exports = router;
