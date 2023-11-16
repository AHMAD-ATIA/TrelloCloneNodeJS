const express = require("express");

const { getAllLists } = require("../controllers/list.controller");

const router = express.Router();

router.get("/getAllLists", getAllLists);


module.exports = router;