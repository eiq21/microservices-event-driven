const routerUser = require("./user.router");
const express = require("express");
const v1Router = express.Router();

v1Router.get("/", (req, res) => {
  return res.json({ message: "Yo! we're up" });
});
v1Router.use("/users", routerUser);

module.exports = { v1Router };
