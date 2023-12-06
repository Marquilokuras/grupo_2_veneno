const express = require("express");
const router = express.Router();
const mainController = require("../../controller/api/apiMainController");

router.get("/products/list", mainController.list);
router.get("/users/list", mainController.userList);

module.exports = router;