import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Toll Service");
});

// Routes
app.use(`/api/`, router);

app.listen(port, () => {
  console.log(`Auth Service Running on port: ${port}`);
});

enum test {
  go,
  stop,
  wait,
}

function getFullName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}

interface User {
  firstName: string;
}

interface User {
  lastName: string;
}

const myUser: User = {
  firstName: "john",
  lastName: "doe",
};
