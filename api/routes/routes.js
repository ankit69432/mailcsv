const express = require("express");
const { createUser, mail } = require("../controllers/controller");
const router = express.Router();

router.post("/user", createUser).post("/mail", mail);

module.exports = router;
