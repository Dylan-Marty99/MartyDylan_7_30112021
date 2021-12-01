const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const saucesCtrl = require("../controllers/post");

// router.get("/", auth, saucesCtrl.getAllPosts);
// router.post("/", auth, multer, saucesCtrl.createPost);
// router.get("/:id", auth, saucesCtrl.getOnePost);
// router.put("/:id", auth, multer, saucesCtrl.modifyPost);
// router.delete("/:id", auth, saucesCtrl.deletePost);

// router.post("/:id/like", auth, saucesCtrl.likeSauce);

module.exports = router;
