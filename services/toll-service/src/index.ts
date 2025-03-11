import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Toll Service");
});

// Routes
app.use(`/api/`, router);

app.listen(port, () => {
  console.log(`Auth Service Running on port: ${port}`);
});
