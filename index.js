const { createServer } = require("http");



require("dotenv").config();
const db = require("./services/db.js");

const express = require("express");
const verifyUser = require("./middleware/auth.middleware.js")

const app = express();

app.use(express.json());



const authRouter = require( "./routes/auth.cjs");
const BoardController = require( "./routes/board.js");
const CardController = require("./routes/card.js");
const ListController = require("./routes/list.js");





// Connect DB
db.connect();


app.use("/api/auth", authRouter);
app.use("/api", verifyUser , BoardController);
app.use("/api" , verifyUser, CardController);
app.use("/api", verifyUser, ListController);



app.use("/test", (req, res) => {
  res.send("Server Working!!!")
})

app.all("*", (req, res) => {
  res.status(404).send("nicht gefunden!!!");
 
})




const server = createServer(app);


const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});