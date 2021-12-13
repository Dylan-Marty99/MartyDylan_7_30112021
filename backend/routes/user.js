const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

// router.get("/", userCtrl.getAllUsers);
// router.get("/:id", userCtrl.getOneUser;
// router.put("/:id", userCtrl.UpdateUser);
// router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
