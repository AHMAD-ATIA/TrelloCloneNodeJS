const express = require("express");

const { getAllLists, updateList } = require("../controllers/list.controller");

const router = express.Router();

router.get("/getAllLists", getAllLists);
router.put("/updateList", updateList);



module.exports = router;