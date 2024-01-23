import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { userRouter } from "./src/user/user.router.js";
import { messageRouter } from "./src/message/message.router.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/messages", messageRouter);

dbConnection();
app.listen(3000, () => {
  console.log("Server Is Running!");
});
