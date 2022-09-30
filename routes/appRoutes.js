const path = require("path");
const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const formController = require("../controllers/appController");

router.get("/", appController.getIndex);
router.get("/form", appController.getForm);

module.exports = router;
