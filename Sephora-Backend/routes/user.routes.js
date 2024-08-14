const express = require("express");
const userRegistration = require("../controllers/UserRequest/UserRegistration.controller");
const userLogin = require("../controllers/UserRequest/UserLogin.controller");
const userRouter = express.Router();

userRouter.post("/register", userRegistration);
userRouter.post("/login", userLogin);

module.exports = userRouter;