import express from "express";
import { data } from "./../repository/data";
const tollRouter = express.Router();
tollRouter
  .post("/", (req, res) => {
    res.send("Tolls Post");
  })
  .get("/", (req, res) => {
    res.send(data.getAllPendingTickets());
  });

export default tollRouter;
