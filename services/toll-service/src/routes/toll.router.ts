import express from "express";
const tollRouter = express.Router();

tollRouter
  .post("/", (req, res) => {
    res.send("Tolls Post");
  })
  .get("/", (req, res) => {
    res.send("Tolls get all");
  });

export default tollRouter;
