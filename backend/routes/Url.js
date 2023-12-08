const express = require("express");
const qrcode = require('qrcode')
const router = express.Router();
const {Formf } = require("../controller/controller");


router.post("/form", Formf);
module.exports = router;
