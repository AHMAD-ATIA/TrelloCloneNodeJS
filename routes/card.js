const express = require("express")

const { getAllCards, updateCard, deleteCard } = require("../controllers/card.controller");

const router = express.Router();

router.get("/getAllCards", getAllCards);
router.put("/updateCard", updateCard);
router.delete("/deleteCard", deleteCard);


module.exports = router;