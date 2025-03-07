import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Auth Service");
});

app.listen(port, () => {
  console.log(`Auth Service Running on port: ${port}`);
});
