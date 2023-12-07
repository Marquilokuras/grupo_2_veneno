const express = require("express");
const router = express.Router();
const usersController = require("../../controller/api/apiUsersController")

router.get("/users/list", usersController.list);
router.get("/users/:id", usersController.detail);

module.exports = router;