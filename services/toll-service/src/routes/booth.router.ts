import express from "express";
import { data } from "../repository/data";
const tollRouter = express.Router();
tollRouter
  .post("/", (req, res) => {
    res.send("Booths Post");
  })
  .get("/", (req, res) => {
    res.send(data.getAllBooths());
  });

export default tollRouter;
