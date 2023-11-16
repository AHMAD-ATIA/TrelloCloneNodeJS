const express = require("express")

const { getAllCards } = require("../controllers/card.controller");

const router = express.Router();

router.get("/getAllCards", getAllCards);


module.exports = router;