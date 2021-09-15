const express = require("express");
const routerUser = express.Router();
const { userController } = require("../controllers");
routerUser.post("/register", (req, res) => userController.create(req, res));

module.exports = routerUser;
