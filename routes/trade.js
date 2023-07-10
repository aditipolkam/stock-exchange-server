var express = require("express");
require("dotenv").config();
var router = express.Router();

router.post(
  "/buy",
  function (req, res, next) {
    req.body.tokenid = req.body.tokenid.trim();
    req.body.symbol = req.body.symbol.trim();
    req.body.quantity = req.body.quantity.trim();
    req.body.price = req.body.price.trim();
    next();
  },
  function (req, res, next) {
    if (
      req.body.tokenid !== "" ||
      req.body.symbol !== "" ||
      req.body.quantity !== "" ||
      req.body.price !== ""
    ) {
      return next();
    }
  },
  function (req, res, next) {
    //check if user has enough balance
  },
  function (req, res, next) {
    //create a buy order in the queue
  }
);

router.post(
  "/sell",
  function (req, res, next) {
    req.body.tokenid = req.body.tokenid.trim();
    req.body.symbol = req.body.symbol.trim();
    req.body.quantity = req.body.quantity.trim();
    req.body.price = req.body.price.trim();
    next();
  },
  function (req, res, next) {
    if (
      req.body.tokenid !== "" ||
      req.body.symbol !== "" ||
      req.body.quantity !== "" ||
      req.body.price !== ""
    ) {
      return next();
    }
  },
  function (req, res, next) {
    //check if user has enough quantity of the token
  },
  function (req, res, next) {
    //create a sell order in the queue
  }
);

module.exports = router;
