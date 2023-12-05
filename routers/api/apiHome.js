const express = require("express");
const router = express.Router();
const mainController = require("../../controller/api/apiMainController");

router.get("/api/list", mainController.list);

module.exports = router;