import express from "express";
import { data } from "../repository/data";
const ticketRouter = express.Router();
ticketRouter
  .post("/", (req, res) => {
    res.send("Tickets Post");
  })
  .get("/", (req, res) => {
    res.send(data.getAllPendingTickets());
  });

export default ticketRouter;
