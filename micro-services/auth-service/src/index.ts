import express from "express";
import dotenv from "dotenv";
import { AuthRouter } from "./routes/auth.router";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Auth Service");
});

// Routes
app.use(AuthRouter);

app.listen(port, () => {
  console.log(`Auth Service Running on port: ${port}`);
});
