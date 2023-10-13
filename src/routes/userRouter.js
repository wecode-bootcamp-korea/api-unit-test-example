const express = require("express");
const { userController } = require("../controllers");

const userRouter = express.Router();

userRouter.post("/signUp", userController.signUp);

module.exports = { userRouter };
