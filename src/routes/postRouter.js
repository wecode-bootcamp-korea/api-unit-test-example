const express = require("express"); 
const { postController } = require("../controllers");
const postRouter = express.Router();

postRouter.get("/", postController.getAllPosts);

module.exports = { postRouter };
