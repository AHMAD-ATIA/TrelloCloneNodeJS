const express =  require("express");

const {getAllBoards, getBoardById, createBoard, deleteBoard, updateBoard} =  require("../controllers/board.controller.js");

const router = express.Router();

router.get("/boards", getAllBoards);

router.get("/getBoard", getBoardById);

router.post("/createBoard", createBoard);

router.delete("/deleteBoard", deleteBoard);

router.put("/updateBoard", updateBoard);
module.exports = router;